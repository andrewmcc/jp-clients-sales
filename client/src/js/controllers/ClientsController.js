(function () {
  'use strict';

  angular.module('jpClientSales').controller('ClientsController', ['ClientService', function(ClientService) {

      this.loadClients = () => {
        ClientService.findAll().then(clients => {
          this.clientList = clients.data;
        }).catch(err => {
          this.httpError = err;
        });
      };
      this.loadClients();

      this.loadHttpError = () => {
        ClientService.getHttpError()
        .catch(err => {
          this.httpError = err;
        });
      };

  }]);

}());
