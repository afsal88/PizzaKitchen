var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/pizzaDb', function (error) {
 if (error) {
        console.log(error);
    }
});


var Schema = mongoose.Schema;
var logSchema = new Schema({
	name: String,
  email:String,
  mobile:Number,
	password:String,
	conpassword:String,
  housename:String,
  locality:String,
  city:String

},{collection:'registration'});
var logUser = mongoose.model('login', logSchema);
router.post('/', function (req, res) {
   //console.log(req.body.email);
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
     logUser.find({email:req.body.email,password:req.body.password}, function (err, docs) {        
           res.json(docs);
       });
});
module.exports = router;



