(function () {
  'use strict';

  angular.module('jpClientSales').component('httpError', {
    bindings: {
      error: '<'
    },
    template: `
      <div id="error">
        <div class="alert alert-danger">
          <strong>{{ $ctrl.error.statusText }} ({{ $ctrl.error.status }})</strong> Sorry, there was a problem with the request to {{ $ctrl.error.config.url }}
        </div>
      </div>
    `
});

}());
