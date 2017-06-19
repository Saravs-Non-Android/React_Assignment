/**
 * Created by IMFCORP\mohanpratap.singh on 27/3/17.
 */
'use strict';
var Q = require('q');
var restaurantService = require('../service/restaurantService');

var restaurantController = {
  /**
   * Create a Restaurant
   * @param req
   * @param res
   * @returns {Promise|Promise.<TResult>|*}
   */
  createRestaurant: function (req, res) {
    var name = req.body.name;
    if (name != null && name != 'null' && name != '') {
      return restaurantService.createRestaurant(req.body).then(function (data, err) {
        if (!err) {
          return res.send({
            message: 'Restaurant created successfully',
            data: 'OK'
          });
        } else {
          return res.send({
            error: err,
            message: 'unable to create Restaurant'
          });
        }
      });
    }
  },
  /**
   * Get Restaurants all/filter based
   * @param req
   * @param res
   * @returns {*}
   */
  getAll: function (req, res) {
    return restaurantService.getAll().then(function (data, err) {
      if (!err) {
        res.send({restaurant: data});
      } else {
        res.send({
          error: err,
          message: 'Unable to fetch Restaurant Data'
        });
      }
    });
  },
  /**
   * Filter option request type -
   * filter={"category":["North Indian",  "South Indian"] , "name":"Leon" , "city": "name of city"}
   * @param req
   * @param res
   * @returns {Promise|Promise.<TResult>|*}
   */
  search: function (req, res) {
    var filter = {};
    var obj = JSON.parse(req.query.filter);
    obj.name ? (filter['name'] = new RegExp(obj.name.trim())) : '';
    obj.city ? (filter['address.city'] = obj.city.trim()) : '';
    obj.sort ? (filter['sort'] = parseInt(obj.sort)) : '';
    obj.category ? (filter['category'] = {
          $in: obj.category.map(function (cat) {
            return cat.trim()
          })
        }) : {};
    obj.amount ? (filter['amount'] = {
          '$gte': parseInt(obj.amount.split('-')[0]),
          '$lte': parseInt(obj.amount.split('-')[1])
        }) : {};
    console.log(filter['amount']);
    return restaurantService.search(filter).then(function (data, err) {
      if (!err) {
        res.send({restaurant: data});
      } else {
        res.send({
          error: err,
          message: 'Unable to fetch Restaurant Data'
        });
      }
    });
  }
};
module.exports = restaurantController;