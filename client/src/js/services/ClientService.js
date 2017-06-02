(function () {
  'use strict';

  angular.module('jpClientSales').service('ClientService', ['$http', 'API_BASE', function($http, API_BASE) {

    this.findAll = () => $http.get(API_BASE + 'clients');

    this.getHttpError = () => $http.get(API_BASE + 'fault');

  }]);

}());
