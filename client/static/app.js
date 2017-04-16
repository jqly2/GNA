var gna_app = angular.module('gna_app', ['ngRoute']);

gna_app.config(function($routeProvider){
  $routeProvider

    .when('/', {
        templateUrl:'./static/partials/index.html'
    })

    .otherwise({
        redirectTo:'/'
    });
})
