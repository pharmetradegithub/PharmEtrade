import axios from './api'; 
import { setReturns } from "../Store/Store";



export const fetchReturns = (customerId) => {
  return async (dispach) => {
    try {
      const returnsResponse = await axios.get(`/api/Dashboard/Seller/Returns?sellerId=${customerId}`) 
      if (returnsResponse.status === 200) {
        const returnsData = returnsResponse.data
        dispach(setReturns(returnsData))
      }
    } catch (error) {
      console.log("error", error)
    }
  }
}

