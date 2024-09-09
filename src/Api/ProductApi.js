import axios from 'axios';
import store from '../Store/Store';

axios.defaults.baseURL = 'http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/';

const SET_PRODUCTS = 'product/setProducts';
const SET_PRODUCT_BY_ID = 'product/setProductById';
const SET_EX_PRODUCTS = 'product/setRxProducts';
const SET_OTC_PRODUCTS = 'product/setOtcProducts';
const SET_PRODUCTS_BY_SELLER = 'product/setProductsBySeller';
const SET_RECENT_SOLD_PRODUCTS = 'product/setRecentSoldProducts';

export const fetchAllProductsApi = async () => {
    try {
      const response = await axios.get('/api/Product/GetAll');
      if (response.status === 200) {
        const cartItems = store.getState().cart.cart;
        const cartItemsMap = new Map(cartItems.map(item=>[item.product.productID,item.quantity]));
        const products = response.data.result.map(product=>({
          ...product,
          CartQuantity:cartItemsMap.get(product.productID)||0
        }))
        store.dispatch({ type: SET_PRODUCTS, payload: {products:products, name: "ALL PRODUCTS"} });
      } else {
        console.error('Failed to fetch all products:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  };
  export const fetchCriteriaProductsApi = async (data,name) => {
    try {
      const response = await axios.post(
        "/api/Product/GetByCriteria",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );      
      if (response.status === 200) {
        const cartItems = store.getState().cart.cart;
        const cartItemsMap = new Map(cartItems.map(item=>[item.product.productID,item.quantity]));
        const products = response.data.result.map(product=>({
          ...product,
          CartQuantity:cartItemsMap.get(product.productID)||0
        }))
        store.dispatch({ type: SET_PRODUCTS, payload: {products:products,name:name } });
      } else {
        console.error('Failed to fetch all products:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  };
  
  export const fetchProductByIdApi = async (productId) => {
    try {
      const response = await axios.get(`/api/Product/GetById?productId=${productId}`);
      if (response.status === 200) {
        return response.data.result[0];
      } else {
        console.error('Failed to fetch product by ID:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching product by ID:', error);
    }
  };
  
  export const fetchRxProductsApi = async () => {
    try {
      const response = await axios.get('/api/Product/GetRxProducts');
      if (response.status === 200) {
        store.dispatch({ type: SET_EX_PRODUCTS, payload: response.data.result });
      } else {
        console.error('Failed to fetch RX products:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching RX products:', error);
    }
  };
  
  export const fetchOtcProductsApi = async () => {
    try {
      const response = await axios.get('/api/Product/GetOTCProducts');
      if (response.status === 200) {
        store.dispatch({ type: SET_OTC_PRODUCTS, payload: response.data.result });
      } else {
        console.error('Failed to fetch OTC products:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching OTC products:', error);
    }
  };
  
  export const fetchProductsBySellerApi = async (sellerId) => {
    try {
      const response = await axios.get(`/api/Product/GeBySeller?sellerId=${sellerId}`);
      if (response.status === 200) {
        store.dispatch({ type: SET_PRODUCTS_BY_SELLER, payload: { sellerId, products: response.data.result } });
      } else {
        console.error('Failed to fetch products by seller:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching products by seller:', error);
    }
  };
  
  export const fetchRecentSoldProductsApi = async (numberOfProducts) => {
    try {
      const response = await axios.get(`/api/Product/GetRecentSoldProducts?numberOfProducts=${numberOfProducts}`);
      if (response.status === 200) {
        store.dispatch({ type: SET_RECENT_SOLD_PRODUCTS, payload: response.data.result });
      } else {
        console.error('Failed to fetch recent sold products:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching recent sold products:', error);
    }
  };

  export const uploadImageApi = async (sellerId,productId, file) => {
    try {
      const imgData = new FormData();
      imgData.append('image', file);
      console.log(sellerId,productId);
      const response = await axios.post(`/api/Product/Image/Upload?sellerId=${sellerId}&productId=${productId}`, imgData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200) {
        return response.data.imageUrl;
      } else {
        console.error('Failed to upload image:', response.data.message);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  export const AddProductApi = async (FormData, user) => {
    try {
      const response = await axios.post(
        "/api/Product/Add",
        FormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        return "Added";
      } else {
        console.error("Failed to submit product:", response.data.message);
      }

    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
      throw error;
    }
  };
  export const AddProductInfoApi = async (FormData, user) => {
    try {
      const response = await axios.post(
        "/api/Product/ProductInfo/Add",
        FormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        return response.data.result[0].productID;
      } else {
        console.error("Failed to submit product:", response.data.message);
      }

    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
      throw error;
    }
  };
  export const AddProductGallery = async (FormData, user) => {
    try {
      const response = await axios.post(
        "/api/Product/Gallery/Add",
        FormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        return "Added";
      } else {
        console.error("Failed to submit product:", response.data.message);
      }

    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
      throw error;
    }
  };
  export const AddProductPriceApi = async (FormData, user) => {
    try {
      const response = await axios.post(
        "/api/Product/Price/Add",
        FormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        return "Added";
      } else {
        console.error("Failed to submit product:", response.data.message);
      }

    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
      throw error;
    }
  };
  export const AddProductSizeApi = async (FormData) => {
    try {
      const response = await axios.post(
        "/api/Product/Size/Add",
        FormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        return response.data.result[0].productSizeId;
      } else {
        console.error("Failed to submit product:", response.data.message);
      }

    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
      throw error;
    }
  };


  export const EditProductInfoApi = async (FormData, user) => {
    try {
      const response = await axios.post(
        "/api/Product/ProductInfo/Edit",
        FormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        return response.data.result[0].productID;
      } else {
        console.error("Failed to submit product:", response.data.message);
      }

    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
      throw error;
    }
  };
  export const EditProductGallery = async (FormData, user) => {
    try {
      const response = await axios.post(
        "/api/Product/Gallery/Edit",
        FormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        return "Added";
      } else {
        console.error("Failed to submit product:", response.data.message);
      }

    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
      throw error;
    }
  };
  export const EditProductPriceApi = async (FormData, user) => {
    try {
      const response = await axios.post(
        "/api/Product/Price/Edit",
        FormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        return "Added";
      } else {
        console.error("Failed to submit product:", response.data.message);
      }

    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
      throw error;
    }
  };