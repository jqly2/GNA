var gna = require('./../controllers/gnaController.js');


module.exports = function(app) {

//app.get and app.post goes in here


    app.get('/findXcom2', function(req, res) {
      gna.findXcom2(req, res);
    })

    app.get('/findHs', function(req, res) {
      gna.findHs(req, res);
    })

    app.get('/findFo4', function(req, res) {
      gna.findFo4(req, res);
    })



};
