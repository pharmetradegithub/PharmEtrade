import { setAddFedExShipping, setGetFedex } from '../Store/Store';
import axios from './api'; 

export const fetchGetFedex = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/FedEx/GetBySeller?sellerId=${customerId}`);
      if (response.status === 200) {
        const paymentHistoryData = response.data.result;
        dispatch(setGetFedex(paymentHistoryData)); // Dispatch action
      } else {
        console.error('Failed to fetch order:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };
};

export const fetchFedExAddApi = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/FedEx/AddFedExInformation', payload);
      if (response.status === 200) {
        const response = response.data.result
        dispatch(setAddFedExShipping(response))
      }
    } catch (error) {
      console.log("error api from shipping", error.response?.data?.message || error.message);
    }
  }
}

export const fetchFedexEditApi = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/FedEx/UpdateFedexInformation', payload);
      if (response.status === 200) {
        const response = response.data.result
        dispatch(setAddFedExShipping(response))
      }
    } catch (error) {
      console.log("error api from shipping", error.response?.data?.message || error.message);
    }
  }
}