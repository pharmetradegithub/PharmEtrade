import store from "../Store/Store";

export const LoadingApi = (value)=>{
    store.dispatch({type:'home/setLoading',payload : value});
}
export const TopMarginApi = (value)=>{
  store.dispatch({type:'home/setTopMargin',payload:value});
}
