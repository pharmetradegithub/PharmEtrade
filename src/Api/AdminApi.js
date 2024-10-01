
import axios from 'axios';
import store from '../Store/Store';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

export const GetCustomers = async (customerId=null , email=null ,mobile=null) => {
  try {
    const response = await axios.get(`/api/Customer/GetCustomers`);
    if (response.status === 200) {
        return response.data.result;
    } else {
      console.error('Failed to fetch banners:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching banners:', error);
  }
};
