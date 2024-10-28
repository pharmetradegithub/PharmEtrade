import axios from 'axios'
import { setPaymentReceived } from '../Store/Store'

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/'

export const PaymentReceivedApi = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/Orders/GetAllPayments')
      if (response.status === 200) {
        const payments = response.data.result
        // dispatch({ type: 'PAYMENT_RECEIVED', payload: payments })
        dispatch(setPaymentReceived(payments))
      } else {
        console.log('Error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}