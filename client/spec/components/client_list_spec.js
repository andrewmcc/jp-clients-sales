describe('ClientList Component', function () {

  beforeEach(module('jpClientSales'));

  let element;
  let scope;
  let mockParams = {
    clientid: 1
  }

  beforeEach(inject(($rootScope, $compile, $routeParams) => {

    scope = $rootScope.$new();
    angular.extend($routeParams, mockParams);
    scope.testClients = [{
    	"id": 1,
    	"firstname": "Elenor",
    	"surname": "White",
    	"company": "Mraz Inc",
    	"telephone": "1-984-375-2314 x762",
    	"country": "Venezuela"
      }, {
    	"id": 2,
    	"firstname": "Donato",
    	"surname": "Sporer",
    	"company": "Kshlerin - Jerde",
    	"telephone": "161.991.2731",
    	"country": "Armenia"
    }];
    element = angular.element('<client-list clients="testClients"></client-list>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should render a table', () => {
    let table = element.find('table').attr('id');
    expect(table).toEqual('clients');
  });

  it('should contain two rows', () => {
    let rows = element.find('tbody').children().length;
    expect(rows).toEqual(2);
  });

});
