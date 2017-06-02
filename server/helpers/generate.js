const faker = require('faker');

module.exports = {

  clients: function () {
    let clients = [];
    Array.from(Array(10)).forEach((client, index) => {
      let clientObject = {
        id: (index + 1),
        firstname: faker.name.firstName(),
        surname: faker.name.lastName(),
        company: faker.company.companyName(),
        telephone: faker.phone.phoneNumber(),
        country: faker.address.country()
      };
      clients.push(clientObject);
    });
    return clients;
  },

  sales: function () {
    let sales = [];
    Array.from(Array(30)).forEach((sale, index) => {
      let salesObject = {
        id: faker.random.alphaNumeric(),
        clientid: (index + 1),
        productname: faker.commerce.productName(),
        price: faker.commerce.price(),
        size: (Math.floor(Math.random() * 100) + 1)
      };
      sales.push(salesObject);
    });
    return sales;
  }

};
