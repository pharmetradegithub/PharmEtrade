import axios from './api'; 
import { setFedExRates, setServiceType, setTrackNumber } from '../Store/Store';



export const TrackNumberApi = (numberId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/FedEx/track?trackingNumber=${numberId}`);
      console.log("responseTrack", response)
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

export const serviceTypeApi = (payload, customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/FedEx/ServiceTypes?sellerId=${customerId}`, payload);
      if (response.status === 200) {
        const responseData = response.data
        dispatch(setServiceType(responseData))
      } else {
        console.log('Error', response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const FedExRatesApi = (payload, customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/FedEx/Rates?sellerId=${customerId}`, payload);
      console.log("fedexApi--> ", response)
      if (response.status === 200) {
        const responseData = response.data.output.rateReplyDetails
        console.log("response--2000", responseData)
        dispatch(setFedExRates(responseData))
      } else {
        console.log('Error', response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
}