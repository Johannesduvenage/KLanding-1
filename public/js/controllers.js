'use strict';

/* Controllers */
var app = angular.module('myApp');
app.controller('AppCtrl', AppCtrl);
function AppCtrl($scope, $window, $log, $animate) {
    $animate.enabled(true);

/*** Multi Lang controller ***/
    $scope.close = function(){
        $scope.class = 'display-none';
        console.log('click');
    };
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

/*** Landing carousel controller ***/

    $scope.myInterval = 5000;

    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    $scope.addSlide = function() {
        slides.push({
            image: ['assets/IT-1.jpg','assets/IT-2.jpg','assets/IT-3.jpg'],
            headers: ['Logic IT Solutions','Logic IT Solutions'][slides.length % 3],
            headers2: ['Logic IT Solutions can cope with different parts of the workflow','Created by Kiskin', 'Email us'][slides.length % 3],
            text: ['The main values of LITS are dynamic growth and rock solid reputation as business partner.',
                'The main values of LITS are dynamic growth and rock solid reputation as business partner',
                'The main values of LITS are dynamic growth and rock solid reputation as business partner']
                [slides.length % 3],
            animation: ['bounceInRight', 'fadeInDown', 'bounceInDown'][slides.length % 3],
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

/*** Landing Navbar controller ***/
    $scope.isSearchCollapse = true;
    $scope.isVisible =  false;
    $scope.setVisibility = function () {
        $scope.isVisible = !$scope.isVisible;
        if($scope.isVisible){
            $scope.animate = 'animated bounceInRight visible';
        }
        else $scope.animate = 'animated bounceOutLeft visible';
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
    var carouselChildDesc,carouselChildMob;
    var checker = false;
    var d;
    $scope.navBarIsVisible = function($el) {
        if(checker){
            /***desctop***/
            carouselChildDesc = $el[0].children[0].attributes[0].nodeValue.split(' ');
            carouselChildDesc.pop();
            carouselChildDesc = carouselChildDesc.join(' ');
            $el[0].children[0].attributes[0].nodeValue = carouselChildDesc;
            /***mobile***/
            carouselChildMob = d.className.split(' ');
            carouselChildMob.pop();
            carouselChildMob = carouselChildMob.join(' ');
            d.className = carouselChildMob;
            d.style.marginTop = '25px';
            checker = false;
        }
    };
    $scope.navBarIsNotVisible = function($el) {
        checker = true;
        carouselChildDesc = $el[0].children[0].attributes[0].nodeValue;
        carouselChildDesc += ' fixed-navbar';
        $el[0].children[0].attributes[0].nodeValue = carouselChildDesc;
        /***mobile***/
        d = document.getElementById("mobile-navbar");
        d.className += " fixed-navbar";
        d.style.margin = 0;
    };
/*** Landing navbar collapse controller ***/
$scope.isCollapsed = true;
/*** Introduct controller ***/
$scope.imageArray = [{id: 0,
    background: 'assets/it1_400x300.jpg',
    header: 'Agricultural Processing',
    text: 'Objectively innovate empowered'},
    {id: 1,
        background: 'assets/it2_400x300.jpg',
        header: 'Machinery & Tools ',
        text: 'Objectively innovate empowered'},
    {id: 2,
        background: 'assets/it3_400x300.jpg',
        header: 'Coal & Solid Fuels',
        text: 'Objectively innovate empowered'}
];
    $scope.animateElementIn = function($el) {
        $el.removeClass('custom-hide fadeOut');
        $el.addClass('fadeIn');
    };

    $scope.animateElementOut = function($el) {
        $el.addClass('fadeOut');
        $el.removeClass('custom-hide fadeIn');
    };
/*** Portfolio controller ***/
$scope.filters = { };
    $scope.links = [
        {name: 'Cold', prop: 'cold', bxClass: ""},
        {name: 'Blue', prop: 'blue', bxClass: ""},
        {name: 'Red', prop: 'red', bxClass: ""},
        {name: 'Display All', prop: '', bxClass: "active-img"}


    ];
    $scope.colors = [
        {id: 0, name: 'Red', props: ['red', 'hot'], back:{background:'url("assets/red-background.jpg")'}, bxClass: 'fadeIn'},
        {id: 1, name: 'Blue', props: ['blue', 'cold'], back: {background:'url("assets/blue-background.jpg")'}, bxClass: 'fadeIn'},
        {id: 3, name: 'Beach', props: [''], back:{background: 'url("assets/beach-background.jpg")'}, bxClass: 'fadeIn'},
        {id: 4, name: 'Cold', props: ['cold'], back:{background: 'url("assets/cold-background.jpg")'}, bxClass: 'fadeIn'}

    ];
    $scope.findFilterProp = function(link){
        $scope.links.map((el) => {
           if(el!== link) {
               el.bxClass = '';
           }
            else {
               el.bxClass = 'active-img';
           }
        });
        if(link.prop === '') {
            $scope.colors.map((color) => {
                color.bxClass = 'fadeIn';
            });
            return;
        }
        $scope.colorsOut = [];
        $scope.colors.map((color) => {
            var check = false;
            color.props.map((prop) => {
                if(prop===link.prop){
                    color.bxClass = 'fadeIn size-up';
                    check = true;
                }
                else {
                    if(!check){
                    color.bxClass = 'fadeOut size-down';
                    }
                }
            });
        });
    };
    $scope.animateElementFromLeft = function($el) {
        $el.removeClass('custom-hide fadeOut');
        $el.addClass('slideInLeft');
    };

    $scope.animateElementOutToLeft = function($el) {
        $el.addClass('fadeOut');
        $el.removeClass('custom-hide slideInLeft');
    };
    $scope.animateElementFadeIn = function($el) {
        $el.removeClass('custom-hide fadeOut');
        $el.addClass('fadeIn');
    };
    $scope.animateElementFadeOut= function($el) {
        $el.addClass('fadeOut');
        $el.removeClass('custom-hide fadeIn');
    };
    $scope.animateElementFromRight = function($el) {
        $el.removeClass('custom-hide fadeOut');
        $el.addClass('slideInRight');
    };
    $scope.animateElementOutToRight= function($el) {
        $el.addClass('fadeOut');
        $el.removeClass('custom-hide slideInRight');
    };
/*** Client panel ***/
    $scope.technologies = [
        {id: 0, name: 'intel', src: 'assets/intel-logo.png'},
        {id: 1, name: 'amd', src: 'assets/amd-logo.png'},
        {id: 2, name: 'radeon', src: 'assets/nvidia-logo.png'},
        {id: 3, name: 'nvidia', src: 'assets/radeon-logo.png'},
        {id: 4, name: 'seagate', src: 'assets/k-ico.png'},
        {id: 5, name: 'intel', src: 'assets/intel-logo.png'},
        {id: 6, name: 'amd', src: 'assets/amd-logo.png'},
        {id: 7, name: 'radeon', src: 'assets/nvidia-logo.png'},
        {id: 8, name: 'nvidia', src: 'assets/radeon-logo.png'},
        {id: 9, name: 'seagate', src: 'assets/k-ico.png'}
    ]
/*** Quote panel ***/
    $scope.getNumber = function(num) {
        return new Array(num);
    };
    $scope.qBoxes = [
        {
            id: 0,
            header: 'Hello dear friend',
            text: 'Globally incubate standards compliant channels scalable elits benefits.Quickly disseminate superior deliverables',
            author: 'Kiskin Vladislav',
            post: 'Technician Engineer',
            rating: $scope.getNumber(5)
        },
        {
            id: 1,
            header: 'Hello dear friend',
            text: 'Globally incubate standards compliant channels scalable elits benefits.Quickly disseminate superior deliverables',
            author: 'Kiskin Vladislav',
            post: 'Technician Engineer',
            rating: $scope.getNumber(4)
        },
        {
            id: 2,
            header: 'Hello dear friend',
            text: 'Globally incubate standards compliant channels scalable elits benefits.Quickly disseminate superior deliverables',
            author: 'Kiskin Vladislav',
            post: 'Technician Engineer',
            rating: $scope.getNumber(3)
        },
        {
            id: 3,
            header: 'Hello dear friend',
            text: 'Globally incubate standards compliant channels scalable elits benefits.Quickly disseminate superior deliverables',
            author: 'Kiskin Vladislav',
            post: 'Technician Engineer',
            rating: $scope.getNumber(2)
        }
    ];

}
AppCtrl.$inject=['$scope', '$window','$log','$animate'];

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
