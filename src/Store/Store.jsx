import { configureStore, createSlice } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const homeSlice = createSlice({
  name: "home",
  initialState: { loading: false },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(
        (item) => item.cartId !== action.payload.id
      );
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

const ratingSlice = createSlice({
  name: "rating",
  initialState: { ratings: [] },
  reducers: {
    addRating(state, action) {
      state.ratings.push(action.payload);
    },
    setRatings(state, action) {
      state.ratings = action.payload;
    },
    clearRatings(state) {
      state.ratings = [];
    },
  },
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishlist: [] },
  reducers: {
    addToWishList(state, action) {
      state.wishlist.push(action.payload);
    },
    removeFromWishList(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.wishListId !== action.payload.wishListId
      );
    },
    setWishList(state, action) {
      state.wishlist = action.payload;
    },
    clearWishList(state) {
      state.wishlist = [];
    },
  },
});

// const userSlice = createSlice({
//   name: "user",
//   initialState: { user: null, businessInfo: null, menuItems: null },
//   reducers: {
//     setUser(state, action) {
//       state.user = action.payload.customerDetails;
//       state.businessInfo = action.payload.businessInfo;
//     },
//     setMenuItems(state, action) {
//       state.menuItems = action.payload;
//     },
//     clearUser(state) {
//       state.user = null;
//       state.businessInfo = null;
//     },
//   },
// });

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, businessInfo: null, menuItems: null, addBeneficiary: [], getBeneficiary: []},
  reducers: {
    setUser(state, action) {
      state.user = action.payload.customerDetails;
      state.businessInfo = action.payload.businessInfo;
    },
    setMenuItems(state, action) {
      state.menuItems = action.payload;
    },
    clearUser(state) {
      state.user = null;
      state.businessInfo = null;
    },
    setAddBeneficiary(state, action) {
      state.addBeneficiary = action.payload;
    },
    setGetBeneficiary(state, action) {
      console.log(action.payload, "beneficiary")
      state.getBeneficiary = action.payload;
    },
  },
});

// const orderSlice = createSlice({
//   name: "order",
//   initialState: { orders: [] },
//   reducers: {
//     addOrder(state, action) {
//       state.orders.push(action.payload);
//     },
//     setOrders(state, action) {
//       state.orders = action.payload;
//     },
//     clearOrders(state) {
//       state.orders = [];
//     },
//   },
// });

const initialBidState = {
  bidQuotedProduct : [],
  bidRequestedQuoted: []
  
}

const bidSlice = createSlice({
  name: "bid",
  initialState: initialBidState,
  reducers: {
    SetBidQuotedProduct(state, action) {
      state.bidQuotedProduct = action.payload
    },
    setGetBidsBySeller(state, action) {
      console.log("errrStore", action.payload)
      state.bidRequestedQuoted = action.payload
    }
    
  }
})



const initialOrderState = {
  orders: [],
  OrderBySellerId: [],
  getOrder: [],
  ordersPayment: [],
  orderPlace: [],
  orderInvoice: [],
  orderDownloadInvoice: [],
  orderView: [],
  orderDeliveryAddress: [],
  getById: [],
  updateStatusOrder: []
}

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    addOrder(state, action) {
      state.orders = action.payload;
      console.log("addorder-->", action.payload)
    },
    // clearOrders(state) {
    //   state.orders = [];
    // },
    setGetOrderBySellerId(state, action) {
      state.OrderBySellerId = action.payload;
    },
    setGetOrder(state, action) {
      state.getOrder = action.payload;
    },
    setOrdersPayment(state, action) {
      state.ordersPayment = action.payload
    },
    setOrderPlace(state, action) {
      state.orderPlace = action.payload                                                           
    },
    setOrderInvoice(state, action) {
      state.orderInvoice = action.payload
    },
    setOrderDownloadInvoice(state, action) {
      state.orderDownloadInvoice = action.payload
    },
    setOrderViewInvoice(state, action) {
      state.orderView = action.payload
    },
    setOrderDeliveryAddress(state, action) {
      state.orderDeliveryAddress = action.payload
    },
    setGetById(state, action) {
      state.getById = action.payload
    },
    setOrderStatusUpdate(state, action) {
      state.updateStatusOrder = action.payload
    }
  },                                                                          
});


const initialDashboardState = {
  getSellerId: [],
  getCustomerId: [],
  getTotalProductDashboard: [],
  sellCustomer: [],
  getPaymentHistory: [],
  getCustomerOrder: [],
  getSellerGetAll: []
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers : {
    setSellerDashboardId(state, action) {
      console.log('Action payload:', action.payload); // Check payload here
      state.getSellerId = action.payload;
    },
    setCustomerDashboardId(state, action) {
      console.log('Action payload:', action.payload); // Check payload here
      state.getCustomerId = action.payload;
    },
    setTotalProductDashboard(state, action) {
      console.log('Action total payload:', action.payload); // Check payload here
      state.getTotalProductDashboard = action.payload;
    },
    setCustomerOrder(state, action) {
      console.log('Action total payload:', action.payload); // Check payload here
      state.getCustomerOrder = action.payload;
    },
    setSellCustomer(state, action) {
      state.sellCustomer = action.payload
    },
    setPaymentHistory(state, action) {
      state.getPaymentHistory = action.payload
    },
    setSellerGetAll(state, action) {
      console.log('Action total payload:', action.payload); // Check payload here
      state.getSellerGetAll = action.payload;
    },
  }
})


