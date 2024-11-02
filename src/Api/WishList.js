import axios from './api'; 
import store from '../Store/Store';



const SET_WISHLIST = 'wishlist/setWishList';
const REMOVE_FROM_WISHLIST = 'wishlist/removeFromWishList';
const ADD_TO_WISHLIST = 'wishlist/addToWishList';


export const fetchWishlistItemsApi = async (customerId) => {
  try {
    const response = await axios.get(`/api/WishList/GetWishListItems?customerId=${customerId}`);
    if (response.status === 200) {
      store.dispatch({ type: SET_WISHLIST, payload: response.data.result });
    } else {
      console.error('Failed to fetch wishlist items:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching wishlist items:', error);
  }
};

export const removeFromWishlistApi = async (wishlistId) => {
  try {
    const response = await axios.post(`/api/WishList/Remove?wishlistId=${wishlistId}`);
    if (response.status === 200) {
      store.dispatch({ type: REMOVE_FROM_WISHLIST, payload: { wishListId: wishlistId } });
    } else {
      console.error('Failed to remove item from wishlist:', response.data.message);
    }
  } catch (error) {
    console.error('Error removing item from wishlist:', error);
  }
};

export const addToWishlistApi = async (wishlistItem) => {
    try {
      const response = await axios.post('/api/WishList/Add', wishlistItem);
      if (response.status === 200) {
        store.dispatch({ type: SET_WISHLIST, payload: response.data.result });
      } else {
        console.error('Failed to add item to wishlist:', response.data.message);
      }
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
    }
  };


