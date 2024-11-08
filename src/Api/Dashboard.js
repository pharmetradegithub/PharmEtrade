import axios from './api'; 
import {setCustomerDashboardId, setCustomerOrder, setSellCustomer, setSellerDashboardId, setTotalProductDashboard } from '../Store/Store'

export const fetchSellerDashboard = (customerId) => {
  return async (dispatch) => {
    try {
      // console.log(`Fetching data for sellerId: ${customerId}`);
      const response = await axios.get(`/api/Dashboard/GetSellerDashboard?sellerId=${customerId}`);
      if (response.status === 200) {
        const sellerData = response.data;
        dispatch(setSellerDashboardId(sellerData));
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}

export const fetchCustomerDashboard = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Dashboard/GetBuyerDashboard?buyerId=${customerId}`)
      if (response.status === 200) {
        const customerData = response.data;
        dispatch(setCustomerDashboardId(customerData))
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}

export const fetchTotalProductDashboard = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Orders/Seller/Products?vendorId=${customerId}`)
      if (response.status === 200) {
        const ProductData = response.data.result;
        dispatch(setTotalProductDashboard(ProductData))
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}

export const fetchCustomerOrered = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Orders/Seller/Customers?vendorId=${customerId}`)
      if (response.status === 200) {
        const ProductData = response.data.result;
        dispatch(setCustomerOrder(ProductData))
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}


export const fetchSellCustomer = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Orders/Seller/Customers?vendorId=${customerId}`)
      if (response.status === 200) {
        const customerData = response.data;
        dispatch(setSellCustomer(customerData))
      } else {
        console.log('Failed to fetch dashboard:', response.message);
      }
    } catch (error) {
      console.log('Error fetching dashboard:', error);
    }
  }
}