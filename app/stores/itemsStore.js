let dispatcher = require("../dispatcher");
let restaurantService = require("../services/restaurantService");
function ItemStore() {
  let listeners = [];
  let isSearch = false;
  let searchResult = {};

  function getItems(cb) {
    if (!isSearch) {
      restaurantService.getAll().then(function (res) {
        isSearch = false;
        cb(res);
      });
    } else {
      cb(searchResult);
    }
  }

    function onChange(listener) {
    getItems(listener);
    listeners.push(listener);
  }

  function searchItems(items) {
    isSearch = true;
    restaurantService.search(items).then(function (res) {
      searchResult = res;
      triggerListeners();
    });
  }

  function addToCart(items) {
    let self =  items;
    restaurantService.addToCart(items).then(function (res) {
      if (res && res.data == "OK") {
        alert("Below Restaurant " + res.message +"\n" + self.map(function(i){ return i.split("-")[1]}));
      }
    });
  }

  function triggerListeners() {
    getItems(function (res) {
      listeners.forEach(function (listener) {
        listener(res);
      });
    });
  }

  dispatcher.register(function (payload) {
    let split = payload.type.split(":");
    if (split[0] === "item") {
      switch (split[1]) {
        case "searchItems":
          searchItems(payload.item);
          break;
        case "addToCart":
          addToCart(payload.item);
          break;
      }
    }
  });

  return {
    onChange: onChange,
  }
}

module.exports = ItemStore();