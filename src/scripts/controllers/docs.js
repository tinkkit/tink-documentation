'use strict';

/**
 * @ngdoc function
 * @name tinkApp.controller:DocsCtrl
 * @description
 * # DocsCtrl
 * Controller of the tinkApp
 */
 angular.module('tinkApp')
 .controller('DocsCtrl', function ($scope, $rootScope, $location, $routeParams, $document, stickyService) {

  // --- Define Controller Variables. ----------------- //
  var subpage = '';
  var subsubpage = '';
  var subsubsubpage = '';
  var activeURLs = ['directives', 'themes'];

  // --- Define Scope Variables. ---------------------- //
  $scope.subview = '';
  $scope.showTabMenu = false;
  $scope.tabview = '';
  $scope.location = '#'+$location.path();
  // console.log($scope.location);

  // --- Bind To Scope Events. ------------------------ //

  // --- Define Controller Methods. ------------------- //
  function initialize() {

    // Check for subpage
    if ($routeParams.subpage !== undefined) {
      subpage = $routeParams.subpage;

      // Check for subsubpage
      if ($routeParams.subsubpage !== undefined) {
        subsubpage = $routeParams.subsubpage;

        // Show the tab bar if the subpage is in the active URLs list
        if(activeURLs.indexOf(subpage) !== -1 && subsubpage !== 'overview') {
          $scope.showTabMenu = true;
        }

        // Check if there's another tabview that needs display
        if($location.hash() !== '') {
          subsubsubpage = $location.hash();
          $scope.tabview = subsubsubpage;
        } // else {
        //   $scope.tabview = 'readme';
        // }
        $scope.subview = 'views/docs-' + subpage + '-' + subsubpage + '.html';

      } else {
        $scope.subview = 'views/docs-' + subpage + '.html';
      }
    }
  }

  // VERY dirty fix!
  $document.ready(function(){
    setTimeout(function() {
      stickyService.update();
    }, 300);
  });

  // --- Define Scope Methods. ------------------------ //

  // --- Initialize. ---------------------------------- //
  initialize();

  //this is for the accordion docs
  $scope.accordion = {
    collapsed: true
  };

  $scope.closePopoverFromController = function() {
    $rootScope.$broadcast('popover-open', { group: 'my-group' });
  };

  $scope.openAccordion = function(action,next){
    if(action === 'loading'){
      setTimeout(next, 2000);
    }
  };

  // Indeterminate checkbox data
  $scope.selectedIds =[4];
  $scope.data= [
    {
      id: 1,
      name: 'België',
      children: [
        {
          id: 2,
          name: 'Antwerpen'
        },
        {
          id: 3,
          name: 'Vlaams-brabant',
          children: [
            {
              id: 4,
              name: 'Leuven'
            },
            {
              id: 5,
              name: 'Tienen'
            }
          ]
        }
      ]
    }
  ];

 });
