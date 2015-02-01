var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the contact page
        .when('/font/:font', {
            templateUrl : 'pages/primaryFontList.html',
            controller  : 'fontController'
        })
        
        // route for the contact page
        .when('/pairs', {
            templateUrl : 'pages/fontPairing.html',
            controller  : 'fontPairsController'
        });


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
    });

    var museos = _.filter(res.items, function(item) {
        return item.family.toLowerCase() === "anonymous pro";
    });


    console.log(museos);
});
*/