import axios from './api'; 
import { setEarning } from "../Store/Store"


export const fetchEarningsAPi = (customerId) => {
  return async (dispatch) => {
    try {
      const earningResponse = await axios.get(`/api/Dashboard/Seller/Earnings?sellerId=${customerId}`)
      if (earningResponse.status === 200) {
        const earningData = earningResponse.data
        dispatch(setEarning(earningData))
      }
    } catch (error) {
      console.log("error", error)
     }
  }
}