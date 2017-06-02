describe('ClientList Component', function () {

  beforeEach(module('jpClientSales'));

  var element;
  var scope;

  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();

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

});
