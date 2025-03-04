import axios from './api'; 
import { setFedExRates, setServiceType, setTrackNumber } from '../Store/Store';



export const TrackNumberApi = (numberId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/FedEx/track?trackingNumber=${numberId}`);
      if (response.status === 200) {
        const responseData = response.data.fullResponse[0]
        dispatch(setTrackNumber(responseData))
      } else {
        console.log('Error', response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const serviceTypeApi = (payload, customerId, sellerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/FedEx/ServiceTypes?sellerId=${sellerId}`, payload);
      if (response.status === 200) {
        const responseData = response.data
        dispatch(setServiceType({ sellerId, serviceTypes: responseData }));
      } else {
        console.log('Error', response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const FedExRatesApi = (payload, customerId, sellerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/FedEx/Rates?sellerId=${sellerId}`, payload);
    
      if (response.status === 200) {
        const responseData = response.data.output.rateReplyDetails
        
        dispatch(setFedExRates({ sellerId, rates: responseData }));
      } else {
        console.log('Error', response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
}