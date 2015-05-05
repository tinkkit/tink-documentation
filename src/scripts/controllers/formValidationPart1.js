'use strict';
angular.module('tinkApp')
.controller('formValidationPart1Ctrl', function ($scope) {
  $scope.signup = {
    username: '11.11.11-111.11'
  };
  $scope.signup = function() {
    if ($scope.signupForm.$valid) {
      // Submit as normal
    } else {
      $scope.signupForm.submitted = true;
    }
  };
});
