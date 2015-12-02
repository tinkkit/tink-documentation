'use strict';

angular.module('tinkApp')
  .controller('ibanCtrl',['$scope',function (scope) {
    scope.validateIBAN = function() {
      console.log(scope.ibanForm);
      if (scope.ibanForm.$valid) {
        // Submit as normal
      } else {
        scope.ibanForm.submitted = true;
      }
    };

}]);
