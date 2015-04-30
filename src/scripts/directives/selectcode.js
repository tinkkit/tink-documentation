'use strict';

/**
 * @ngdoc directive
 * @name tinkApp.directive:selectCode
 * @description
 * # selectCode
 */
angular.module('tinkApp')
  .directive('selectCode', function () {
    return {
      // template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element) {

        // Select code on click
        element.on('focus', function () {
          this.select();

          // Work around Webkit's little problem
          this.onmouseup = function() {
              // Prevent further mouseup intervention
              this.onmouseup = null;
              return false;
          };
        });
      }
    };
  });
