describe('Sales Controller', () => {

  beforeEach(module('jpClientSales'));

  let SalesController
  let scope;

  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    SalesController = $controller('SalesController', {
      $scope: scope
    });
  }));

  it('should call SalesService findAll()', inject(($q, SalesService) => {
    var deferred = $q.defer();
    spyOn(SalesService, 'findAll').and.returnValue(deferred.promise);
    SalesController.loadSales();
    expect(SalesService.findAll).toHaveBeenCalled();
  }));

});
