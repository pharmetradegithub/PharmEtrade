// import axios from "axios"
// import store from "../Store/Store";

// axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

// export const customerOrderApi = async(payLoad) => {
//   try {
//     const response = await axios.post('/api/Orders/Add', payLoad)
//     if (response.status === 200) {
//       store.dispatch({ type: 'customer/AddOrderList', payload: payLoad });
//     } else {
//       console.error('Failed from order:', response.data.message);
//     }
//   } catch (error) {
//     console.error('Error from order:', error);
//   }
// }

// export const customerOrderGetApi = async (userId) => {
//   try {
//     const response = await axios.get(`/api/Orders/Get?customerId=${userId}`)
//     if (response.status === 200) {
//       return response.data.result[0];
//     } else {
//       console.error('Failed to fetch product by ID:', response.data.message);
//     }
//   } catch (error) {
//     console.error('Error fetching product by ID:', error);
//   }
// }



// import axios from "axios";
// import store from "../Store/Store";

// axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

// export const orderApi = async (payLoad) => {
//   try {
//     const response = await axios.post('/api/Orders/Add', payLoad);
//     if (response.status === 200) {
//       store.dispatch({ type: 'order/addOrder', payload: payLoad });
//     } else {
//       console.error('Failed to place order:', response.data.message);
//     }
//   } catch (error) {
//     console.error('Error placing order:', error);
//   }
// };

// export const orderGetApi = async (userId) => {
//   try {
//     const response = await axios.get(`/api/Orders/Get?customerId=${userId}`);
//     if (response.status === 200) {
//       return response.data.result[0];
//     } else {
//       console.error('Failed to fetch order by ID:', response.data.message);
//     }
//   } catch (error) {
//     console.error('Error fetching order by ID:', error);
//   }
// };


import axios from "axios";
import store, { addOrder, setGetOrder, setGetOrderBySellerId } from "../Store/Store";

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';


export const fetchOrderApi = (payLoad) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/Orders/Add', payLoad);
      if (response.status === 200) {
        const order = response.data.result;
        console.log('Dispatching addOrder action:', order);

        // Dispatching the action to add the order to the state
        dispatch(addOrder(order));
      } else {
        console.error('Failed to order:', response.data.message);
      }
    } catch (error) {
      console.error('Error ordering:', error);
    }
  };
};



// export const orderGetApi = async (userId) => {
//   try {
//     const response = await axios.get(`/api/Orders/Get?customerId=${userId}`);
//     if (response.status === 200) {
//       return response.data.result[0];
//     } else {
//       console.error('Failed to fetch order by ID:', response.data.message);
//     }
//   } catch (error) {
//     console.error('Error fetching order by ID:', error);
//   }
// };


export const fetchGetOrderBySellerId = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Orders/GetOrdersBySellerId?vendorId=${customerId}`);
      if (response.status === 200) {
        const OrderBySellerId = response.data.result;
        console.log('Dispatching setSpecialOffer action:', OrderBySellerId); // Log before dispatch
        dispatch(setGetOrderBySellerId(OrderBySellerId)); // Dispatch action
      } else {
        console.error('Failed to fetch order:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };
};

export const fetchGetOrder = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Orders/Get?customerId=${customerId}`);
      if (response.status === 200) {
        const getOrder = response.data.result;
        console.log('Dispatching setSpecialOffer action:', getOrder); // Log before dispatch
        dispatch(setGetOrder(getOrder)); // Dispatch action
      } else {
        console.error('Failed to fetch order:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };
};