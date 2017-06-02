describe('SalesByClient Controller', () => {

  beforeEach(module('jpClientSales'));

  let SalesByClientController
  let scope;

  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    SalesByClientController = $controller('SalesByClientController', {
      $scope: scope
    });
  }));

  it('should call the ClientService', inject(($q, ClientService) => {
    var deferred = $q.defer();
    spyOn(ClientService, 'findAll').and.returnValue(deferred.promise);
    SalesByClientController.loadClientsWithSales();
    expect(ClientService.findAll).toHaveBeenCalled();
  }));

});
