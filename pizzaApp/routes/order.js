var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var orderSchema = new Schema({
	user :Object,
	pizza : Array,
	amount:Number,
	date:Date

},{collection:'orderitem'});

var orderitem = mongoose.model('orderitem', orderSchema);

router.post('/', function (req, res) {
	console.log("req==");
	console.log(req.body);
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var post = new orderitem(req.body);

    post.save(function (err) {
 if (err) {
       return err;
 }
 else {
   console.log("Post saved");
 }

});
});


//save model to MongoDB


    module.exports = router;