'use strict';

angular.
  module('cv').
  component('cv', {
    templateUrl: 'cv/cv.template.html',
    controller: ['$routeParams', 'Informations', '$timeout',
      function cvController($routeParams, Informations, $timeout) {
        var self = this;
        Informations.getInfo().$promise.then(function(res) {
            self.info = res;
            self.sectionDisplayed = 'proExp';

            var viewSection = function(){
              var window_width = $(window).width();
              if(window_width<=986){
                $("body").css('width', window_width+'px');
                $("#sectionContent").css('width', window_width-500+'px');
                $("#divContent").css('width', window_width-50+'px');
                $(".divSectionDisplay").css('width', window_width-50+'px');
                $("#divSelectionPersExp").css('display', 'none');
                $("#divSelectionFormation").css('display', 'none');
                $("#divSelectionHobbies").css('display', 'none');
                $("#divIcons").css('display', 'none');
                $("#divImg img").css('left', window_width/2-80+'px');
                self.sectionDisplayed = "print";
              }else{
                $("#sectionContent").css('width', window_width-400+'px');
                $("#divContent").css('width', window_width-400+'px');
                $(".divSectionDisplay").css('width', window_width-400+'px');
                $("#divSelectionPersExp").css('display', '');
                $("#divSelectionFormation").css('display', '');
                $("#divSelectionHobbies").css('display', '');
                $("#divImg img").css('left', '55px');
                $("#divIcons").css('display', '');
                self.sectionDisplayed = 'proExp';
              }
            }
            $(window).resize(function() {
              viewSection();
            });
            viewSection();

            self.sectionDisplay = function(section){
              self.sectionDisplayed = section;
            };

            self.print = function(){
              self.sectionDisplayed = "print";
              $timeout(function(){alert("Il se peut que les couleurs de background et de font ne passent pas. Pour cela il faut préciser dans les options d'impiression qu il faille les couleurs de background.");window.print(); self.sectionDisplayed = "proExp";}, 100);
            }
        });
      }
    ]
  });
