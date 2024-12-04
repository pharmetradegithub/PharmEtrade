
import axios from './api'; 
import store, { setAdmin } from '../Store/Store';

const SET_ADMIN_PRODUCTS = 'product/setAdminProducts';



export const GetCustomers = async (customerId = null, email = null, mobile = null) => {
  try {
    const response = await axios.get(`/api/Customer/GetCustomers`);
    if (response.status === 200) {
      return response.data.result;
    } else {
      console.error('Failed to fetch banners:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching banners:', error);
  }
};

export const GetByAdminCriteriaAPI = async (obj) => {
  try {
    const response = await axios.post('/api/Customer/GetByCriteria', obj);
    if (response.status === 200) {
      return response.data.result;
    }
  } catch (error) {
    console.error('Error fetching banners:', error);

  }
}

export const fetchAdminLogin = (userId) => {
  return async (dispatch) => {
    try {
      const responseLogin = await axios.get(`/api/Dashboard/GetAdminDashboard?adminId=${userId}`)
      if (responseLogin.status === 200) {
        const response = responseLogin.data;
        dispatch(setAdmin(response))
      } else {
        console.error('Failed to fetch login:', responseLogin.data.message);
      }
    } catch (error) {
      console.error('Error fetching login:', error);
    }
  }
}

export const AdminChargesInformationAdd = async (payload) => {
  try {
    const response = await axios.post('/api/Admin/charges/Add', payload)
    console.log("changing-->", response)
    if (response.status === 200) {
      return response.data.result;
    } else {
      console.error('Failed to fetch login:', response.data.message);
    }
  } catch (error) {
    console.log('error', error)
  }
}

export const AdminChargesGetApi = async (customerId) => {
  try {
    const response = await axios.get(`/api/Admin/charges/GetBySeller?sellerId=${customerId}`)
    if (response.status === 200) {
      return response.data.result;
    } else {
      console.error('Failed to fetch charges:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching changes:', error);
  }
}

// export const fetchAdminProductsApis = async () => {
//   try {
//     const response = await axios.get('/api/Product/Admin/GetAll');
//     console.log("dmingetll", response)
//     if (response.status === 200) {
//       store.dispatch({ type: SET_ADMIN_PRODUCTS, payload: response.data.result });
//     } else {
//       console.error('Failed to fetch admin products:', response.data.message);
//     }
//   } catch (error) {
//     console.error('Error fetching admin products:', error);
//   }
// };


export const fetchAdminProductsApis = async () => {
    try {
      const response = await axios.get('/api/Product/Admin/GetAll');
      console.log("dmingetll", response)
      if (response.status === 200) {
        return response.data.result
      } else {
        console.error('Failed to fetch admin products:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching admin products:', error);
    }
  };

  export const editChargesApi = async (payload) => {
    try {
      const response = await axios.post('/api/Admin/charges/Edit', payload)
      if (response.status === 200) {
        return response.data.result;
      }
      }catch (error) {
      console.error('Error fetching changes:', error);
    }
  }
  
  export const deleteChargesAPi = async (pharmEtradeChargesId) => {
    try {
      const response = await axios.post(`/api/Admin/charges/Delete?pharmEtradeChargesId=${pharmEtradeChargesId}`)
      if (response.status === 200) {
        return response.data.result;
      }
    } catch (error) { 
      console.error('Error fetching changes:', error);
    }
  }

  export const getReportsApi = async (reportType, fromDate, toDate) => {
    try {
      const response = await axios.get(`/api/Reports/Generate?reportType=${encodeURIComponent(reportType)}&fromDate=${encodeURIComponent(fromDate)}&toDate=${encodeURIComponent(toDate)}`) 
      if (response.status === 200) {
        return response.data.resultTable
      }
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  }