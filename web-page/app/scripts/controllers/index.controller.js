/**
 * Created by cis on 28/01/16.
 */
'use strict';

plopStoreApp.controller('IndexController', ['$scope', '$state',
  function($scope, $state) {

    console.log('index controller ok :)');

    $scope.authenticate = function(){

      $state.go("home");

    };

  }]);

