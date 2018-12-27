const request = require('supertest');
const app = require('../server/index.js');


// with promises
// describe('GET /restaurants/:restId', () => {
//   test('It should respond to the GET method', (done) => {
//     return request(app).get('/restaurants/1')
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });
// });

// with await
describe('GET /restaurants/:/restId', () => {
  test('It should respond to the GET method with status code 200', async () => {
      const response = await request(app).get('/restaurants/1');
      expect(response.statusCode).toBe(200);
  });
})

