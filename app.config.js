'use strict';

angular.
  module('cvApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/cv', {
          template: '<cv></cv>'
        }).
        otherwise('/cv');
    }
  ]);
