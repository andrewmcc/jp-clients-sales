(function () {
  'use strict';

  angular.module('jpClientSales').service('SalesService', ['$http', 'API_BASE', function($http, API_BASE) {

    this.findAll = () => $http.get(API_BASE + 'sales');

    this.filterByClientId = (sales, clientId) => {
      let clientSales = [];
      sales.forEach(sale => {
        if (sale.clientid === parseInt(clientId)) {
          clientSales.push(sale);
        }
      });
      return clientSales;
    };

  }]);

}());
