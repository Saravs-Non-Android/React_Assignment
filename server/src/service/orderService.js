/**
 * Created by IMFCORP\mohanpratap.singh on 27/3/17.
 */
var Q = require('q');
var dbConnection = require('../db/dbConnection');
var Order = require('../db/order');
var restaurantService = require('../service/restaurantService');

var orderController = {
    createOrder: function (id) {
        var deferred = Q.defer();
        if (id != null && id != 'null' && id != '') {
            return restaurantService.getById(id).then(function (data, err) {
                var data  = data[0];
                if (err) {
                    deferred.reject(err);
                } else {
                    var newOrder = new Order({
                        orderBy: makeId(),
                        name: data.name,
                        category: data.category,
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
                    newOrder.save(function (err) {
                        if (err) {
                            deferred.reject(err);
                        } else {
                            deferred.resolve({});
                        }

                    });
                }
            });

        }
        return deferred.promise;
    }
};

function makeId()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 7; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

module.exports = orderController;