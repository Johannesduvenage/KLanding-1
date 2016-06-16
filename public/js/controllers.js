'use strict';

/* Controllers */
var controllers = angular.module('myApp', ['ui.bootstrap','ngAnimate']);
controllers.controller('MultiLangCtrl', MultiLangCtrl);
controllers.controller('LandingCarouselCtrl', LandingCarouselCtrl);
controllers.controller('LandingNavbarCtrl', LandingNavbarCtrl);
controllers.controller('LandingNavbarCollapseCtrl', LandingNavbarCollapseCtrl);



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
        {id: 0, lang: 'English', short: 'ENG'},
        {id: 1, lang: 'Ukraine', short: 'UK'},
        {id: 2, lang: 'Russian', short: 'RU'}
    ];
    $scope.currentSelect = $scope.langs[0].lang;
    $scope.curShortSelect = $scope.langs[0].short;
    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };
    $scope.setChoice = function(choice) {
        $scope.curShortSelect = $scope.currentSelect = choice;
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
}
function LandingCarouselCtrl($scope, $animate){
    $animate.enabled(true);
    $scope.myInterval = 0;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        slides.push({
            image: ['assets/IT-1.jpg','assets/IT-2.jpg','assets/IT-3.jpg'],
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 3],
            id: currIndex++
        });
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 3; i++) {
        $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }
}
function LandingNavbarCtrl($scope, $window) {
    $scope.isCollapsed = true;
    $scope.isSearchCollapse = true;
    $scope.isVisible =  false;
    $scope.setVisibility = function () {
        $scope.isVisible = !$scope.isVisible;
        if($scope.isVisible){
            $scope.class = 'animated bounceInRight visible';
        }
        else $scope.class = 'animated bounceOutLeft visible';
    };
    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
        setTimeout(function() {
            $window.alert('You\'ve selected the alert tab!');
        });
    };

    $scope.model = {
        name: 'Tabs'
    };
}
function LandingNavbarCollapseCtrl($scope) {
    $scope.isCollapsed = false;
}

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
