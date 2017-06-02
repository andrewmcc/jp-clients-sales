(function () {
  'use strict';

  const jpClientSales = angular.module('jpClientSales', ['ngRoute']);

  jpClientSales.constant('API_BASE', 'http://localhost:3000/');

  jpClientSales.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

    $httpProvider.defaults.cache = true;

    $routeProvider
      .when('/', {
        templateUrl: 'clients.html'
      })
      .when('/clients', {
        templateUrl: 'clients.html'
      })
      .when('/sales/:clientid', {
        templateUrl: 'sales-by-client.html'
      })
      .when('/sales', {
        templateUrl: 'sales.html'
      })
      .when('/fault', {
        templateUrl: 'fault.html'
      })
      .otherwise('/not-found', {
        templateUrl: 'not-found.html'
      });

  }]);

}());
