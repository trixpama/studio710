    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });
