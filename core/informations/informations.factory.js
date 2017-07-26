'use strict';

angular.
  module('core.informations').
  factory('Informations', ['$resource',
    function($resource) {
      return $resource('info.json', {}, {
        getInfo: {
            method: 'GET',
        }
      });
    }
  ]);
