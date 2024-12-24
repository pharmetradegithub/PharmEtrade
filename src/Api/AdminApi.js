
import axios from './api'; 
import store, { setAdmin, setGetChargeInfo } from '../Store/Store';

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

// export const AdminChargesGetApi = async (customerId) => {
//   try {
//     const response = await axios.get(`/api/Admin/charges/GetBySeller?sellerId=${customerId}`)
//     if (response.status === 200) {
//       return response.data.result;
//     } else {
//       console.error('Failed to fetch charges:', response.data.message);
//     }
//   } catch (error) {
//     console.error('Error fetching changes:', error);
//   }
// }
export const AdminChargesGetApi = (customerId) => {
  return async (dispatch) => {
    // dispatch(setLoading(true));
    try {
      const response = await axios.get(`/api/Admin/charges/GetBySeller?sellerId=${customerId}`);
      if (response.status === 200) {
        const data = response.data.result;
        dispatch(setGetChargeInfo(data));
        return data
      } else {
        // dispatch(setError(response.data.message || 'Failed to fetch charges'));
        console.error('Failed to fetch charges:', response.data.message);
      }
    } catch (error) {
      // dispatch(setError(error.message || 'Error fetching charges'));
      console.error('Error fetching charges:', error);
    }
  };
};

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
  
// export const getReportPaymentHistoryExcel = async (fromDate, toDate) => {
//   try {
//     const response = await axios.get(`/api/Reports/GeneratePaymentHistoryExcelReport?fromDate=${fromDate}&toDate=${toDate}`)
//     if (response.status === 200) {
//       return response.data.resultTable
//     }
//   } catch (error) {
//     console.error('Error fetching reports excel:', error);
//   }
// }

export const getReportPaymentHistoryExcel = async (fromDate, toDate) => {
  try {
    const response = await axios.get(`/api/Reports/GeneratePaymentHistoryExcelReport`, {
      params: { fromDate, toDate },
      headers: {
        'Content-Type': 'application/json', // Adjust if needed
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Example if token is required
      },
      responseType: 'blob', // To handle binary data
    });

    const fileBlob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Create a temporary link to trigger the download
    const downloadUrl = window.URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Payments History.xlsx'; // File name for download
    document.body.appendChild(link);
    link.click();

    // Clean up
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Error fetching reports excel:', error);
    return null;
  }
};

export const getReportPurchaseHistoryExcel = async (fromDate, toDate) => {
  try {
    const response = await axios.get(`/api/Reports/GeneratePurchaseHistoryExcelReport`, {
      params: { fromDate, toDate },
      headers: {
        'Content-Type': 'application/json', // Adjust if needed
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Example if token is required
      },
      responseType: 'blob', // To handle binary data
    });

    const fileBlob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Create a temporary link to trigger the download
    const downloadUrl = window.URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Purchase History.xlsx'; // File name for download
    document.body.appendChild(link);
    link.click();

    // Clean up
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Error fetching reports excel:', error);
    return null;
  }
};

export const getReportNewOrderExcel = async (fromDate, toDate) => {
  try {
    const response = await axios.get(`/api/Reports/GenerateNewOrdersExcelReport`, {
      params: { fromDate, toDate },
      headers: {
        'Content-Type': 'application/json', // Adjust if needed
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Example if token is required
      },
      responseType: 'blob', // To handle binary data
    });

    const fileBlob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Create a temporary link to trigger the download
    const downloadUrl = window.URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'New Orders.xlsx'; // File name for download
    document.body.appendChild(link);
    link.click();

    // Clean up
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Error fetching reports excel:', error);
    return null;
  }
};

export const getReportExpiredItemsExcel = async (fromDate, toDate) => {
  try {
    const response = await axios.get(`/api/Reports/GenerateExpiredItemsExcelReport`, {
      params: { fromDate, toDate },
      headers: {
        'Content-Type': 'application/json', // Adjust if needed
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Example if token is required
      },
      responseType: 'blob', // To handle binary data
    });

    const fileBlob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Create a temporary link to trigger the download
    const downloadUrl = window.URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Expired Items.xlsx'; // File name for download
    document.body.appendChild(link);
    link.click();

    // Clean up
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Error fetching reports excel:', error);
    return null;
  }
};


export const getGenerateReportExcel = async (reportType, fromDate, toDate, mappedReportType) => {

  try {
    const response = await axios.get(`/api/Reports/GenerateExcelReport`, {
      params: {reportType, fromDate, toDate },
      headers: {
        'Content-Type': 'application/json', // Adjust if needed
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Example if token is required
      },
      responseType: 'blob', // To handle binary data
    });


    const fileBlob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    
    // Create a temporary link to trigger the download
    const downloadUrl = window.URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${mappedReportType}.xlsx`; // File name for download
    document.body.appendChild(link);
    link.click();

    // Clean up
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Error fetching reports excel:', error);
    return null;
  }
};


