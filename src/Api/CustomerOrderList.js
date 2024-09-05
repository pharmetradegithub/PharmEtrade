import axios from "axios"
import store from "../Store/Store";

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

export const customerOrderApi = async(payLoad) => {
  try {
    const response = await axios.post('/api/Orders/Add', payLoad)
    if (response.status === 200) {
      store.dispatch({ type: 'customer/AddOrderList', payload: payLoad });
    } else {
      console.error('Failed from order:', response.data.message);
    }
  } catch (error) {
    console.error('Error from order:', error);
  }
}

export const customerOrderGetApi = async (userId) => {
  try {
    const response = await axios.get(`/api/Orders/Get?customerId=${userId}`)
    if (response.status === 200) {
      return response.data.result[0];
    } else {
      console.error('Failed to fetch product by ID:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching product by ID:', error);
  }
}