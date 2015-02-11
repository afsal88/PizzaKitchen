var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var regSchema = new Schema({
    name: String,
  	email:String,
  	mobile:Number,
	password:String,
	conpassword:String,
  	housename:String,
  	locality:String,
  	city:String

},{collection:'registration'});
var register = mongoose.model('registration', regSchema);

router.post('/', function (req, res) {
	console.log(req.body);
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var post = new register(req.body);

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