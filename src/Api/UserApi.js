// import axios from 'axios';
// import store from '../Store/Store';

// axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

// export const loginUserApi = async (username, password) => {
//   try {
//     const response = await axios.post(
//       `/api/Customer/Login?UserName=${encodeURIComponent(username)}&Password=${encodeURIComponent(password)}`
//     );

//     if (response.status === 200) {

//       localStorage.setItem('userId', response.data.userId);
//       localStorage.setItem('token', response.data.token);
//       const userDetails = await axios.get(`/api/Customer/GetByCustomerId?customerId=${response.data.userId}`);
//       if (response.status === 200) {
//         store.dispatch({ type: 'user/setUser', payload: userDetails.data.result[0] });
//       } else {
//         console.error('Failed to fetch user data:', response.data.message);
//       }
//       return response.data.userId;
//     } else {
//       console.error('Login failed:', response.data.message);
//     }
//   } catch (error) {
//     console.error('Failed to log in:', error);
//   }
// };
// export const loginAdminUserApi = async (username, password) => {
//   try {
//     const response = await axios.post(
//       `/api/Customer/AdminLogin?adminId=${encodeURIComponent(username)}&Password=${encodeURIComponent(password)}`
//     );

//     if (response.status === 200) {

//       localStorage.setItem('userId', response.data.userId);
//       localStorage.setItem('token', response.data.token);
//       const userDetails = await axios.get(`/api/Customer/GetByCustomerId?customerId=${response.data.userId}`);
//       if (response.status === 200) {
//         store.dispatch({ type: 'user/setUser', payload: userDetails.data.result[0] });
//       } else {
//         console.error('Failed to fetch user data:', response.data.message);
//       }
//       return response.data.userId;
//     } else {
//       console.error('Login failed:', response.data.message);
//     }
//   } catch (error) {
//     console.error('Failed to log in:', error);
//   }
// };
// export const getUserByCustomerIdApi = async (customerId) => {
//   try {
//     const response = await axios.get(`/api/Customer/GetByCustomerId?customerId=${customerId}`);
//     if (response.status === 200) {

//       store.dispatch({ type: 'user/setUser', payload: response.data.result[0] });
//       return response.data.result[0];
//     } else {
//       console.error('Failed to fetch user data:', response.data.message);
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     return null;
//   }
// };
// export const UserMenuItemsApi = async(accountTypeId)=>{
//   try {
   
//     const response = await axios.get(`/api/Menu/GetByAccountType?CustomerTypeId=${accountTypeId}`);
//     if (response.status === 200) {

//       store.dispatch({ type: 'user/setMenuItems', payload: response.data.result });

//     } else {
//       console.error('Failed to fetch user data:', response.data.message);
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     return null;
//   }
// }

// export const logoutUserApi = ()=>{
//   store.dispatch({type:'user/clearUser'});
//   store.dispatch({type:'cart/clearCart'});
//   store.dispatch({type:'wishlist/clearWishList'})
//   localStorage.clear();
// }


import axios from 'axios';
import store, { setAddBeneficiary, setGetBeneficiary } from '../Store/Store';
import { TryOutlined } from '@mui/icons-material';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

