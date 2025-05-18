// server/seed.js

const mongoose = require('mongoose');
require('dotenv').config();
const Beneficiary = require('./models/Beneficiary');

const seedData = [
  {
    name: "Anaya",
    age: 10,
    goal: "Doctor",
    image: "https://source.unsplash.com/400x300/?girl,child,portrait"
  },
  {
    name: "Ishita",
    age: 12,
    goal: "Engineer",
    image: "https://source.unsplash.com/400x300/?girl,india,school"
  },
  {
    name: "Mehak",
    age: 14,
    goal: "Artist",
    image: "https://source.unsplash.com/400x300/?girl,painting"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Beneficiary.deleteMany();
    await Beneficiary.insertMany(seedData);
    console.log("Database seeded successfully 🚀");

    mongoose.connection.close();
  } catch (err) {
    console.error("Seeding error:", err);
  }
};

seedDB();
