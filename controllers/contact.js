    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
