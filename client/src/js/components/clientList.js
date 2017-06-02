(function () {
  'use strict';

  angular.module('jpClientSales').component('clientList', {
    bindings: {
      clients: '='
    },
    controller: ['$location', '$routeParams', '$anchorScroll', function($location, $routeParams, $anchorScroll) {

      this.selectedClient = $routeParams.clientid || 0;
      this.isActive = currentId => currentId === parseInt(this.selectedClient);

      this.viewSales = clientId => {
        $location.path('/sales/' + clientId);
        $location.hash('list');
        $anchorScroll();
      };

    }],
    template: `
      <table id="clients" class="table table-striped table-condensed">
        <thead>
          <th>Client ID</th>
          <th>Firstname</th>
          <th>Surname</th>
          <th>Company</th>
          <th>Telephone</th>
          <th>Country</th>
          <th></th>
        </thead>
        <tbody>
          <tr ng-repeat="client in $ctrl.clients" ng-class="{'active' : $ctrl.isActive(client.id)}">
            <td>{{ client.id }}</td>
            <td>{{ client.firstname }}</td>
            <td>{{ client.surname }}</td>
            <td>{{ client.company }}</td>
            <td>{{ client.telephone }}</td>
            <td>{{ client.country }}</td>
            <td>
              <button ng-click="$ctrl.viewSales(client.id)">View Sales</button>
            </td>
          </tr>
        </tbody>
      </table>
    `
});

}());
