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
            self.sectionDisplayed = 'proExp';

            $(window).resize(function() {
              var window_width = $(window).width();
              $("#sectionContent").css('width', window_width-270+'px');
            });
            var window_width = $(window).width();
            $("#sectionContent").css('width', window_width-270+'px');

            self.sectionDisplay = function(section){
              self.sectionDisplayed = section;
            };

            self.print = function(){
              self.sectionDisplayed = "print";
              window.print();
            }
        });
      }
    ]
  });
