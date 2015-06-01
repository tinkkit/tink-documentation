'use strict';

/**
 * @ngdoc function
 * @name tinkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tinkApp
 */
 angular.module('tinkApp')
 .controller('MainCtrl', function ($scope, $rootScope, $location, $anchorScroll, tinkApi) {


  // Show or hide sidenav
  $scope.$on('$locationChangeStart', function() {
    if($location.path() === '/') {
      // Close the sidenav
      if($scope.sidenav.visible === true) {
        tinkApi.sideNavToggle.closeById('sideNav1');
      }
      // Hide the sidenav toggle
      $scope.sidenav.visible = false;
    } else {
      $scope.sidenav.visible = true;
    }

  });

  // Scope variables
  $scope.sidenav = {
    visible: true
  };

  // Function that replaces anchor scroll
  $scope.scrollTo = function scrollTo(id) {
    $location.hash(id);
    $anchorScroll();
  };

  $scope.openMenu = function(){
    if($location.$$path !== '/') {
      tinkApi.sideNavToggle.openById('sideNav1');
    }
  };

  $scope.closeMenu = function(){
    if($location.$$path !== '/') {
      tinkApi.sideNavToggle.closeById('sideNav1');
    }
  };

});