const initialProductsState = {
  Heading:"",
  Products: [],
  rxProducts: [],
  otcProducts: [],
  recentSoldProducts: [],
  productsBySeller: {},
  productById: {},
  productRelatedProduct: [],
  productSpecialOffer: [],
  getProductSpecialOffer : [],
  productsByCriteria : [],
  RelatedProducts : [],
  UpSellProducts : [],
  CrossSellProducts: [],
  deactiveProduct: [],
  deleteProduct: [],
  activeProduct: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState: initialProductsState,
  reducers: {
    setProducts(state, action) {
      state.Products = action.payload.products;
      state.Heading = action.payload.name;
    },
    setCriteriaProducts(state,action)
    {
      state.productsByCriteria = action.payload.products;
      state.Heading = action.payload.name;
    },
    setRxProducts(state, action) {
      state.rxProducts = action.payload;
    },
    setOtcProducts(state, action) {
      state.otcProducts = action.payload;
    },
    setRecentSoldProducts(state, action) {
      state.recentSoldProducts = action.payload;
    },
    setProductsBySeller(state, action) {
      const { sellerId, products } = action.payload;
      state.productsBySeller[sellerId] = products;
    },
    setProductById(state, action) {
      const { productId, product } = action.payload;
      state.productById[productId] = product;
    },
    addProduct(state, action) {
      state.Products.push(action.payload);
    },
    editProduct(state, action) {
      const { productId, updatedProduct } = action.payload;
      state.Products = state.Products.map((product) =>
        product.id === productId ? updatedProduct : product
      );
    },
    setSpecialOffer(state, action) {
      console.log("reduxspeee-->", action.payload)
      state.productSpecialOffer = action.payload; 
    },
    setGetProductSpecialOffer(state, action) {
      console.log("redux-->", action.payload)
      state.getProductSpecialOffer = action.payload
    },
    setRelatedProduct(state, action){
      state.RelatedProducts = action.payload
    },
    setUpSellProduct(state, action){
      state.UpSellProducts = action.payload
    },
    setCrossSellProduct(state, action){
      state.CrossSellProducts = action.payload
    },
    setDeactiveProduct(state, action) {
      state.deactiveProduct = action.payload
    },
    setDeleteProduct(state, action) {
      state.deleteProduct = action.payload
    },
    setActiveProduct(state, action) {
      state.activeProduct = action.payload
    },
  },
});


const bannerSlice = createSlice({
  name: "banner",
  initialState: { banner: [] },
  reducers: {
    removeBanner(state, action) {
      state.banner = state.banner.filter(
        (item) => item.bannerId !== action.payload.id
      );
    },
    addBanner(state, action) {
      state.banner.push(action.payload);
    },
    editBanner(state, action) {
      const index = state.banner.findIndex((item) => item.bannerId === action.payload.bannerId);
      if (index !== -1) {
        state.banner[index] = action.payload;
      }
    },
    deleteBanner(state, action) {
      state.banner = state.banner.filter((item) => item.bannerId !== action.payload);
    },
    setBanner(state, action) {
      state.banner = action.payload;
    },
    clearBanner(state) {
      state.banner = [];
    },
  },
});
const initialMasterState = {
  productCategoryGetAll: [],
  setCategorySpecificationsGetAll: [],
  orderStatusGetAll: []
}
const mastersSlice = createSlice({
  name: 'master',
  initialState: initialMasterState,
  reducers: {
    setProductCategoryGetAll(state, action) {
      state.productCategoryGetAll = action.payload
    },
    setCategorySpecificationsGetAll(state, action) {
      state.setCategorySpecificationsGetAll = action.payload
    },
    setOrderStatusGetAll(state, action) {
      state.orderStatusGetAll = action.payload
    }
  }
})


const earningSlice = createSlice({
  name: 'earning',
  initialState: { earning: [] },
  reducers: {
    setEarning(state, action) {
      state.earning = action.payload
    }
  }
})

const returnsSlice = createSlice({
  name: 'returns',
  initialState: { returns: [] },
  reducers: {
    setReturns(state, action) {
      state.returns = action.payload
    }
  }
})

const addressSlice = createSlice({
  name: 'address',
  initialState: { address: [], customerId :[] , editAddress: []},
  reducers: {
    setAddAddress(state, action) {
      state.address = action.payload
    },
    setEditAddress(state, action) {
      state.editAddress = action.payload
    },
    setAddress(state, action) {
      state.customerId = action.payload
    }
  }
})

const adminSlice = createSlice({
  name : "admin",
  initialState: { admin: [] },
  reducers: {
    setAdmin(state, action) {
      state.admin = action.payload
    }
  }
})

