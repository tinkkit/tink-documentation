'use strict';

angular.module('tinkApp')
  .directive('dannyCheck', [function () {
  return {
    require: 'ngModel',
    scope:{
      ngModel:'='
    },
    link: function(scope, ele, attrs, c) {
      var dannyC = function(){
        if(scope.ngModel === 'danny'){
          c.$setValidity('dannyValid', true);
        }else{
          c.$setValidity('dannyValid', false);
        }
      };
      dannyC();
      ele.on('blur',function(){
        scope.$apply(function(){
          dannyC();
        });
      });
    }
  };
}]);
