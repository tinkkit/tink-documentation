'use strict';

angular.module('tinkApp')
  .controller('nationalNoCtrl',['$scope',function (scope) {
    scope.validateNationalNo = function() {
      console.log(scope.nationalNoForm);
      if (scope.nationalNoForm.$valid) {
        // Submit as normal
      } else {
        scope.nationalNoForm.submitted = true;
      }
    };

}]);
