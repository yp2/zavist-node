/**
 * Created by daniel on 06.09.16.
 */
'use strict';

angular.module('zavistNodeApp.b2b')
  .config(function ($stateProvider) {
    $stateProvider
      .state('b2b', {
        url: '/b2b',
        template: '<div ui-view=""></div>'
      });
  });
