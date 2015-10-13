'use strict';

angular.module('tinkApp')
  .controller('tableCtrl',['$scope','$timeout',function (scope,timeout) {

    // Override default items per page
    scope.pages = '5, 10, 25';

    scope.changed = function(data,next){
      console.log(data,scope.nums);

      timeout(function(){
        // Data model
        scope.data = [
        ];
        scope.totalitems = 200;
        next();
      },300);
    };

    scope.totalitems = 200;
    scope.chan = function(prop,or,typ){
      console.log('changed',prop,or,typ);
      timeout(function(){
      // Data model
      scope.data = [
        {
          firstname: 'Jasper',
          lastname: 'Van Proeyen',
          username: '@trianglejuice'
        },
        {
          firstname: 'Tom',
          lastname: 'Wuyts',
          username: '@pxlpanic'
        },
        {
          firstname: 'Kevin',
          lastname: 'De Mulder',
          username: '@clopin'
        },
        {
          firstname: 'Vincent',
          lastname: 'Bouillart',
          username: '@BouillartV'
        }
      ];
    },300);
    };

    timeout(function(){
      // Data model
      scope.data = [
        {
          firstname: 'Jasper',
          lastname: 'Van Proeyen',
          username: '@trianglejuice'
        },
        {
          firstname: 'Tom',
          lastname: 'Wuyts',
          username: '@pxlpanic'
        },
        {
          firstname: 'Kevin',
          lastname: 'De Mulder',
          username: '@clopin'
        },
        {
          firstname: 'Vincent',
          lastname: 'Bouillart',
          username: '@BouillartV'
        }
      ];
    },700);

    // The headers you want to show and whether they are already visible in the table
    scope.headers = [
      {
        field: 'firstname',
        alias: 'Voornaam',
        sort: 'firstname',
        checked: true
      },
      {
        field: 'lastname',
        alias: 'Achternaam',
        sort: 'lastname',
        checked: false
      },
      {
        field: 'username',
        alias: 'Gebruikersnaam',
        checked: true
      }
    ];
    scope.nums=0;
    scope.changenums = function(){
      scope.nums = scope.nums+1;
    };
    scope.perpageValue=[10,20,25,30,45];

    // Some actions that become available when you check one or multiple rows
   scope.actions = [
        {
          name: 'remove',
          callback: function(items) {
            angular.forEach(items, function(val) {
              scope.data.splice(scope.data.indexOf(val),1);
            });
          },
          order:1,
          master:true,
          icon:'fa-close'
        },{
          name: 'add',
          callback: function(items) {
            angular.forEach(items, function(val) {
              scope.data.splice(scope.data.indexOf(val),1);
            });
          },
          order:0,
          master:true,
          icon:'fa-edit'
        },{
          name: 'search',
          callback: function(items) {
            angular.forEach(items, function(val) {
              scope.data.splice(scope.data.indexOf(val),1);
            });
          },
          order:3,
          master:false,
          icon:'fa-search'
        },
        {
          name: 'do something',
          callback: function(items) {
            angular.forEach(items, function(val) {
              scope.data.splice(scope.data.indexOf(val),1);
            });
          },
          order:2,
          master:false,
          icon:'fa-arrows-h'
        },
        {
          name: 'open',
          callback: function(items) {
            angular.forEach(items, function(val) {
              scope.data.splice(scope.data.indexOf(val),1);
            });
          },
          order:0,
          master:false,
          icon:'fa-bell-o'
        },
        {
          name: 'open all',
          callback: function(items) {
            angular.forEach(items, function(val) {
              scope.data.splice(scope.data.indexOf(val),1);
            });
          },
          order:0,
          master:false,
          icon:'fa-calculator'
        }
      ];
}]);
