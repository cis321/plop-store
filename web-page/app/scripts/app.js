'use strict';

/**
 * @ngdoc overview
 * @name plopStoreApp
 * @description
 * # plopStoreApp
 *
 * Main module of the application.
 */
var plopStoreApp = angular.module('plopStoreApp', ['ngCookies', 'ngResource', 'ui.router']);

plopStoreApp.run(['$rootScope', '$state', '$location',
  function ($rootScope, $state, $location) {

    var publicStates = ['login', 'recover-password'];

    /**
     * Sets the subdomain as the user organization
     * @param data
     * @constructor
     */
    function GetSystemSettingSuccess(data){
      var domain = data.domain;
      var host = $location.host();
      var subdomainEndIndex = host.search( domain);
      var subdomainPart = host.substr(0,subdomainEndIndex-1);
      var periodIndex = subdomainPart.search(/\./);
      var subdomain = subdomainPart.substr(periodIndex+1,subdomainPart.length-periodIndex);
      if(subdomain==""){
        subdomain = "PlopStore"; //Default organization name
      }
    }

  }]);
