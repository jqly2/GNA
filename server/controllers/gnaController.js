var mongoose = require('mongoose');

var Xcom2 = mongoose.model('Xcom2');

var Hs = mongoose.model('Hs');

var Fo4 = mongoose.model('Fo4');

module.exports = (function(){
  return {
    findXcom2: function(req, res) {
       Xcom2.find({}, function(err, results) {
         if(err) {
           console.log(err);
         } else {

           res.json(results);
         }
     })
   },
   findHs: function(req, res){

     Hs.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {

         res.json(results);
       }
     })
   },
   findFo4: function(req, res){

     Fo4.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {

         res.json(results);
       }
     })
   }
    }
  })();
