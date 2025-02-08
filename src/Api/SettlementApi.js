import axios from './api'; 

export const SettleGetAllApi = async () => {
  // return async (dispatch) => {
    try {
      const response = await axios.get("/api/Settlements/GetAll")
      if (response.status === 200) {
        return response.data.result;
      }
    } catch (error) {
      console.log(error)
    }
  // }
}

export const SettleAddApi = async (payload) => {
  // return async (dispatch) => {
    try {
      const response = await axios.post('/api/Settlements/Add', payload)
      if (response.status === 200) {
        return response.data.result;
      }
    } catch (error) {
      console.log(error)
    }
  // }
}

export const SellerSettleGetDetailsApi = async (customerId) => {
  // return async (dispatch) => {
  try {
    const response = await axios.get(`/api/Settlements/GetSellerSettlementDetails?sellerId=${customerId}`)
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error)
  }
  // }
}
