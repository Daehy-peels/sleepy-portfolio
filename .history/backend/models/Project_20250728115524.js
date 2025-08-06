const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true, // Removes whitespace from both ends of a string
  },
  description: {
    type: String,
    require: true,
  },
  technologies: {
    
  }

});
