/**
 * Created by IMFCORP\mohanpratap.singh on 27/3/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    orderBy: {type: String, required: true, unique: true},
    name: {type: String},
    category:[], //1- Desserts , North Indian, South Indian, Chinese
    address: {
        addressLine1: {type: String},
        addressLine2: {type: String},
        city:{type: String},
        pinCode:{type: Number},
        state:{type: String}
    },
    created_at: Date,
    updated_at: Date
});
// custom method to add string to end of name
// you can create more important methods like name validations or formatting


// the schema is useless so far
// we need to create a model using it

var Order = mongoose.model('Order', OrderSchema);

// make this available to our users in our Node applications
module.exports = Order;
