const express = require('express')
const app = express()
var path = require('path');
require('dotenv').config()
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser')
var bcrypt = require('bcryptjs');
const port = process.env.PORT || 3001;
const mongoose = require('mongoose')


const spaceroute = require('./routes/space')
const pricingroute = require('./routes/pricing')
const ratingroute = require('./routes/rating')



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log(' connected to the database.'))
  .catch(err => console.error(err))

const User = require('./models/user')

const auth = require('./auth');

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});


app.post("/register", async (req, res) => {

  // Our register logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "20h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});




app.post("/login", async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "20h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// ...

app.use('/space', spaceroute)
app.use('/pricing', pricingroute)
app.use('/rating', ratingroute)
app.listen(port, () => console.log(`Server running on port ${port}`));