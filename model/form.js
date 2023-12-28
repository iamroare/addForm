// propertyModel.js
const mongoose = require('mongoose');

// Define the schema
const propertySchema = new mongoose.Schema({
  registeredBrandname: {
    type: String,
    required: true,
  },
  numberOfProperties: {
    type: Number,
    required: true,
  },
  propertyName: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const Property = mongoose.model('Property', propertySchema);

// Export the model
module.exports = Property;
