// PATH: models/foster.js

const mongoose = require("mongoose") //import mongoose

const Schema = mongoose.Schema; //declare Schema

const fosterSchema = new Schema(
  {
    fosterInfo: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      emailAddress: {
        type: String,
      },
      address: {
        street1: {
          type: String,
        },
        street2: {
          type: String,
        },
        city: {
          type: String,
        },
        fosterState: {
          type: String,
        },
        postalCode: {
          type: String,
        },
        country: {
          type: String,
        },
      },
      fosterAge: {
        type: Number,
      },
      fosterLength: {
        twoWeeks: {
          type: Boolean,
        },
        oneMonth: {
          type: Boolean,
        },
        threeMonths: {
          type: Boolean,
        },
        sixMonths: {
          type: Boolean,
        },
      },
    },

    // accessories: {
    //     litterBox: Boolean,
    //     leash: Boolean,
    //     kennel: Boolean,
    //     habitat: Boolean,
    //     toys: Boolean },

    // food: {
    //     type: Boolean,
    // },
  },
  {
    timestamps: true
  },
);

module.exports = mongoose.model("Foster", fosterSchema);