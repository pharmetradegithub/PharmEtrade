import axios from './api'; 
import { setPaymentReceived } from '../Store/Store'


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