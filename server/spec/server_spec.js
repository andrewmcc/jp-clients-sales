const request = require("request");

const URL = 'http://localhost:3000/';

const validJSON = json => {
  try {
    JSON.parse(json);
  } catch(e) {
    return false;
  }
  return true;
}

describe("jpClientsSales Server", function() {

  describe("GET /clients", () => {

    it("returns status code 200", done => {
      request.get(URL + 'clients', (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns correct content type", done => {
      request.get(URL + 'clients', (error, response, body) => {
        expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
        done();
      });
    });

    it("returns valid json", done => {
      request.get(URL + 'clients', (error, response, body) => {
        expect(validJSON(body)).toBeTruthy();
        done();
      });
    });

    it("returns 10 clients", done => {
      request.get(URL + 'clients', (error, response, body) => {
        expect(JSON.parse(body).length).toEqual(10);
        done();
      });
    });

    it("returns clients with correct keys", done => {
      request.get(URL + 'clients', (error, response, body) => {
        let keys = Object.keys(JSON.parse(body)[0])
        expect(keys.length).toEqual(6);
        expect(keys).toContain('id');
        expect(keys).toContain('firstname');
        expect(keys).toContain('surname');
        expect(keys).toContain('company');
        expect(keys).toContain('telephone');
        expect(keys).toContain('country');
        done();
      });
    });

  });

  describe("GET /sales", () => {

    it("returns status code 200", done => {
      request.get(URL + 'sales', (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns correct content type", done => {
      request.get(URL + 'sales', (error, response, body) => {
        expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
        done();
      });
    });

    it("returns valid json", done => {
      request.get(URL + 'sales', (error, response, body) => {
        expect(validJSON(body)).toBeTruthy();
        done();
      });
    });

    it("returns 10 sales", done => {
      request.get(URL + 'sales', (error, response, body) => {
        expect(JSON.parse(body).length).toEqual(10);
        done();
      });
    });

    it("returns sales with correct keys", done => {
      request.get(URL + 'sales', (error, response, body) => {
        let keys = Object.keys(JSON.parse(body)[0])
        expect(keys.length).toEqual(5);
        expect(keys).toContain('id');
        expect(keys).toContain('clientid');
        expect(keys).toContain('productname');
        expect(keys).toContain('price');
        expect(keys).toContain('size');
        done();
      });
    });

  });

  describe("GET /fault", () => {

    it("returns status code 400", done => {
      request.get(URL + 'fault', (error, response, body) => {
        expect(response.statusCode).toBe(400);
        done();
      });
    });

    it("returns correct content type", done => {
      request.get(URL + 'fault', (error, response, body) => {
        expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
        done();
      });
    });

    it("returns correct message", done => {
      request.get(URL + 'fault', (error, response, body) => {
        expect(JSON.parse(body).error).toEqual('Bad request');
        done();
      });
    });

  });

});
