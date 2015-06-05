'use strict';
angular.module('tinkApp')
.controller('controller',function($scope){
    var ctrl = this;
  ctrl.rapporten = {};
  $scope.sorted = function(property,order,type){
    console.log('sorted',property,order,type);
  };
  var index = 0;
  $scope.loadData = function(){
    ctrl.rapporten = {data:[{volgnummer:new Date(),familienaam:'Bouillart',voornaam:'Vincent'},{volgnummer:new Date(),familienaam:'De Mulder',voornaam:'Kevin'},{volgnummer:new Date(),familienaam:'Van Proeyen',voornaam:'Jasper'},{volgnummer:new Date(),familienaam:'Wuyts',voornaam:'Tom'},{volgnummer:102544,familienaam:'Hermans',voornaam:'Tom'},{volgnummer:102544,familienaam:'Van Gestel',voornaam:'Lieven'}]};

    if(index ===1){
      ctrl.rapporten = {data:[{volgnummer:new Date(),familienaam:'Bouillart',voornaam:'Vincent'},{volgnummer:new Date(),familienaam:'De Mulder',voornaam:'Kevin'},{volgnummer:new Date(),familienaam:'Van Proeyen',voornaam:'Jasper'}]};
    }
  index++;
  };


});
