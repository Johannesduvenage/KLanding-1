'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}
function MultiLangCtrl($scope, $log) {
    $scope.langs = [
        {id: 0, lang: 'English'},
        {id: 1, lang: 'Ukraine'},
        {id: 2, lang: 'Russian'}
    ];
    $scope.currentSelect = $scope.langs[0].lang;
    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };
    $scope.setChoice = function(choice) {
        $scope.currentSelect = choice;
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
}
MultiLangCtrl.$inject = ['$scope', '$log'];
angular.module('myApp', ['ui.bootstrap']).controller('MultiLangCtrl', MultiLangCtrl);

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
