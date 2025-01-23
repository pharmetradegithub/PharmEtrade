import { setAddFedExShipping, setAddShipping, setEditShipping, setGetFedEx, setGetShiping } from "../Store/Store";

import axios from './api'; 



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

export const paymentProcessApi = async (payload) => {
    try {
      const response = await axios.post('/api/Orders/ProcessPayment', payload);
      console.log(">", response);
      if (response.status === 200) {
        return response.data.result;
      }
    } catch (error) {
      console.log("error api from shipping", error.response?.data?.message || error.message);
    }
  }

  
export const ShipmentChargesApi = async (payload) => {
  try {
    const response = await axios.post('/api/Orders/ShippingCharges', payload);
    console.log(">", response);
    if (response.status === 200) {
      return response.data.result;
    }
  } catch (error) {
    console.log("error api from shipping", error.response?.data?.message || error.message);
  }
}


export const fedExAddApi = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/FedEx/AddFedExInformation', payload);
      console.log("addShipping-->", response);
      if (response.status === 200) {
        const response = response.data.result
        dispatch(setAddFedExShipping(response))
      }
    } catch (error) {
      console.log("error api from shipping", error.response?.data?.message || error.message);
    }
  }
}

export const fedexGetApi = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/FedEx/GetBySeller?sellerId=${customerId}`)
      if (response.status === 200) {
        const getfedexAPi = response.data.result
        dispatch(setGetFedEx(getfedexAPi))
      } else {
        console.log('Error')
      }
    } catch (error) {
      console.log("error api from shipping", response.data.message)
    }
  }
}