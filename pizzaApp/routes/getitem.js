var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var displaySchema = new Schema({
	name: String,
  	image:String,
  	description:String
	
},{collection:'additem'});
var details = mongoose.model('display', displaySchema);
router.get('/', function (req, res) {
   //
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
     details.find({}, function (err, docs) {
     	console.log("###");
     console.log(res.body);        
           res.json(docs);
       });
});
module.exports = router;
