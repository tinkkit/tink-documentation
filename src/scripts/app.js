'use strict';

/**
 * @ngdoc overview
 * @name tinkApp
 * @description
 * # tinkApp
 *
 * Main module of the application.
 */
 angular
 .module('tinkApp', [
   'ngAnimate',
   'ngCookies',
   'ngResource',
   'ngRoute',
   'ngMessages',
   'ngSanitize',
   'ngTouch',
   'hljs',
   'markdown',
   'tink.tinkApi',
   'tink.navigation',
   'tink.accordion',
   'tink.popover',
   'tink.modal'
   ])
 .config(function ($routeProvider) { /*, $locationProvider */
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/start', {
    templateUrl: 'views/start.html',
    controller: 'StartCtrl'
  })
  .when('/docs', {
    redirectTo: '/start',
  })
  .when('/docs/ui', {
    redirectTo: '/docs/ui/grid',
  })
  .when('/docs/:subpage', {
    templateUrl: 'views/docs.html',
    controller: 'DocsCtrl'
  })
  .when('/docs/:subpage/:subsubpage', {
    templateUrl: 'views/docs.html',
    controller: 'DocsCtrl'
  })
  .when('/changelog', {
    templateUrl: 'views/changelog.html',
    controller: 'ChangelogCtrl'
  })
  .when('/faq', {
    templateUrl: 'views/faq.html',
    // controller: 'FaqCtrl'
  })
  .when('/shame', {
    templateUrl: 'views/shame.html',
    controller: 'ShameCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

  // $locationProvider.html5Mode(true);
  // $locationProvider.hashPrefix('!');
}).config(function (hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    tabReplace: ' ',
    useBR: false,
    languages:['html','js','bash','css']
  });
}).run(function($rootScope) {
  var versionFileTinkProp = '1.2.6';
  $rootScope.themes = {
    digipolis:['tink.'+versionFileTinkProp+'.min.css','default.'+versionFileTinkProp+'.min.css','styleguide.'+versionFileTinkProp+'.min.css'],
    stad:['tink-stad.'+versionFileTinkProp+'.min.css','default-stad.'+versionFileTinkProp+'.min.css','styleguide-stad.'+versionFileTinkProp+'.min.css'],
    ocmw:['tink-ocmw.'+versionFileTinkProp+'.min.css','default-ocmw.'+versionFileTinkProp+'.min.css','styleguide-ocmw.'+versionFileTinkProp+'.min.css'],
    politie:['tink-politie.'+versionFileTinkProp+'.min.css','default-politie.'+versionFileTinkProp+'.min.css','styleguide-politie.'+versionFileTinkProp+'.min.css']
  };

  $rootScope.theme = {
    active: 'digipolis',
    text: 'Tink',
    html: 'Tink'
  };
});
