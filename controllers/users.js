// PATH controllers/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Pet = require('../models/pet');

  
//INDEX

async function index(req, res) {
  // res.send("HOLDER: user index");
  try {
      const allUsers = await User.find({});
      console.log(allUsers, "allUsers");

      res.render('animals/users', {title: "All Users", users: allUsers})
  } catch (err) {
      console.log('index error', err)
  }
}

// CREATE
async function create(req, res) {
  const userData = {...req.body}
  if (userData.fosterAge <= 0) {
    userData.fosterAge = 18
  }
  try {
    await User.create(userData);
    // Always redirect after CRUDing data
    res.render('/animals/match', { errorMsg: err.message });
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('animals/users', { errorMsg: err.message });
  }
}
// SHOW



  
  // //handle POST requests to /users
  // router.post('/', async (req, res) => {
  //   try {
  //     // Get data from the form submission
  //     const userData = req.body;

  //     // Create a new user instance with the form data
  //     const newUser = new User(userData);

  //     //Save the new user to the database
  //     await newUser.save();

  //     //Render form
  //     res.render('/aminals/users', {title: "New User", errorMsg: '' });
  //   } catch (error) {
  //     //Handle errors
  //     res.render('error', { error });
  //   }
  //   });
  
  //Add a new user
  async function newUser(req, res) {
    res.render('animals/users')
    // try {
    //   //create a new user instance
    //   const newUser = new User(req.body);
    //   //Save new user to the database
    //   await newUser.save();
    //   // res.render('users/new', {title: "Add new User", users: await User.findById(req.params.id)})

    //   res.redirect(`/users/${newUser._id}`);
    // } catch (err) {
    //     console.log(err);
    //     res.render('error', { error: err });
    // }
  };

  module.exports = {
    index,
    create,
    // users,
     newUser,
    //  show
    }