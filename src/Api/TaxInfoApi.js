
import axios from 'axios';
import { setStateName, setTaxAdd, setTaxEdit } from '../Store/Store';
axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

export const taxAddInformationApi = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/Tax/AddTaxInformation', payload)
      if (response === 200) {
        const taxAdd = response.data
        dispatch(setTaxAdd(taxAdd))
      } else {
        console.log("error fetch add tax", response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const TaxGetByStateNameApi = (stateName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Tax/GetByStateName?stateName=${stateName}`)
      if (response.status === 200) {
        const stateName = response.data.result
        dispatch(setStateName(stateName))
      } else {
        console.log("error fetch state name", response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const TaxInfoEdit = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/Tax/UpdateTaxInformation', payload)
      if (response.status === 200) {
        const data = response.data
        dispatch(setTaxEdit(data))
      } else {
        console.log("error fetch edit data", response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }
}