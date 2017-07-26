'use strict';

angular.
  module('cv').
  component('cv', {
    templateUrl: 'cv/cv.template.html',
    controller: ['$routeParams', 'Informations',
      function cvController($routeParams, Informations) {
        var self = this;
        Informations.getInfo().$promise.then(function(res) {
            self.info = res; 
        });
      }
    ]
  });

