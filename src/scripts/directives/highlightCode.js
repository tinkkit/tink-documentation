'use strict';
/*global angular*/
angular.module('hljs', [])

.provider('hljsService', function () {
  var _hljsOptions = {};

  return {
    setOptions: function (options) {
      angular.extend(_hljsOptions, options);
    },
    getOptions: function () {
      return angular.copy(_hljsOptions);
    },
    $get: ['$window', function ($window) {
      ($window.hljs.configure || angular.noop)(_hljsOptions);
      return $window.hljs;
    }]
  };
})

.factory('hljsCache', [
 '$cacheFactory',
 function ($cacheFactory) {
  return $cacheFactory('hljsCache');
}])

.controller('HljsCtrl', [
  'hljsCache', 'hljsService',
  function HljsCtrl (hljsCache,   hljsService) {
    var ctrl = this;

    var _elm = null,
    _lang = null,
    _code = null,
    _hlCb = null;

    ctrl.init = function (codeElm) {
      _elm = codeElm;
    };

    ctrl.setLanguage = function (lang) {
      _lang = lang;

      if (_code) {
        ctrl.highlight(_code);
      }
    };

    ctrl.highlightCallback = function (cb) {
      _hlCb = cb;
    };

    ctrl.highlight = function (code) {
      if (!_elm) {
        return;
      }

      var res, cacheKey;

      _code = code;

      if (_lang) {
      // language specified
      cacheKey = ctrl._cacheKey(_lang, _code);
      res = hljsCache.get(cacheKey);

      if (!res) {
        res = hljsService.highlight(_lang, hljsService.fixMarkup(_code), true);
        hljsCache.put(cacheKey, res);
      }
    }
    else {
      // language auto-detect
      cacheKey = ctrl._cacheKey(_code);
      res = hljsCache.get(cacheKey);

      if (!res) {
        res = hljsService.highlightAuto(hljsService.fixMarkup(_code));
        hljsCache.put(cacheKey, res);
      }
    }

    _elm.html(res.value);
    // language as class on the <code> tag
    _elm.addClass(res.language);

    if (_hlCb !== null && angular.isFunction(_hlCb)) {
      _hlCb();
    }
  };

  ctrl.clear = function () {
    if (!_elm) {
      return;
    }
    _code = null;
    _elm.text('');
  };

  ctrl.release = function () {
    _elm = null;
  };

  ctrl._cacheKey = function () {
    var args = Array.prototype.slice.call(arguments),
    glue = '!angular-highlightjs!';
    return args.join(glue);
  };
}])