export const loginUserApi = async (username, password) => {
  try {
    const response = await axios.post(
      `/api/Customer/Login?UserName=${encodeURIComponent(username)}&Password=${encodeURIComponent(password)}`
    );

    if (response.status === 200) {

      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('token', response.data.token);
      const userDetails = await axios.get(`/api/Customer/GetByCustomerId?customerId=${response.data.userId}`);
      if (response.status === 200) {
        store.dispatch({ type: 'user/setUser', payload: userDetails.data.result[0] });
      } else {
        console.error('Failed to fetch user data:', response.data.message);
      }
      return response.data.userId;
    } else {
      console.error('Login failed:', response.data.message);
    }
  } catch (error) {
    console.error('Failed to log in:', error);
  }
};
export const loginAdminUserApi = async (username, password) => {
  try {
    const response = await axios.post(
      `/api/Customer/AdminLogin?adminId=${encodeURIComponent(username)}&Password=${encodeURIComponent(password)}`
    );

    if (response.status === 200) {

      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('token', response.data.token);
      const userDetails = await axios.get(`/api/Customer/GetByCustomerId?customerId=${response.data.userId}`);
      if (response.status === 200) {
        store.dispatch({ type: 'user/setUser', payload: userDetails.data.result[0] });
      } else {
        console.error('Failed to fetch user data:', response.data.message);
      }
      return response.data.userId;
    } else {
      console.error('Login failed:', response.data.message);
    }
  } catch (error) {
    console.error('Failed to log in:', error);
  }
};
export const getUserByCustomerIdApi = async (customerId) => {
  try {
    const response = await axios.get(`/api/Customer/GetByCustomerId?customerId=${customerId}`);
    const userId = localStorage.getItem('userId');
    if (response.status === 200) {
      if(userId == customerId)
          store.dispatch({ type: 'user/setUser', payload: response.data.result[0] });
      return response.data.result[0];
    } else {
      console.error('Failed to fetch user data:', response.data.message);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export const UserInfoUpdate = async(obj)=>{
  try {
    const response = await axios.post(
      "/api/Customer/Edit",
      obj,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return "Edited";
    } else {
      console.error('Failed to edit :', response.data.message);
    }

  } catch (error) {
    console.log("failed to edit ", error)

  }
}
export const BusinessInfoUpdate = async(obj)=>{
  try {
    const response = await axios.post(
      "/api/Customer/BusinessInfo",
      obj,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    
    );
    console.log(response,obj ,"Response and obj");
    if (response.status === 200) {
      return "Edited";
    } else {
      console.error('Failed to edit :', response.data.message);
    }

  } catch (error) {
    console.log("failed to edit ", error)

  }}

export const UserMenuItemsApi = async(accountTypeId)=>{
  try {
   
    const response = await axios.get(`/api/Menu/GetByAccountType?CustomerTypeId=${accountTypeId}`);
    if (response.status === 200) {

      store.dispatch({ type: 'user/setMenuItems', payload: response.data.result });

    } else {
      console.error('Failed to fetch user data:', response.data.message);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

export const fetchBeneficiaryAdd = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/Customer/BeneficiaryAdd', payload)
      if (response.status === 200) {
        const addData = response.data.result[0]
        dispatch(setAddBeneficiary(addData))
      } else {
        console.error('Failed to fetch beneficiary:', response.data.message);
      }
    } catch (error) {
      console.log("failed to fetch beneficiary", error)
     }
  }
}

export const fetchGetBeneficiary = (customerId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/Customer/Beneficiary/GetByCustomerId?customerId=${customerId}`)
      console.log(response, "----->")
      if (response.status === 200) {
        const addData = response.data.result[0]
        dispatch(setGetBeneficiary(addData))
      } else {
        console.error('Failed to fetch beneficiary:', response.data.message);
      }
    } catch (error) {
      console.log("failed to fetch beneficiary", error)
    }
  }
}


export const ActivateUserAPI =async ( customerId,comments=null)=>
  {
      try {
        let url = `/api/Customer/Activate?customerId=${customerId}`;
        if(comments!=null)
        {
          url = url + `&comments=${comments}`;
        }
        const response = await axios.post(url);
        if (response.status === 200) {
          return "Activated";
        } else {
          console.error('Failed to fetch beneficiary:', response.data.message);
        }
      } catch (error) {
        console.log("failed to fetch beneficiary", error)

      }
  }

export const DeactivateUserAPI =async ( customerId,comments=null)=>
{
    try {
      let url = `/api/Customer/Deactivate?customerId=${customerId}`;
      if(comments!=null)
      {
        url = url + `&comments=${comments}`;
      }
      const response = await axios.post(url);
      if (response.status === 200) {
        return "Deactivated";
      } else {
        console.error('Failed to fetch beneficiary:', response.data.message);
      }
    } catch (error) {
      console.log("failed to fetch beneficiary", error)

    }
}
// export const customerRegister = async (payload) => {
//   try {
//     const response = await axios.post('/api/Customer/Register', payload)
//     // if (responseRegister.status === 200) {
//       //       const registerData = responseRegister.data.result
//       //       dispatch(setUser(registerData))
//       //     } else {
//       //       console.log("error fetch Register data", responseRegister.data.message)
//       //     }
//       //   } catch(error) {
//       //     console.log("error fetch Register data", error)
//       //   }
//       // }
//       if (response.status === 200) {
//         store.dispatch({ type: 'user/setUser', payload: response.data.result });
//       } else {
//         console.error('Failed to fetch user data:', response.data.message);
//         return null;
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       return null;
//     }
//   }

export const logoutUserApi = ()=>{
  store.dispatch({type:'user/clearUser'});
  store.dispatch({type:'cart/clearCart'});
  store.dispatch({type:'wishlist/clearWishList'})
  localStorage.clear();
}








