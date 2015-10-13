'use strict';
/*global marked, hljs*/
angular.module('tinkApp').directive('md',['$templateRequest',function ($templateRequest) {
  if (typeof hljs !== 'undefined') {
    marked.setOptions({
      highlight: function (code, lang) {
        if (lang) {
          return hljs.highlight(lang, code).value;
        } else {
          return hljs.highlightAuto(code).value;
        }
      }
    });
  }

  return {
    restrict: 'E',
    require: '?ngModel',
    link: function ($scope, $elem, $attrs, ngModel) {
      if($attrs.url){
        $templateRequest($attrs.url).then(function(template) {
            var html = marked(template);
            html = $('<div>'+html+('</div>'));
            html.find('[id=example]').removeAttr('id');
            html.find('[id=changelog]').removeAttr('id');
            $elem.html(html);
        },
        function() {
            console.warn('couldn\'t read url: '+$attrs.url);
          }
        );
         return;
      }else if (!ngModel) {
        // render transcluded text
        var html = marked($elem.text());
        $elem.html(html);
        return;
      }

      ngModel.$render = function () {
        var html = marked(ngModel.$viewValue || '');
        $elem.html(html);
      };
    }  // link function
  };
}]);
