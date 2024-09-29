import axios from "axios"
import { setPaymentHistory } from "../Store/Store"

export const fetchPaymentHistory = () => {
  return async (dispatch) => {
    try {
    const response = await axios.get('')
    if (response.data.status === 200) {
      const data = response.data
      dispatch(setPaymentHistory(data))
    } else {
      console.log("error from payment history")
      }
    } catch (error) {
      console.log(error)
    }
  }
}