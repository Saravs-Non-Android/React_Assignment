/**
 * Created by IMFCORP\mohanpratap.singh on 27/3/17.
 */
var Q = require('q');
var orderService = require('../service/orderService');
var orderController = {
    createOrder: function (req, res) {
        var orders = req.body['_id[]'];
        var errors ={
            "ids": ""
        };
        var i=0;
        for (;i< orders.length; i++) {
            var id = orders[i];
            if (id != null && id != 'null' && id != '') {
                orderService.createOrder(id).then(function (data, err) {
                    if (err) {
                        if (errors.id === "") {
                            errors.id += id;
                        } else {
                            errors.id += "," + id;
                        }
                    }
                });
            }
        }
        if(i == orders.length){
            if(errors.ids == ""){
                return res.send({
                    message: 'Order created successfully',
                    data: 'OK'
                });
            }else{
                return res.send({
                    message: 'unable to create Order',
                    data: 'OK'
                });
            }
        }
    }
};

module.exports = orderController;