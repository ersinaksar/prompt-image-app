import axios from "axios";

const fetchImages = async (query) => {
  try {
    // Split selected area and draw sketches step by step
    const response = await axios.get(`https://lexica.art/api/v1/search?q=${query}`);
    return response.data.images; // Returns an array of image objects
  } catch (error) {
    console.error("Error fetching images from Lexica:", error);
    return [];
  }
};

export default fetchImages;