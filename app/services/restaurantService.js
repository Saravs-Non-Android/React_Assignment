/**
 * Created by IMFCORP\mohanpratap.singh on 30/3/17.
 */
var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "http://localhost:8888/api/restaurant";


module.exports = {
  getAll: function () {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: resourceUrl,
        method: "GET",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  },
  search: function (searchParams) {
    var filter = {};
    searchParams.name ? (filter['name'] = searchParams.name) : '';
    searchParams.city ? (filter['city'] = searchParams.city.trim()) : '';
    searchParams.cuisine ? (filter['category'] = [searchParams.cuisine.trim()]) : [];
    searchParams.sortBy ? (filter['sort'] = searchParams.sortBy.trim()) : 'asc';
    searchParams.budget ? (filter['amount'] = searchParams.budget.trim()) : '';
    var Promise = promise.Promise;
    console.log("Query Data", JSON.stringify(filter));
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: resourceUrl + '/search?filter=' + JSON.stringify(filter),
        method: "GET",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  },
  addToCart: function (cartData) {
    cartData = cartData || [];
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: resourceUrl + '/order',
        method: "POST",
        data: {"_id": cartData},
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  }
}