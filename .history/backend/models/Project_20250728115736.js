const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
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
      type: [String], // An array of strings
      require: true,
    },
    imageUrl: {
      // Optional: URL to a project screenshot/image
      type: String,
      required: false, // Not strictly required, can be added later
    },
    githubLink: {
      type: String,
      required: false,
    },
    liveDemoLink: {
      type: String,
      required: false,
    },
    // Optional: Add a date for when the project was created/completed
    completionDate: {
      type: Date,
      default: Date.now, // Sets the default to the current date when created
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
module
