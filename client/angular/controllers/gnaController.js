gna_app.controller('gnaController', function($scope, gnaFactory){

    $scope.content = false;

    $scope.findXcom2 = function(){
      gnaFactory.findXcom2(function(data){
      $scope.news = data;
      console.log(data);
    })
  }


    $scope.findHs = function(){
      gnaFactory.findHs(function(data){
      $scope.news = data;
      console.log(data);
    })
  }

    $scope.findFo4 = function(){
      gnaFactory.findFo4(function(data){
      $scope.news = data;
      console.log(data);
    })
  }

    $scope.showContent = function(context){
        context.content = true;
    }

    $scope.hideContent = function(context){
        context.content = false;
    }
})
