import axios from "axios"
import {setSellerDashboardId } from '../Store/Store'
axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

export const fetchSellerDashboard = (customerId) => {
  return async (dispatch) => {
    try {
      console.log(`Fetching data for sellerId: ${customerId}`);
      const response = await axios.get(`/api/Dashboard/GetSellerDashboard?sellerId=${customerId}`);
      console.log('API Response:', response);
      if (response.status === 200) {
        const sellerData = response.data;
        console.log('fetchSellerDashboard-->', sellerData);
        dispatch(setSellerDashboardId(sellerData));
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}