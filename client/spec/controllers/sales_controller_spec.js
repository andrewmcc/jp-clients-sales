describe('Sales Controller', () => {

  let scope;
  let deferred;
  let $q;

  let resolveSuccess = {
    data: [{
    	"id": "0001",
    	"clientid": 4,
    	"productname": "JavaScript & JQuery: Interactive Front-end Web Development",
    	"price": "19.62",
    	"size": 55
    }, {
    	"id": "0002",
    	"clientid": 4,
    	"productname": "JavaScript: The Good Parts",
    	"price": "16.31",
    	"size": 59
    }, {
    	"id": "0003",
    	"clientid": 2,
    	"productname": "JavaScript: The Ultimate Beginner's Guide!",
    	"price": "12.99",
    	"size": 93
    }]
  };

  let resolveError = {
    "status": 403,
    "statusText": "Forbidden",
    "config": {
      "url": "http://localhost:3000/fault"
    }
  };

  beforeEach(module('jpClientSales'));

  beforeEach(inject(($controller, _$rootScope_, _$q_, SalesService) => {
    $q = _$q_;
    scope = _$rootScope_.$new();
    deferred = _$q_.defer();
    spyOn(SalesService, 'findAll').and.returnValue(deferred.promise);
    $controller('SalesController as ctrl', { $scope: scope, SalesService: SalesService });
  }));

  it('should set salesList on promise resolution', () => {
    deferred.resolve(resolveSuccess);
    scope.$apply();
    expect(scope.ctrl.salesList).not.toBe(undefined);
  });

  it('should receive two results on successful promise resolution', () => {
    deferred.resolve(resolveSuccess);
    scope.$apply();
    expect(scope.ctrl.salesList.length).toEqual(3);
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
    expect(scope.ctrl.httpError.status).toBe(403);
    expect(scope.ctrl.httpError.statusText).toBe('Forbidden');
    expect(scope.ctrl.httpError.config.url).toBe('http://localhost:3000/fault');
  });

});
