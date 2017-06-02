(function () {
  'use strict';

  angular.module('jpClientSales').controller('SalesByClientController', ['$routeParams', 'SalesService', 'ClientService', function($routeParams, SalesService, ClientService) {

    this.loadClientsWithSales = () => {
      ClientService.findAll().then(clients => {
        this.clientList = clients.data;
        this.selectedClient = $routeParams.clientid;
        return SalesService.findAll();
      }).then(sales => {
        this.filteredSalesList = SalesService.filterByClientId(sales.data, this.selectedClient);
      }).catch(err => {
        this.httpError = err;
      });
    };

    this.loadClientsWithSales();

  }]);

}());
