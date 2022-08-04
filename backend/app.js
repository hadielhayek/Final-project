const express = require('express')
const app = express()
var path = require('path');
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser')
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


app.use('/space', spaceroute)
app.use('/pricing', pricingroute)
app.use('/rating', ratingroute)



app.listen(port, () => console.log(`Server running on port ${port}`));