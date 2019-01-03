const faker = require('faker');
const db = require('./index');

let arr = [ "Korean", "American", "Chinese", "Greek", "Thai", 
          "Moroccan", "French", "Russian", "Eritrean", "Mexican",
          "BBQ", "Italian", "Indian", "Burgers", "Salads", "Pizza" ];

let randCat = arr[Math.trunc((Math.random()*arr.length))];

// console.log(randCat);

const createRestaurantInfo = () => ({

  rest_name: faker.company.companyName(),
  claimed: true,
  price_point: faker.random.number({ min: 1, max: 4 }),
  category: randCat,
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zip: faker.address.zipCode()
  },
  phone: faker.phone.phoneNumber(),
  totalReviews: {
    total: faker.random.number({ min: 250, max: 500 }),
    five: faker.random.number({ min: 45, max: 100 }),
    four: faker.random.number({ min: 45, max: 100 }),
    three: faker.random.number({ min: 25, max: 50 }),
    two: faker.random.number({ min: 25, max: 45 }),
    one: faker.random.number({ min: 10, max: 25 }) 
  },
  reviewHistory: {
    2018: {
      jan: faker.random.number({ min: 1, max: 5}),
      feb: faker.random.number({ min: 1, max: 5}),
      mar: faker.random.number({ min: 1, max: 5}),
      apr: faker.random.number({ min: 1, max: 5}),
      may: faker.random.number({ min: 1, max: 5}),
      jun: faker.random.number({ min: 1, max: 5}),
      jul: faker.random.number({ min: 1, max: 5}),
      aug: faker.random.number({ min: 1, max: 5}),
      sep: faker.random.number({ min: 1, max: 5}),
      oct: faker.random.number({ min: 1, max: 5}),
      nov: faker.random.number({ min: 1, max: 5}),
      dec: faker.random.number({ min: 1, max: 5}) 
    },
    2017: {
      jan: faker.random.number({ min: 1, max: 5}),
      feb: faker.random.number({ min: 1, max: 5}),
      mar: faker.random.number({ min: 1, max: 5}),
      apr: faker.random.number({ min: 1, max: 5}),
      may: faker.random.number({ min: 1, max: 5}),
      jun: faker.random.number({ min: 1, max: 5}),
      jul: faker.random.number({ min: 1, max: 5}),
      aug: faker.random.number({ min: 1, max: 5}),
      sep: faker.random.number({ min: 1, max: 5}),
      oct: faker.random.number({ min: 1, max: 5}),
      nov: faker.random.number({ min: 1, max: 5}),
      dec: faker.random.number({ min: 1, max: 5}) 
    },
    2016: {
      jan: faker.random.number({ min: 1, max: 5}),
      feb: faker.random.number({ min: 1, max: 5}),
      mar: faker.random.number({ min: 1, max: 5}),
      apr: faker.random.number({ min: 1, max: 5}),
      may: faker.random.number({ min: 1, max: 5}),
      jun: faker.random.number({ min: 1, max: 5}),
      jul: faker.random.number({ min: 1, max: 5}),
      aug: faker.random.number({ min: 1, max: 5}),
      sep: faker.random.number({ min: 1, max: 5}),
      oct: faker.random.number({ min: 1, max: 5}),
      nov: faker.random.number({ min: 1, max: 5}),
      dec: faker.random.number({ min: 1, max: 5}) 
    },
    2015: {
      jan: faker.random.number({ min: 1, max: 5}),
      feb: faker.random.number({ min: 1, max: 5}),
      mar: faker.random.number({ min: 1, max: 5}),
      apr: faker.random.number({ min: 1, max: 5}),
      may: faker.random.number({ min: 1, max: 5}),
      jun: faker.random.number({ min: 1, max: 5}),
      jul: faker.random.number({ min: 1, max: 5}),
      aug: faker.random.number({ min: 1, max: 5}),
      sep: faker.random.number({ min: 1, max: 5}),
      oct: faker.random.number({ min: 1, max: 5}),
      nov: faker.random.number({ min: 1, max: 5}),
      dec: faker.random.number({ min: 1, max: 5})  
    },
    2014: {
      jan: faker.random.number({ min: 1, max: 5}),
      feb: faker.random.number({ min: 1, max: 5}),
      mar: faker.random.number({ min: 1, max: 5}),
      apr: faker.random.number({ min: 1, max: 5}),
      may: faker.random.number({ min: 1, max: 5}),
      jun: faker.random.number({ min: 1, max: 5}),
      jul: faker.random.number({ min: 1, max: 5}),
      aug: faker.random.number({ min: 1, max: 5}),
      sep: faker.random.number({ min: 1, max: 5}),
      oct: faker.random.number({ min: 1, max: 5}),
      nov: faker.random.number({ min: 1, max: 5}),
      dec: faker.random.number({ min: 1, max: 5}) 
    }
  }
})

let dbArr = [];
for (let i = 0; i <= 100; i++) {
  let reviewObj = createRestaurantInfo();
  reviewObj.restId = i;
  dbArr.push(reviewObj);
}

db.Info.create(dbArr, console.log);
