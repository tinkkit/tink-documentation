'use strict';
angular.module('tinkApp')
.controller('sortTableCtrl',function($scope){
    var ctrl = this;

  ctrl.rapporten = {};

  // $scope.sorted = function(property,order,type){
    // console.log('sorted',property,order,type);
  // };

  $scope.loadData = function(){
    ctrl.rapporten = {data:[{datum:new Date(),familienaam:'Bouillart',voornaam:'Vincent'},{datum:new Date(),familienaam:'De Mulder',voornaam:'Kevin'},{datum:new Date(),familienaam:'Van Proeyen',voornaam:'Jasper'},{datum:new Date(),familienaam:'Wuyts',voornaam:'Tom'},{datum:102544,familienaam:'Hermans',voornaam:'Tom'},{datum:102544,familienaam:'Van Gestel',voornaam:'Lieven'}]};
  };

});
