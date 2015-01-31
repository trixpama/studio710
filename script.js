// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs

//    var scotchApp =  angular.module('myApp', ['jdFontselect']).constant('jdFontselectConfig', {
//   googleApiKey: 'AIzaSyBylGW2HEJZdkYSLe-r1oyTncoZUXCnqIA'
// });    
<<<<<<< HEAD
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the primary font list
        .when('/primaryFont', {
            templateUrl : 'pages/primaryFont.html',
            controller  : 'primaryFontController'
        })
    
        // // route for the contact page
        // .when('/font/:serifs', {
        //     templateUrl : 'pages/primaryFont.html',
        //     controller  : 'primaryFontController'
        // });
});


//keep track of favorite fonts

scotchApp.favorites = [];


/*

//dynamically get font list

var url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBylGW2HEJZdkYSLe-r1oyTncoZUXCnqIA';

$.getJSON(url, function(res) {
    console.log(res.items);


    var sansSerifs = _.filter(res.items, function(item) {
        return item.category === "sans-serif";
=======
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
>>>>>>> parent of ddfa7bc... matt touched it......
    });

    // // create the controller and inject Angular's $scope
    // scotchApp.controller('mainController', function($scope) {
    //     // create a message to display in our view
    //     $scope.message = 'Everyone come and see how good I look!';
    // });

    // scotchApp.controller('aboutController', function($scope) {
    //     $scope.message = 'Look! I am an about page.';
    // });

    // scotchApp.controller('contactController', function($scope) {
    //     $scope.message = 'Contact us! JK. This is just a demo.';
    // });