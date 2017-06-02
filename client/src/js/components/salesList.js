(function () {
  'use strict';

  angular.module('jpClientSales').component('salesList', {
    bindings: {
      sales: '='
    },
    template: `
      <table id="sales" class="table table-striped table-condensed">
        <thead>
          <th>Sale ID</th>
          <th>Client ID</th>
          <th>Product</th>
          <th>Price</th>
          <th>Size</th>
        </thead>
        <tbody>
          <tr ng-repeat="sale in $ctrl.sales">
            <td>{{ sale.id }}</td>
            <td>{{ sale.clientid }}</td>
            <td>{{ sale.productname }}</td>
            <td>&pound;{{ sale.price }}</td>
            <td>{{ sale.size }}</td>
          </tr>
        </tbody>
      </table>
    `
  });

}());