.directive('hljs', ['$compile', '$parse', function ($compile, $parse) {
  return {
    restrict: 'EA',
    controller: 'HljsCtrl',
    compile: function(tElm, tAttrs) {
      // get static code
      // strip the starting "new line" character
      var staticHTML = tElm[0].innerHTML.replace(/^(\r\n|\r|\n)/m, ''),
      staticText = tElm[0].textContent.toString().replace(/^(\r\n|\r|\n)/m, '');


      staticHTML = staticHTML.replace(/\t/g,'');
      staticHTML = staticHTML.replace(/&amp;/g, '&');
      staticHTML = staticHTML.replace(/&gt;/g, '>');
      staticHTML = staticHTML.replace(/&lt;/g, '<');
      if(tAttrs.format === 'html'){
        staticHTML = window.html_beautify(staticHTML, { // jshint ignore:line
          'indent_size': 2,
          'indent_char': '\t'
        },true);

      }else if(tAttrs.format === 'js'){
        staticHTML = window.js_beautify(staticHTML, { // jshint ignore:line
          'indent_size': 2,
          'indent_char': '\t'
        });
      }else if(tAttrs.format === 'css'){
        staticHTML = window.js_beautify(staticHTML, { // jshint ignore:line
          'indent_size': 2,
          'indent_char': '\t'
        });
      }




      // put template
      tElm.html('<pre class="pre-wrap hljs"><div></div></pre>');

      /*  angular.element(tElm.children().children()[0]).on("click",function(){
          SelectText(tElm.children().children()[1])
        })*/

return function postLink(scope, iElm, iAttrs, ctrl) {
  var compileCheck, escapeCheck;

  if (angular.isDefined(iAttrs.compile)) {
    compileCheck = $parse(iAttrs.compile);
  }

  if (angular.isDefined(iAttrs.escape)) {
    escapeCheck = $parse(iAttrs.escape);
  } else if (angular.isDefined(iAttrs.noEscape)) {
    escapeCheck = $parse('false');
  }

 function SelectText(element) {
        var doc = document,
          text = element,
          range, selection;

        if (doc.body.createTextRange) {
          range = document.body.createTextRange();
          range.moveToElementText(text);
          range.select();
        } else if (window.getSelection) {
          selection = window.getSelection();
          range = document.createRange();
          range.selectNodeContents(text);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
      var beginDown = null;

      iElm.bind('mousedown',function(evt){
        if(evt.which !== 1){
          return;
        }
       beginDown = evt.clientX;
     });
      iElm.bind('mouseup',function(evt){
        if(evt.which !== 1){
          return;
        }
        if(beginDown === evt.clientX){
          /*jshint newcap: false */
          SelectText(iElm.children().children()[0]);
        }
      });

  ctrl.init(iElm.find('div'));

  if (iAttrs.onhighlight) {
    ctrl.highlightCallback(function () {
      scope.$eval(iAttrs.onhighlight);
    });
  }

  if ((staticHTML || staticText) &&
    angular.isUndefined(iAttrs.source) && angular.isUndefined(iAttrs.include)) {

    var code;

          // Auto-escape check
          // default to "true"
          if (escapeCheck && !escapeCheck(scope)) {
            code = staticHTML;
          }
          else {
            code = staticHTML;
          }

          ctrl.highlight(code);

          // Check if the highlight result needs to be compiled
          if (compileCheck && compileCheck(scope)) {
            // compile the new DOM and link it to the current scope.
            // NOTE: we only compile .childNodes so that
            // we don't get into infinite loop compiling ourselves
            $compile(iElm.find('div').contents())(scope);
          }
        }

        scope.$on('$destroy', function () {
          ctrl.release();
        });
      };
    }
  };
}])

.directive('language', [function () {
  return {
    require: 'hljs',
    restrict: 'A',
    link: function (scope, iElm, iAttrs, ctrl) {
      iAttrs.$observe('language', function (lang) {
        if (angular.isDefined(lang)) {
          ctrl.setLanguage(lang);
        }
      });
    }
  };
}])

.directive('source', ['$compile', '$parse', function ($compile, $parse) {
  return {
    require: 'hljs',
    restrict: 'A',
    link: function(scope, iElm, iAttrs, ctrl) {
      var compileCheck;

      if (angular.isDefined(iAttrs.compile)) {
        compileCheck = $parse(iAttrs.compile);
      }

      scope.$watch(iAttrs.source, function (newCode) {
        if (newCode) {
          ctrl.highlight(newCode);

          // Check if the highlight result needs to be compiled
          if (compileCheck && compileCheck(scope)) {
            // compile the new DOM and link it to the current scope.
            // NOTE: we only compile .childNodes so that
            // we don't get into infinite loop compiling ourselves
            $compile(iElm.find('code').contents())(scope);
          }
        }
        else {
          ctrl.clear();
        }
      });
    }
  };
}])

.directive('include', [
 '$http', '$templateCache', '$q', '$compile', '$parse',
 function ($http,   $templateCache,   $q,   $compile,   $parse) {
  return {
    require: 'hljs',
    restrict: 'A',
    compile: function(tElm, tAttrs) {
      var srcExpr = tAttrs.include;

      return function postLink(scope, iElm, iAttrs, ctrl) {
        var changeCounter = 0, compileCheck;

        if (angular.isDefined(iAttrs.compile)) {
          compileCheck = $parse(iAttrs.compile);
        }

        scope.$watch(srcExpr, function (src) {
          var thisChangeId = ++changeCounter;

          if (src && angular.isString(src)) {
            var templateCachePromise, dfd;

            templateCachePromise = $templateCache.get(src);
            if (!templateCachePromise) {
              dfd = $q.defer();
              $http.get(src, {
                cache: $templateCache,
                transformResponse: function(data) {
                  // Return the raw string, so $http doesn't parse it
                  // if it's json.
                  return data;
                }
              }).success(function (code) {
                if (thisChangeId !== changeCounter) {
                  return;
                }
                dfd.resolve(code);
              }).error(function() {
                if (thisChangeId === changeCounter) {
                  ctrl.clear();
                }
                dfd.resolve();
              });
              templateCachePromise = dfd.promise;
            }

            $q.when(templateCachePromise)
            .then(function (code) {
              if (!code) {
                return;
              }

              // $templateCache from $http
              if (angular.isArray(code)) {
                // 1.1.5
                code = code[1];
              }
              else if (angular.isObject(code)) {
                // 1.0.7
                code = code.data;
              }

              code = code.replace(/^(\r\n|\r|\n)/m, '');
              ctrl.highlight(code);

              // Check if the highlight result needs to be compiled
              if (compileCheck && compileCheck(scope)) {
                // compile the new DOM and link it to the current scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(iElm.find('code').contents())(scope);
              }
            });
          }
          else {
            ctrl.clear();
          }
        });
};
}
};
}]);
