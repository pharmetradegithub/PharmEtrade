import axios from './api'; 
import { setAddAddress, setAddress, setOrderDeliveryAddress } from "../Store/Store";


// export const fetchGetByCustomerId = (customerId) => {
//   return async (dispatch) => {
//     try {
//       const customerID = await axios.get(`/api/Customer/Address/GetByCustomerId?customerId=${customerId}`)
//       console.log("customerAddress--->", customerID)
//       if (customerID.status === 200) {
//         const response = customerID.data,
//           dispatch(setAddress(response)); 
//       } else {
//         console.log("error address")
//       }
//     } catch(error) {
//       console.log("error", error)
//      }
//   }
// }

export const fetchGetByCustomerId = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Customer/Address/GetByCustomerId?customerId=${customerId}`);

      if (response.status === 200) {
        const getCustomerId = response.data.result;
        dispatch(setAddress(getCustomerId)); // Dispatch action
      } else {
        console.error('Failed to get customerId  action:', response.data.message);
      }
    } catch (error) {
      console.error('Error get customerId  action:', error);
    }
  };
};
export const fetchAddAddress = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/Customer/Address/Add', payload);
      if (response.status === 200) {
        const addAddress = response.data.result[0]
        dispatch(setAddAddress(addAddress))
      } else {
        console.error('Failed to add address action:', response.data.message);
      }
    } catch (error) {
      console.log("error", error)
    }
  }
}

export const fetchEditAddress = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/Customer/Address/Edit', payload);
      if (response.status === 200) {
        const addAddress = response.data.result[0]
        dispatch(setEditAddress(addAddress))
      } else {
        console.error('Failed to add address action:', response.data.message);
      }
    } catch (error) {
      console.log("error", error)
    }
  }
}


export const fetchDeleteAddressApi = async (addressID) => {
  try {
    const response = await axios.post(`/api/Customer/Address/Delete?addressId=${addressID}`);
    if (response.status === 200) {
      return response.data.result;
    } else {
      console.error('Failed to fetch Address delete:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching Address delete:', error);

  }
}

export const orderDeliveryAddress = (customerId, orderId, addressId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/Orders/UpdateDeliveryAddress?customerId=${customerId}&orderId=${orderId}&addressId=${addressId}`)
      if (response.status === 200) {
        const addAddress = response.data
        dispatch(setOrderDeliveryAddress(addAddress))
      } else {
        console.error('Failed to add address action:', response.data.message);
      }
    } catch (error) {
      console.log("error", error)
    }
  }
}

export const SetDefaultApi = async (customerId, addressId) => {
  try {
    const response = await axios.post(`/api/Customer/Address/SetDefault?customerId=${customerId}&addressId=${addressId}`)
    if (response.status === 200) {
      const addAddress = response.data.result
      // dispatch(setDefault(addAddress))
      return addAddress
    } else {
      console.error('Failed to add address action:', response.data.message);
    }
  } catch (error) {
    console.log("error", error)
  }
}
