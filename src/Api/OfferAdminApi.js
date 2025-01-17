import { setOfferAdd, setOfferEdit, setOfferGetAll } from '../Store/Store';
import axios from './api'; 

export const offerGetAll = () => {
  return async (dispatch) => {
    try {
      const getall = await axios.get('/api/Offers/Admin/GetAll')
      if (getall.status === 200) {
        const response = getall.data.result
        dispatch(setOfferGetAll(response))
      } else {
        console.log('Error')
      }
    } catch (error) {
      console.error(error);
    }
  }
}


export const AddOfferApi = (payload) => {
  return async (dispatch) => {
    try {
      const AddOffer = await axios.post('/api/Offers/Add', payload)
      if (AddOffer.status === 200) {
        const response = AddOffer.data.result
        dispatch(setOfferAdd(response))
      } else {
        console.log('Error')
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const EditOfferApi = (payload) => {
  return async (dispatch) => {
    try {
      const EditOffer = await axios.post('/api/Offers/Edit', payload)
      if (EditOffer.status === 200) {
        const response = EditOffer.data.result
        dispatch(setOfferEdit(response))
      } else {
        console.log('Error')
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const deleteOfferAPi = async (pharmEtradeChargesId) => {
  try {
    const response = await axios.post(`/api/Offers/Delete?offersImageId=${pharmEtradeChargesId}`)
    if (response.status === 200) {
      return response.data.result;
    }
  } catch (error) {
    console.error('Error fetching changes:', error);
  }
}