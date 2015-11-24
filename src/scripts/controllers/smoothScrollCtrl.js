'use strict';
angular.module('tinkApp')
.controller('smoothScrollCtrl', ['$scope', 'tinkSmoothScroll', function ($scope, tinkSmoothScroll) {
  $scope.scroll = function(id) {
    tinkSmoothScroll.scrollTo(id);
  };
}]);
