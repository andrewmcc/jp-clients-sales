describe('Clients Controller', () => {

  beforeEach(module('jpClientSales'));

  let ClientsController
  let scope;

  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    ClientsController = $controller('ClientsController', {
      $scope: scope
    });
  }));

  it('should call ClientService findAll()', inject(($q, ClientService) => {
    var deferred = $q.defer();
    spyOn(ClientService, 'findAll').and.returnValue(deferred.promise);
    ClientsController.loadClients();
    expect(ClientService.findAll).toHaveBeenCalled();
  }));

  it('should call ClientService getHttpError()', inject(($q, ClientService) => {
    var deferred = $q.defer();
    spyOn(ClientService, 'getHttpError').and.returnValue(deferred.promise);
    ClientsController.loadHttpError();
    expect(ClientService.getHttpError).toHaveBeenCalled();
  }));

});
