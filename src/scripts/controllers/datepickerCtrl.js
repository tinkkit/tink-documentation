'use strict';
angular.module('tinkApp')
.controller('datepickerCtrl', function ($scope,dateCalculator) {
  var today = new Date();
  var mindate = new Date();
  mindate.setDate(today.getDate()-5);
  var maxdate = new Date();
  maxdate.setDate(today.getDate()+5);

  var hulpmin = new Date(mindate);
  hulpmin.setDate(mindate.getDate()-1);
  var hulpmax = new Date(maxdate);
  hulpmax.setDate(maxdate.getDate()+1);
  $scope.maxDateStr = dateCalculator.format(hulpmax,'dd/mm/yyyy');
  $scope.minDateStr = dateCalculator.format(hulpmin,'dd/mm/yyyy');

  $scope.selectedDate1 = null;
  $scope.selectedDate2 = null;
  $scope.selectedDate3 = null;
  $scope.selectedDate4 = null;
  $scope.mindate = mindate;
  $scope.maxdate = maxdate;
  $scope.validate = function(){
    $scope.datepickerForm.submitted = true;
  };
  $scope.signup = function() {

   $scope.dateForm.submitted = true;
  };
});
