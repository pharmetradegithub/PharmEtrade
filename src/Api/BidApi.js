import axios from "axios"


export const fetchCustomer = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Customer/GetByCustomerId?customerId=${customerId}`)
      console.log("bi-->?", response)
      if (response.data.result === 200) {
        const data = response.data.result
        console.log("bid customer data", data)
        dispatch(setBidCustomerDetails(data))
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const AddBidAPI = async (obj) => {
  try {
    const response = await axios.post(`/api/Bid/Add`, obj);
    if (response.status === 200 && response.data.result !== null) {
      return;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}