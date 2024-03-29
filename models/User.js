const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var locationInfoSchema = new Schema({
  _id: false,
  city: {
    type: String,
    default: ""
  },
  state: {
    type: String,
    default: ""
  },
  country: {
    type: String,
    default: ""
  },
  long: {
    type: Number,
    default: 0
  },
  lat: {
    type: Number,
    default: 0
  }
});


const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    washerFlag: {
      type: Boolean,
      // default: false,
      required: true
    },
    customerFlag: {
      type: Boolean,
      // default: true,
      required: true
    },
    admin: {
      type: Boolean,
      default: false,
      required: true
    },
    completedJobs: {
      type: Number,
      default: 0,
      required: true
    },
    locationInfo: {type: locationInfoSchema, default: () => ({})},
    completedCustomerRequests: {
      type: Number,
      default: 0,
      required: true
    },
    bio: {
      type: String,
      default: "",
      // required: true
    },
    positiveReviews: {
      type: Number,
      default: 0,
      // required: true
    },
    negativeReviews: {
      type: Number,
      default: 0,
      // required: true
    },
    timeStamp: {
      type: Date,
      default: Date.now
    },
    zoneNumber: {
      type: Number,
      default: 0
    },
    zoneDescription: {
      type: String,
      default: ''
    }
})

const User = mongoose.model('users', UserSchema)
module.exports = User 