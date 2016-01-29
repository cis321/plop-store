/**
 * Created by cis on 28/01/16.
 */
'use strict';

plopStoreApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url: '/home',
      views: {
        'mainView': {
          controller: 'HomeController',
          templateUrl: '../views/home.html'
        }
      }
    })

}]);

