describe('Clients Controller', () => {

  let scope;
  let deferred;
  let $q;

  let resolveSuccess = {
    data: [{
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
    }]
  };

  let resolveError = {
    "status": 401,
    "statusText": "Unauthorized",
    "config": {
      "url": "http://localhost:3000/fault"
    }
  };

  beforeEach(module('jpClientSales'));

  beforeEach(inject(($controller, _$rootScope_, _$q_, ClientService) => {
    $q = _$q_;
    scope = _$rootScope_.$new();
    deferred = _$q_.defer();
    spyOn(ClientService, 'findAll').and.returnValue(deferred.promise);
    $controller('ClientsController as ctrl', { $scope: scope, ClientService: ClientService });
  }));

  it('should set clientList on promise resolution', () => {
    deferred.resolve(resolveSuccess);
    scope.$apply();
    expect(scope.ctrl.clientList).not.toBe(undefined);
  });

  it('should receive two results on successful promise resolution', () => {
    deferred.resolve(resolveSuccess);
    scope.$apply();
    expect(scope.ctrl.clientList.length).toEqual(2);
  });

  it('should not set httpError on promise resolution', () => {
    deferred.resolve(resolveSuccess);
    scope.$apply();
    expect(scope.ctrl.httpError).toBe(undefined);
  })

  it('should set httpError on promise rejection', () => {
    deferred.reject(resolveError);
    scope.$apply();
    expect(scope.ctrl.httpError).not.toBe(undefined);
  });

  it('should set correct httpError values', () => {
    deferred.reject(resolveError);
    scope.$apply();
    expect(scope.ctrl.httpError.status).toBe(401);
    expect(scope.ctrl.httpError.statusText).toBe('Unauthorized');
    expect(scope.ctrl.httpError.config.url).toBe('http://localhost:3000/fault');
  });

});
