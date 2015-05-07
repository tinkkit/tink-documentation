'use strict';

angular.module('tinkApp')
  .directive('themeSwitcher',['$rootScope', '$document','$cookies','safeApply', function($rootScope, $document,$cookies,safeApply){
    return {
      restrict:'EA',
      link:function(scope, element){
        if(!element.is('select')){
          return false;
        }
        function changeUrl(element, url){
          element.attr('href',url);
        }

        element.change(function() {
          var themes = $rootScope.themes;
          var theme = $( this ).val();
          var links = $($document[0].head).find('link');
          var files = themes[theme];

          if(files){
            $cookies.theme = theme;
            var file1;
            var file2;

            if(links && $(links[0]).attr('href').split('bower').length > 1){
              file1 = themes[theme][0].split('.')[0]+'.css';
              file2 = themes[theme][2].split('.')[0]+'.css';
            }else{
              file1 = themes[theme][0];
              file2 = themes[theme][2];
            }
              var newUrl1 = $(links[0]).attr('href').split('styles/')[0]+'styles/'+file1;
              var newUrl2 = $(links[2]).attr('href').split('styles/')[0]+'styles/'+file2;
              changeUrl($(links[0]),newUrl1);
              changeUrl($(links[2]),newUrl2);
          }

          // Update $rootScope
          safeApply(scope,function() {
            $rootScope.theme.active = theme;
            switch($rootScope.theme.active) {
              case 'stad':
                $rootScope.theme.text = 'Tink (Stad Antwerpen)';
                $rootScope.theme.html = 'Tink <span>(Stad Antwerpen)</span>';
                break;
              case 'ocmw':
                $rootScope.theme.text = 'Tink (OCMW)';
                $rootScope.theme.html = 'Tink <span>(OCMW)</span>';
                break;
              case 'politie':
                $rootScope.theme.text = 'Tink (Politie)';
                $rootScope.theme.html = 'Tink <span>(Politie)</span>';
                break;
              default:
                $rootScope.theme.text = 'Tink';
                $rootScope.theme.html = 'Tink';
            }
          });

        });

        if($cookies.theme){
          element.val($cookies.theme).change();
        }
      }
    };
  }]);
