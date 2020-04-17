const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();

mongoose.Promise = global.Promise;
    
mongoose.connect(
    process.env.MONGODB ,
    { useNewUrlParser: true, useUnifiedTopology: true  }  
    );

    module.exports = mongoose;
