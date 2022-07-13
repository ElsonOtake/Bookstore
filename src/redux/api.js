import axios from 'axios';

const urlBooks = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lXjl7zLtbljcIl0TN0v2/books';

export const axiosGet = async () => {
  try {
    const response = await axios.get(urlBooks);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const axiosPost = async (obj = {}) => {
  try {
    const response = await axios.post(urlBooks, obj);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
