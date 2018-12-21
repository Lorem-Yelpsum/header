const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3003/Yelp');
const db = mongoose.connection;
const Schema = mongoose.Schema;

db.on('error', 
console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB')
});

let restId = ObjectId();

let infoSchema = new Schema({
  restaurantInfo: {
    _id: restId,
    rest_name: String,
    category: Array,
    address: {
      street: String,
      city: String,
      state: {type: String, max: 2},
      zip: {type: Number, max: 5}
    },
    phone: {type: String, min: 7, max: 14}
  }
})

let reviewSchema = new Schema({
  reviews: {
    _id: ObjectId(),
    rating: {
      stars: {type: Number, min: 1, max: 5},
      rest_id: restId,
      created_at: {type: Number, default: Date.now}
    }
  }
})

const Info = mongoose.model('Yelp', infoSchema);
const Review = mongoose.model('Yelp', reviewSchema);