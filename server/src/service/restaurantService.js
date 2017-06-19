/**
 * Created by IMFCORP\mohanpratap.singh on 27/3/17.
 */
'use strict';
var Q = require('q');
var dbConnection = require('../db/dbConnection');
var Restaurant = require('../db/restaurant');

var restaurantService = {
    createRestaurant: function (data) {
        var deferred = Q.defer(),
            newRestaurant = new Restaurant({
                name: data.name.trim(),
                image: data.image.trim(),
                category: data.category.split(',').map(function (cat) {
                    return cat.trim()
                }),
                amount: data.amount,
                created_at: new Date(),
                updated_at: new Date(),
                address: {
                    addressLine1: data.address.addressLine1.trim(),
                    addressLine2: data.address.addressLine2.trim(),
                    city: data.address.city.trim(),
                    pinCode: parseInt(data.address.pinCode),
                    state: data.address.state.trim()
                },
            });
        newRestaurant.save(function (err) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve({});
            }

        });
        return deferred.promise;
    },
    getAll: function () {
        var deferred = Q.defer();
        Restaurant.find({}, {__v: 0, updated_at: 0, created_at: 0}, function (err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    },
    getById: function (id) {
        var deferred = Q.defer();
        return Restaurant.find({_id: id}, {__v: 0, updated_at: 0, created_at: 0}, function (err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    },
    search: function (filter) {
        var deferred = Q.defer();
        console.log('Filter Query ==>', filter);
        if (filter.sort) {
            var sortValue = filter.sort;
            delete filter.sort;
            Restaurant.find(filter).sort({name: sortValue}).exec(function (err, results) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(results);
                }
            });
        } else {
            return Restaurant.find(filter, {__v: 0, updated_at: 0, created_at: 0}, function (err, result) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(result);
                }
            });
        }
        return deferred.promise;
    }
};
module.exports = restaurantService;