const shipmentSlice = createSlice({
  name: 'shipment',
  initialState: { EditShipping: [],getShipment: [], addShipping: [] },
  reducers: {
    setGetShiping(state, action) {
      state.getShipment = action.payload
    },
    setEditShipping(state, action) {
      state.EditShipping = action.payload
    },
    setAddShipping(state, action) {
      state.addShipping = action.payload
    }
  }
})

const taxInfoSlice = createSlice({
  name: "tax",
  initialState: { taxAdd: [], stateName: [], edit: [] },
  reducers: {
    setTaxAdd(state, action) {
      state.taxAdd = action.payload
    },
    setStateName(state, action) {
      state.stateName = action.payload
    },
    setTaxEdit(state, action) {
      state.edit = action.payload
    }
  }
})


// const trackNumberSlice = createSlice({
//   name: 'trackNumber',
//   initialState: { trackNumber: [] },
//   reducers: {
//     setTrackNumber(state, action) {
//       state.trackNumber = action.payload
//     }
//   }
// })

const trackNumberSlice = createSlice({
  name: 'trackNumber',
  initialState: { trackNumber: [], serviceType: [], fedExRates: [] },
  reducers: {
    setTrackNumber(state, action) {
      state.trackNumber = action.payload
    },
    setServiceType(state, action) {
      state.serviceType = action.payload
    },
    setFedExRates(state, action) {
      state.fedExRates = action.payload
    }
  }
})


const adminPaymentSlice = createSlice({
  name: 'adminPayment',
  initialState: { paymentReceive: [] },
  reducers: {
    setPaymentReceived(state, action) {
      state.paymentReceive = action.payload
    }
  }
})

export const { setPaymentReceived } = adminPaymentSlice.actions
export const { setOrderStatusGetAll } = mastersSlice.actions
export const { setOrderStatusUpdate } = orderSlice.actions
export const { setGetById } = orderSlice.actions
export const { setTrackNumber } = trackNumberSlice.actions
export const { setFedExRates } = trackNumberSlice.actions
export const { setServiceType } = trackNumberSlice.actions

export const { setTaxEdit } = taxInfoSlice.actions
export const { setStateName } = taxInfoSlice.actions
export const { setTaxAdd } = taxInfoSlice.actions

export const { setAddShipping } = shipmentSlice.actions
export const { setEditShipping } = shipmentSlice.actions
export const {setGetShiping} = shipmentSlice.actions

export const { setSpecialOffer } = productsSlice.actions;
export const { setGetProductSpecialOffer } = productsSlice.actions

export const { setGetOrderBySellerId } = orderSlice.actions
export const { setGetOrder } = orderSlice.actions
export const { addOrder } = orderSlice.actions
export const { setSellerDashboardId } = dashboardSlice.actions
export const { setCustomerDashboardId } = dashboardSlice.actions
export const { setDeactiveProduct } = productsSlice.actions
export const { setActiveProduct } = productsSlice.actions
export const { setDeleteProduct } = productsSlice.actions
export const { setProductCategoryGetAll } = mastersSlice.actions
export const { setCategorySpecificationsGetAll } = mastersSlice.actions
export const { setOrderPlace } = orderSlice.actions
export const { setOrdersPayment } = orderSlice.actions
export const { setTotalProductDashboard } = dashboardSlice.actions
export const { setSellCustomer } = dashboardSlice.actions
export const { setPaymentHistory } = dashboardSlice.actions
export const { setCustomerOrder } = dashboardSlice.actions
export const { setOrderInvoice } = orderSlice.actions
export const { setSellerGetAll } = dashboardSlice.actions
export const { setOrderDownloadInvoice } = orderSlice.actions
export const { setOrderViewInvoice } = orderSlice.actions
export const { setEarning } = earningSlice.actions
export const { setReturns } = returnsSlice.actions
export const { setAddress } = addressSlice.actions
export const { setAddAddress } = addressSlice.actions
export const { setAdmin } = adminSlice.actions
export const { setAddBeneficiary } = userSlice.actions
export const { setGetBeneficiary } = userSlice.actions
export const { setGetBidsBySeller } = bidSlice.actions
export const { deleteBanner, addBanner, editBanner, setBanner, clearBanner } = bannerSlice.actions;
export const {setOrderDeliveryAddress} = orderSlice.actions
export const { addRating, setRatings, clearRatings } = ratingSlice.actions;


const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    user: userSlice.reducer,
    order: orderSlice.reducer,
    product: productsSlice.reducer,
    banner: bannerSlice.reducer,
    dashboard: dashboardSlice.reducer,
    master: mastersSlice.reducer,
    earning: earningSlice.reducer,
    returns: returnsSlice.reducer,
    address: addressSlice.reducer,
    admin: adminSlice.reducer,
    bid:bidSlice.reducer,
    shipment: shipmentSlice.reducer,
    tax: taxInfoSlice.reducer,
    trackNumber: trackNumberSlice.reducer,
    adminPayment: adminPaymentSlice.reducer,
    rating:ratingSlice.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
