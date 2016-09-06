'use strict';

angular.module('zavistNodeApp', ['zavistNodeApp.auth', 'zavistNodeApp.admin',
    'zavistNodeApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'ui.bootstrap', 'validation.match', 'zavistNodeApp.b2b'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
