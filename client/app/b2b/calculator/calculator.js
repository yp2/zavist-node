'use strict';

angular.module('zavistNodeApp.b2b')
  .config(function ($stateProvider) {
    $stateProvider

      .state('b2b.calculator', {
        url: '/calculator',
        template: '<calculator></calculator>'
      });
  });
