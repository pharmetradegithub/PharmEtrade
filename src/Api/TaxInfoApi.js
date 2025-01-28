
import axios from './api'; 
import { setAddBulkTax, setStateName, setTaxAdd, setTaxEdit } from '../Store/Store';

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

export const TaxGetByStateNameApi = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Tax/GetBySellerAndState?sellerId=${customerId}&stateName=${[]}`)
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

export const TaxGetAll = () => {
  try {
    const response = axios.get('/api/Tax/GetAllTaxInformation')
    if (response.status === 200) {
      return response.data.result
    } else {
      console.log("error fetch edit data", response.data.message)
    }
  } catch (error) {
    console.log(error);
  }
}

export const AddTaxBUlk = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/Tax/AddBulkTaxInformation', payload)
      if (response.status === 200) {
        const data = response.data
        dispatch(setAddBulkTax(data))
        return data
      } else {
        console.log("error fetch edit data", response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }
}