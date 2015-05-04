'use strict';

angular.module('tinkApp')
  .controller('dragandropCtrl',['$scope',function (scope) {
    scope.files = [];
    scope.valid={mimeTypes:['image/jpeg', 'image/png', 'image/pjpeg', 'image/gif'],extensions:['.jpg', '.png', '.gif']};
}]);