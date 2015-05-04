'use strict';
angular.module('tinkApp')
.provider('tinkUploadService',['lodash',function (_) {
  var urls = {};
  function randomIntFromInterval(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }
  return {
    $get: function ($upload,$timeout,$q) {
      return {
        upload: function(){
          var q = $q.defer();
          var total = randomIntFromInterval(600,700);
          var loaded = 0;
          var procent = randomIntFromInterval(10,60);
          var nums = [];
          for(var i=0;i<=total;i=i+procent){
            loaded=i;
            nums.push(loaded);
          }
        $timeout(function() {
           for(var i=0;i<=nums.length;i++){
            var time = 100 * i;
            /* jshint loopfunc:true */
            (function(index,tim) {
                $timeout(function() {
                  if(nums[index] !== undefined){
                    q.notify({loaded :nums[index] ,total:total});
                  }else{
                     q.notify({loaded :total ,total:total});
                     q.resolve();
                  }
                },tim);
            })(i,time);

           }
        },300);

          return q.promise;
        },
        remove: function(file){
          if(file.getData() instanceof window.File){
            //TODO
          }
        },
        addUrls: function (url,type) {
          if(type === undefined || type === null || type === ''){
            type = 'all';
            urls[type] = url;
          }else{
            if(_.isArray(type)){
              for(var i = 0;i < type.length; i++){
                urls[type[i]] = url;
              }
            }else if(typeof type === 'string'){
              urls[type] = url;
            }
          }
        }
      };
    }
  };
}]);