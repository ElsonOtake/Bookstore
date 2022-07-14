import axios from 'axios';

const urlBooks = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BluHDvdJs2fJBhr1nW5x/books';

const changeFormat = (obj) => {
  const response = [];
  Object.entries(obj).forEach((data) => {
    response.push({
      id: data[0],
      title: data[1].title,
      author: data[1].author,
      category: 'API',
    });
  });
  return response;
};

export const axiosGet = async () => {
  try {
    const response = await axios.get(urlBooks);
    return changeFormat(response.data);
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

export const axiosDelete = async (id) => {
  try {
    const response = await axios.delete(`${urlBooks}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
