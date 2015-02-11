var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var viewSchema = new Schema({
	user :Object,
  pizza : Array,
  amount:Number,
  date:Date
	
},{collection:'orderitem'});
var details = mongoose.model('view', viewSchema);
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
