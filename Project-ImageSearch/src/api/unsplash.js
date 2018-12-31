import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 7dac5ba9279d82c80a6fa1f3f6f4862c8dab2d749ac152b9ee31d66d6fecb8a2"
  }
});
