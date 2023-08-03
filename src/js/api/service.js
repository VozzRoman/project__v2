import axios from 'axios';

axios.defaults.baseURL = '//dummyjson.com';

export const getAllProducts = async () => {
  const response = await axios.get('/products');
  console.log(response);
  return response.data;
};
