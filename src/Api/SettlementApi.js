import axios from './api'; 

export const SettleGetAllApi = async () => {
  // return async (dispatch) => {
    try {
      const response = await axios.get("/api/Settlements/GetAll")
      console.log("settle", response)
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error)
    }
  // }
}