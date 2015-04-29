'use strict';

/**
 * @ngdoc function
 * @name tinkApp.controller:DocsCtrl
 * @description
 * # DocsCtrl
 * Controller of the tinkApp
 */
 angular.module('tinkApp')
 .controller('DocsCtrl', function ($scope, $routeParams) {

  // --- Define Controller Variables. ----------------- //
  var subpage = '';
  var subsubpage = '';

  // --- Define Scope Variables. ---------------------- //
  $scope.subview = '';

  // --- Bind To Scope Events. ------------------------ //

  // --- Define Controller Methods. ------------------- //
  function initialize() {

    // Check for subpage
    if ($routeParams.subpage !== undefined) {
      subpage = $routeParams.subpage;

      // Check for subsubpage
      if ($routeParams.subsubpage !== undefined) {
        subsubpage = $routeParams.subsubpage;
        $scope.subview = 'views/docs-' + subpage + '-' + subsubpage + '.html';
      } else {
        $scope.subview = 'views/docs-' + subpage + '.html';
      }
    }
  }

  // --- Define Scope Methods. ------------------------ //

  // --- Initialize. ---------------------------------- //
  initialize();

  //this is for the accordion docs
  $scope.accordion = {
    collapsed: true
  };

  $scope.openAccordion = function(action,next){
    if(action === 'loading'){
      setTimeout(next, 2000);
    }
  };

  // Indeterminate checkbox data
  $scope.selectedIds =[];
  $scope.data= [
    {
      id: 1,
      name: 'België',
      selected: false,
      childs: [
        {
          id: 2,
          name: 'Antwerpen',
          selected: false
        },
        {
          id: 3,
          name: 'Vlaams-brabant',
          selected: true,
          childs: [
            {
              id: 4,
              name: 'Leuven',
              selected: true
            }
          ]
        }
      ]
    }
  ];

 });
