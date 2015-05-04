'use strict';

angular.module('tinkApp')
  .controller('modalCtrl',['$scope','$modal',function (scope,$modal) {

    scope.openModal=function(){
      var modalInstance = $modal.open({
        templateUrl: 'views/modal-template.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          items: function () {
            return ['lol'];
          }
        }
      });

      modalInstance.result.then(function (text) {
        console.log(text);
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };


  }]);
  angular.module('tinkApp').controller('ModalInstanceCtrl',['$scope','$modalInstance', function ($scope, $modalInstance) {
    $scope.ok = function(){
      $modalInstance.$close('ok is pressed');
    };

    $scope.cancel = function(){
      $modalInstance.$dismiss('cancel is pressed');
    };
  }]);
