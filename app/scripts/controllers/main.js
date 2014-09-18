'use strict';

angular.module('templatesApp')

    .controller("MainCtrl", function($scope, $http) {
      $http.get('fraser.json').
        success(function(data, status, headers, config) {
          
          $scope.items = data;
        }).
        error(function(data, status, headers, config) {
          console.log("Data:" + data);
        });
    });
