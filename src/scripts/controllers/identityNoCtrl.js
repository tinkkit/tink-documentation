'use strict';

angular.module('tinkApp')
  .controller('identityNoCtrl',['$scope',function (scope) {
    scope.validateIdentityNo = function() {
      console.log(scope.identityNoForm);
      if (scope.identityNoForm.$valid) {
        // Submit as normal
      } else {
        scope.identityNoForm.submitted = true;
      }
    };

}]);
