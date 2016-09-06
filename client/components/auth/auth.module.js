'use strict';

angular.module('zavistNodeApp.auth', ['zavistNodeApp.constants', 'zavistNodeApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
