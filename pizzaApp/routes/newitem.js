var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/pizzaDb', function (error) {
 if (error) {
        console.log(error);
    }
});

var Schema = mongoose.Schema;
var addSchema = new Schema({
	name: String,
	category:String,
	size:String,
	description:String,
	image:String,
	price:Number
 
},{collection:'additem'});

var additem = mongoose.model('additem', addSchema);

router.post('/', function (req, res) {
	console.log(req.body);
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var post = new additem(req.body);

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