const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Yelp', { useNewUrlParser: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;

db.on('error',
  console.error.bind(console, 'MongoDB connection error:'));
db.once('open',
  () => {
    console.log('Connected to MongoDB');
  });

const infoSchema = new Schema({
    restId: { type: Number, unique: true },
    rest_name: String,
    claimed: Boolean,
    price_point: Number,
    category: String,
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
    },
    phone: String,
    totalReviews: {
      total: Number,
      five: Number,
      four: Number,
      three: Number,
      two: Number,
      one: Number 
    },
    reviewHistory: {
      2018: {
        jan: Number,
        feb: Number,
        mar: Number,
        apr: Number,
        may: Number,
        jun: Number,
        jul: Number,
        aug: Number,
        sep: Number,
        oct: Number,
        nov: Number,
        dec: Number 
      },
      2017: {
        jan: Number,
        feb: Number,
        mar: Number,
        apr: Number,
        may: Number,
        jun: Number,
        jul: Number,
        aug: Number,
        sep: Number,
        oct: Number,
        nov: Number,
        dec: Number 
      },
      2016: {
        jan: Number,
        feb: Number,
        mar: Number,
        apr: Number,
        may: Number,
        jun: Number,
        jul: Number,
        aug: Number,
        sep: Number,
        oct: Number,
        nov: Number,
        dec: Number 
      },
      2015: {
        jan: Number,
        feb: Number,
        mar: Number,
        apr: Number,
        may: Number,
        jun: Number,
        jul: Number,
        aug: Number,
        sep: Number,
        oct: Number,
        nov: Number,
        dec: Number  
      },
      2014: {
        jan: Number,
        feb: Number,
        mar: Number,
        apr: Number,
        may: Number,
        jun: Number,
        jul: Number,
        aug: Number,
        sep: Number,
        oct: Number,
        nov: Number,
        dec: Number 
      }
    }
});

const Info = mongoose.model('restaurant_info', infoSchema);

module.exports = {
  Info
};
