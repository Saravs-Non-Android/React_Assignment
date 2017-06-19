/*
 * Created by IMFCORP\mohanpratap.singh on 27/3/17.
 */
var mongoose = require("mongoose"); // The reason for this demo.

var uriString = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/dhabaVala';
mongoose.connect(uriString, function (err, conn) {
    if (err) {
        console.log ('ERROR connecting to: ' + uriString + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uriString);
    }
});
