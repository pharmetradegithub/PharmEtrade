import axios from 'axios';
import { setTrackNumber } from '../Store/Store';
axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

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