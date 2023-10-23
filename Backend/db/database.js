const mongoose = require('mongoose');

module.exports = async() => {
    const connect = await mongoose.connect("mongodb+srv://vineekshav:qSvNCkQeKjZxjA1s@cluster0.ripuwkb.mongodb.net/Colors", { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    if(connect){
      console.log('connected to db');
    }
    return;
    
  };