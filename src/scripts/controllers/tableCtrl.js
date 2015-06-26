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
    }

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
    }

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
        checked: true,
        sort:true
      },
      {
        field: 'lastname',
        alias: 'Achternaam',
        checked: false,
        sort:true
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
    }
    scope.perpageValue=[10,20,25,30,45]

    // Some actions that become available when you check one or multiple rows
   scope.actions = [
      {
        name: 'remove',
        callback: function(items) {
          angular.forEach(items, function(val) {console.log('ohoho',scope.data.indexOf(val))
            scope.data.splice(scope.data.indexOf(val),1);
          });
        }
      }
    ];
}]);
