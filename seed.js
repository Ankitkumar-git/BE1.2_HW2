require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
  genre: [String],
  language: String,
  country: String,
  rating: Number,
  summary: String,
  coverImageUrl: String
});

const Book = mongoose.model("Book", bookSchema);

const booksData = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    genre: ["Fiction", "Historical"],
    language: "English",
    country: "United States",
    rating: 8.9,
    summary: "A powerful story of racial injustice and moral growth in a small Southern town.",
    coverImageUrl: "https://example.com/to_kill_a_mockingbird.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    genre: ["Fiction", "Romance"],
    language: "English",
    country: "United States",
    rating: 8.1,
    summary: "A tale of love, wealth, and the American Dream set during the Roaring Twenties.",
    coverImageUrl: "https://example.com/the_great_gatsby.jpg"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publishedYear: 1997,
    genre: ["Fantasy"],
    language: "English",
    country: "United Kingdom",
    rating: 9.3,
    summary: "The magical journey of a young wizard at Hogwarts School of Witchcraft and Wizardry.",
    coverImageUrl: "https://example.com/harry_potter_sorcerers_stone.jpg"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publishedYear: 2003,
    genre: ["Mystery", "Thriller"],
    language: "English",
    country: "United States",
    rating: 7.6,
    summary: "A gripping mystery thriller involving hidden secrets and religious symbolism.",
    coverImageUrl: "https://example.com/the_da_vinci_code.jpg"
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    publishedYear: 2012,
    genre: ["Non-Fiction", "Self-help"],
    language: "English",
    country: "United States",
    rating: 8.4,
    summary: "Explores the science behind habits and how they can be changed to transform lives.",
    coverImageUrl: "https://example.com/the_power_of_habit.jpg"
  }
];

async function seedDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    const result = await Book.insertMany(booksData);
    console.log(`${result.length} books inserted successfully!`);

    await mongoose.connection.close();
    console.log("Connection closed");
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
}

seedDB();