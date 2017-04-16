gna_app.factory('gnaFactory', function($http){
    var factory = {};
    var news = [];

    factory.findXcom2 = function(callback){
      $http.get('/findXcom2').success(function(output){
          news = output;
          callback(news);
      })
    }

    factory.findHs = function(callback){
      $http.get('/findHs').success(function(output){
          news = output;
          callback(news);
      })
    }

    factory.findFo4 = function(callback){
      $http.get('/findFo4').success(function(output){
          news = output;
          callback(news);
      })
    }
    return factory;

})
