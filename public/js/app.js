'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ui.bootstrap','myApp.filters', 'myApp.services', 'myApp.directives', 'ngRoute', 'ngAnimate', 'angular-scroll-animate']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/landing', {templateUrl: 'partial/landing', controller: AppCtrl});
    $routeProvider.when('/view2', {templateUrl: 'partial/2', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/landing'});
    $locationProvider.html5Mode(true);
  }]);
