import axios from "axios";

const API_PATH = "https://api.unsplash.com/photos/";
// const API_PATH_SEARCH = "https://api.unsplash.com/search/photos/";
const API_KEY = "CZDS7Hs7VVYWFaOggo5bSaxREF1w54cxTY4SY9MXtbs";

const fetchRandomImages = async () => {
  const response = await axios.get(`${API_PATH}`, {
    params: {
      client_id: API_KEY,
    },
  });
  return response.data;
};

export default fetchRandomImages;
