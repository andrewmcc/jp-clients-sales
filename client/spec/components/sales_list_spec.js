describe('SalesList Component', () => {

  beforeEach(module('jpClientSales'));

  let element;
  let scope;

  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();

    scope.testSales = [{
    	"id": "0001",
    	"clientid": 4,
    	"productname": "Rustic Fresh Keyboard",
    	"price": "531.00",
    	"size": 55
    }, {
    	"id": "0002",
    	"clientid": 4,
    	"productname": "Refined Soft Bike",
    	"price": "478.00",
    	"size": 59
    }];
    element = angular.element('<sales-list clients="testSales"></sales-list>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should render a table', () => {
    let table = element.find('table').attr('id');
    expect(table).toEqual('sales');
  });

});
