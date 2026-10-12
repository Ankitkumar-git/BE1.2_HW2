require("dotenv").config();

const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurants.models");

const newRestaurant = {
  name: "Cha Cha",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
};

async function createRestaurant(restaurantData) {
  try {
    await initializeDatabase();

    const restaurant = new Restaurant(restaurantData);
    const savedRestaurant = await restaurant.save();

    console.log("New Restaurant data:", savedRestaurant);
  } catch (error) {
    console.error("Error creating restaurant:", error);
  } finally {
    await Restaurant.db.close();
  }
}

createRestaurant(newRestaurant);
