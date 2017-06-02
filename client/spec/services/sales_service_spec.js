describe("Sales Service", () => {

  let SalesService

  beforeEach(module("jpClientSales"));

  beforeEach(inject((_SalesService_) => {
    SalesService = _SalesService_;
  }));

  let sales = [{
    "id": "0001",
    "clientid": 4,
    "productname": "Product 1",
    "price": "531.00",
    "size": 55
  }, {
    "id": "0002",
    "clientid": 5,
    "productname": "Product 2",
    "price": "478.00",
    "size": 59
  }, {
    "id": "0003",
    "clientid": 2,
    "productname": "Product 3",
    "price": "365.00",
    "size": 93
  }, {
    "id": "0004",
    "clientid": 1,
    "productname": "Product 4",
    "price": "627.00",
    "size": 73
  }];

  it("should filter sales by client id", () => {
    expect(SalesService.filterByClientId(sales, 4).length).toEqual(1);
  });

  it("should return the correct values", () => {
    expect(Object.values(SalesService.filterByClientId(sales, 4)[0])).toContain('0001');
    expect(Object.values(SalesService.filterByClientId(sales, 4)[0])).toContain(4);
    expect(Object.values(SalesService.filterByClientId(sales, 4)[0])).toContain('Product 1');
    expect(Object.values(SalesService.filterByClientId(sales, 4)[0])).toContain('531.00');
    expect(Object.values(SalesService.filterByClientId(sales, 4)[0])).toContain(55);
  });

  it("should accept id param as a string", () => {
    expect(SalesService.filterByClientId(sales, "4").length).toEqual(1);
  });

});
