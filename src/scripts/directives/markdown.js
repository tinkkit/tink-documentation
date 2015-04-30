'use strict';
/*angular.module('markdown', [])
	.provider('markdown', function () {
    var opts = {};
    return {
      config: function (newOpts) {
        opts = newOpts;
      },
      $get: function () {
        return new Showdown.converter(opts);
      }
    };
  })*/
angular.module('markdown', [])
	.directive('markdown',['$sanitize','markdown',function ($sanitize,markdown) {
    return {
      // template: '<div></div>',
      restrict: 'EA',
      replace:true,
      compile: function compile(element) {
        var array = element[0].innerHTML.split('\n');
        var html='';
        var bussy = 0;
        for (var i in array) {

          var text = array[i].trim();
          if(text.indexOf('```') === 0 && text.length >3){
            html+='<hljs>';
            bussy = 1;
          }else if(text.indexOf('```') === 0 && text.length === 3){
            html+='</hljs>';
            bussy = 0;
          }else if(bussy === 0){
            html += markdown.makeHtml(array[i].trim());
          }else{
            html += array[i]+'\n';
          }

        }

          /*var text = element.text(),replacedText = text.replace(/^(\r\n|\r|\n)/m, '');
          replacedText = encodeURI(replacedText).replace(/%20%20/g, "");
          console.log(replacedText)
          replacedText = decodeURI(replacedText)
        var html = $sanitize(markdown.makeHtml(replacedText));*/
          element.html(html);
        }
    };
  }]);
