import { setAddShipping, setEditShipping, setGetShiping } from "../Store/Store";

import axios from "axios";

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';


export const fedexShippingGetApi = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Orders/Shipments/GetByCustomerId?customerId=${customerId}`)
      if (response.status === 200) {
        const getfedexAPi = response.data.result
        dispatch(setGetShiping(getfedexAPi))
      } else {
        console.log('Error')
      }
    } catch (error) {
      console.log("error api from shipping", response.data.message)
    }
  }
}

export const shipmentEditApi = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/Orders/AddShipment', payload);
      console.log("addShipping-->", response);
      if (response.status === 200) {
        const response = response.data.result
        dispatch(setEditShipping(response))
      }
    } catch (error) {
      console.log("error api from shipping", error.response?.data?.message || error.message);
    }
  }
}

export const shipmentAddApi = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/Orders/AddShipment', payload);
      console.log("addShipping-->", response);
      if (response.status === 200) {
        const response = response.data.result
        dispatch(setAddShipping(response))
      }
    } catch (error) {
      console.log("error api from shipping", error.response?.data?.message || error.message);
    }
  }
}