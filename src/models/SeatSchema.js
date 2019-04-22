var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeatSchema = new Schema({
   depname:String,
   seatCount:Number,
   year:Number
});

module.exports = mongoose.model('seatallocations', SeatSchema);   