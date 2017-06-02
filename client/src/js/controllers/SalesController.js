(function () {
  'use strict';

  angular.module('jpClientSales').controller('SalesController', ['ClientService', 'SalesService', function(ClientService, SalesService) {

    this.loadSales = () => {
      SalesService.findAll().then(sales => {
        this.salesList = sales.data;
      }).catch(err => {
        this.httpError = err;
      });
    };

    this.loadSales();

  }]);

}());
