import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Landing from "./Components/HomePage/LandingPage/Landing";
// import Login from "./Components/Login";
import Nav from "./Components/HomePage/Layout/Nav";
import { NavbarProvider } from "./Components/NavbarContext";
import Product from "./Components/Product";
import Products from "./Components/Products";
import Items from "./Components/Items";
import Signup from "./Components/Signup";
import OTP2 from "./Components/OTP2";
import Password from "./Components/Password";
import Changepassword from "./Components/Changepassword";
import Signin from "./Components/Signin";
import Checkout from "./Components/Checkout";
import Order from "./Components/Order";
import Wishlist from "./Components/Wishlist";
import ScrollToTop from "./Components/ScrollToTop";
import SellerNav from "./Components/Seller/Layout/SellerNav";
import SellerPanel from "./Components/Seller/Layout/SellerPanel";
import Sidebar from "./Components/Seller/Layout/SideBar";
import Settings from "./Components/Seller/Settings/Settings";
import Payouts from "./Components/Seller/Payouts/Payouts";
import AccountPanel from "./Components/UserAccount/Layout/AccountPanel";
import MyAccount from "./Components/UserAccount/MyAccount/MyAccount";
import MyOrders from "./Components/UserAccount/MyOrders/MyOrders";
import OrderHistory from "./Components/OrderHistory";
import UpsShipping from "./Components/Seller/Settings/UpsShipping";
import FedexShipping from "./Components/Seller/Settings/FedexShipping";
import ShippingSetting from "./Components/Seller/Settings/ShippingSetting";
import ManageShipping from "./Components/Seller/Settings/ManageShipping";
import AddProducts from "./Components/Seller/Dashboard/AddProducts";
import Orders from "./Components/Seller/Dashboard/Orders";
import Dashboard from "./Components/Seller/Dashboard/Dashboard";
import Customers from "./Components/Seller/Dashboard/Customers";
import Earnings from "./Components/Seller/Earnings/Earnings";
import Review from "./Components/Seller/Review/Review";
import Return from "./Components/Seller/Returns/Return";
import AssignProduct from "./Components/Seller/AssignProducts/AssignProduct";
import AssignProductList from "./Components/Seller/AssignProductList/AssignProductList";
import RequestQuote from "./Components/Seller/RequestQuote/RequestQuote";
import QuotedProducts from "./Components/Seller/RequestQuote/QuotedProducts";
import ProductFields from "./Components/Seller/Components/ProductFields";
import HomeLayout from "./Components/HomePage/Layout/HomeLayout";
import DownloadProduct from "./Components/UserAccount/DownloadProduct/DownloadProduct";
import Addressbook from "./Components/UserAccount/AddressBook/Addressbook";
import AccountInfo from "./Components/UserAccount/AccountInfo/AccountInfo";
import StoredPayment from "./Components/UserAccount/StoredPayment/StoredPayment";
import ProductReview from "./Components/UserAccount/ProductReview/ProductReview";
import Newsletter from "./Components/UserAccount/Newsletter/Newsletter";
import DeleteAccount from "./Components/UserAccount/DeleteAccount/DeleteAccount";
import SavedLater from "./Components/UserAccount/SavedForLater/SavedLater";
import MyReturn from "./Components/UserAccount/MyReturn/MyReturn";
import MyWishlist from "./Components/UserAccount/MyWishlist/MyWishlist";
import MyRequestedQuote from "./Components/UserAccount/MyRequestedQuote/MyRequestedQuote";
import Bid from "./Components/Bid";
import Buy from "./Components/Buy";
import WhyPharma from "./Components/HomePage/NavLinks/WhyPharma";
import AboutUs from "./Components/HomePage/NavLinks/AboutUs";
import Contactus from "./Components/HomePage/NavLinks/Contactus";
import TermsAndConditions from "./Components/TermsAndConditions";
import AddXlSheet from "./Components/Seller/Dashboard/Products/AddXlSheet";
import RequestDemo from "./Components/HomePage/NavLinks/RequestDemo";
import Offers from "./Components/Offers";
import AdminPanel from "./Components/Admin/Layouts/AdminPanel";
import AdminDasboard from "./Components/Admin/Dashboard/AdminDasboard";
import Faqs from "./Components/Faqs";
import LayoutPanel from "./Components/LayoutPage/LayoutStatic/LayoutPanel";
import LayoutDashboard from "./Components/LayoutPage/LayoutDashboard/LayoutDashboard";
import LayoutBuy from "./Components/LayoutPage/LayoutBuy/LayoutBuyProducts";
import LayoutBid from "./Components/LayoutPage/LayoutBid/LayoutBid";
import LayoutJoin from "./Components/LayoutPage/LayoutJoin/LayoutJoin";
import LayoutSell from "./Components/LayoutPage/LayoutSell/LayoutSell";
import LayoutWishlist from "./Components/LayoutPage/LayoutBuy/LayoutWishlist";
import LayoutOrderlist from "./Components/LayoutPage/LayoutBuy/LayoutOrderlist";
// import LayoutReturn from "./Components/LayoutPage/LayoutBuy/LayoutReturn";
import LayoutSidebar from "./Components/LayoutPage/LayoutStatic/LayoutSidebar";
import LayoutaddProduct from "./Components/LayoutPage/LayoutSell/LayoutaddProduct";
import LayoutSellOrders from "./Components/LayoutPage/LayoutSell/LayoutSellOrders";
import LayoutCustomers from "./Components/LayoutPage/LayoutSell/LayoutCustomers";
import EditFields from "./Components/Seller/Components/EditFields";
import LayoutPayouts from "./Components/LayoutPage/LayoutSell/LayoutPaymentHistory";
import LayoutEarnings from "./Components/LayoutPage/LayoutSell/LayoutEarnings";
import LayoutReview from "./Components/LayoutPage/LayoutSell/LayoutShippingDetails";
import LayoutAssignProduct from "./Components/LayoutPage/LayoutSell/LayoutRequestForQuote";
import LayoutAssignProductList from "./Components/LayoutPage/LayoutSell/LayoutSalesHistory";
import LayoutAddBulkProduct from "./Components/LayoutPage/LayoutSell/LayoutAddBulkProduct";
import LayoutPostingProducts from "./Components/LayoutPage/LayoutSell/LayoutProducts/LayoutPostingProducts";
import LayoutSalesHistory from "./Components/LayoutPage/LayoutSell/LayoutSalesHistory";
import LayoutPaymentHistory from "./Components/LayoutPage/LayoutSell/LayoutRequestForQuote";
import LayoutShippingDetails from "./Components/LayoutPage/LayoutSell/LayoutShippingDetails";
import LayoutRequestForQuote from "./Components/LayoutPage/LayoutSell/LayoutRequestForQuote";
import LayoutSellReturn from "./Components/LayoutPage/LayoutSell/LayoutSellReturn";
import LayoutEditProduct from "./Components/LayoutPage/LayoutSell/LayoutProducts/LayouEditProduct";
import LayoutUpsShipping from "./Components/LayoutPage/LayoutSell/LayoutUpsShipping";
import LayoutFedexshipping from "./Components/LayoutPage/LayoutSell/LayoutFedexshipping";
import LayoutAllQuotesProducts from "./Components/LayoutPage/LayoutSell/LayoutAllQuotesProducts";
import LayoutAllrequestedQuote from "./Components/LayoutPage/LayoutSell/LayoutAllrequestedQuote";
import LayoutSetting from "./Components/LayoutPage/LayoutSetting/LayoutSetting";

function App() {
  const [count, setCount] = useState(0);
  const location1 = useLocation();
  useEffect(() => {
    // console.log("Scrolling at top");
    window.scrollTo(0, 0);
  }, [location1.pathname]);
  console.log(window.location.href.includes("/products"));
  const [topMargin, setTopMargin] = useState(0);
  const [wishItems, setWishItems] = useState([]);
  // Ref for the top fixed div
  const topDivRef = useRef(null);
  useEffect(() => {
    if (topDivRef.current) {
      setTopMargin(topDivRef.current.offsetHeight);
    }
  }, []);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems])
  
  function addCart(prolist) {
    setCartItems([...cartItems, prolist]);
  }
  console.log(cartItems);

  function wishList(prolist) {
    setWishItems([...wishItems, prolist]);
  }
  console.log(wishItems);
  const location = useLocation();

  const excludePatterns = /\/(seller|admin|user|login|signup|password|changepassword)/;

  return (
    <NavbarProvider>
      {/* {!excludePatterns.test(location.pathname) && (
        <Nav topDivRef={topDivRef} cartItems={cartItems} />
      )} */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/otp2" element={<OTP2 />} />
        <Route path="/password" element={<Password />} />
        <Route path="/changepassword" element={<Changepassword />} />

        <Route
          element={<HomeLayout topDivRef={topDivRef} cartItems={cartItems} />}
        >
          <Route
            path="/cart"
            element={
              <Cart
                topMargin={topMargin}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                addCart={addCart}
                wishList={wishList}
                topMargin={topMargin}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout topMargin={topMargin} />}
          />
          <Route path="/order" element={<Order topMargin={topMargin} />} />
          <Route path="/pops" element={<Product />} />
          <Route
            path="/app"
            element={
              <Landing
                addCart={addCart}
                wishList={wishList}
                topMargin={topMargin}
              />
            }
          />
          <Route
            path="/"
            element={
              <Landing
                addCart={addCart}
                wishList={wishList}
                topMargin={topMargin}
              />
            }
          />
          <Route
            path="/detailspage/:id"
            element={<Items addCart={addCart} topMargin={topMargin} />}
          />
          <Route
            path="/orderhistory"
            element={<OrderHistory topMargin={topMargin} />}
          />
          <Route path="/bid" element={<Bid topMargin={topMargin} />} />
          <Route path="/buy" element={<Buy topMargin={topMargin} />} />
          <Route
            path="/whypharmetrade"
            element={<WhyPharma topMargin={topMargin} />}
          />
          <Route path="/aboutus" element={<AboutUs topMargin={topMargin} />} />{" "}
          <Route
            path="/contactus"
            element={<Contactus topMargin={topMargin} />}
          />
           <Route
            path="/requestdemo"
            element={<RequestDemo topMargin={topMargin} />}
          />
          
          <Route path="/offers" element={<Offers topMargin={topMargin} addCart={addCart} wishList={wishList} />} />
          <Route
            path="/faqs"
            element={<Faqs topMargin={topMargin} />}
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                topMargin={topMargin}
                wishItems={wishItems}
                setWishItems={setWishItems}
              />
            }
          />
        </Route>

        <Route path="/seller" element={<SellerPanel />}>
          <Route path="" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="market-product-list" element={<AddProducts />} />
          <Route path="add-single-product" element={<ProductFields />} />
          <Route path="edit-single-product/:addproductID" element={<EditFields />} />
          <Route path="add-xl-sheet" element={<AddXlSheet />} />
          <Route path="customers" element={<Customers />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="review" element={<Review />} />
          <Route path="returns" element={<Return />} />
          <Route path="assign-products" element={<AssignProduct />} />
          <Route path="assign-product-list" element={<AssignProductList />} />
          <Route path="request-quote" element={<RequestQuote />} />
          <Route path="quoted-product" element={<QuotedProducts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="ups-shipping" element={<UpsShipping />} />
          <Route path="fedex-shipping" element={<FedexShipping />} />
          <Route path="shipping-settings" element={<ShippingSetting />} />
          <Route path="manage-shipping" element={<ManageShipping />} />
        </Route>

        

        <Route path='/layout' element={<LayoutPanel cartItems={cartItems}/>}>
          <Route path='/layout' element={<LayoutDashboard addCart={addCart} wishList={wishList} />} />
          <Route path='/layoutsell' element={<LayoutSell />} />
          <Route path='/layout/addproduct' element={<LayoutaddProduct />} />
          <Route path='/layout/addbulkproduct' element={<LayoutAddBulkProduct />} />
          <Route path='/layout/postingproducts' element={<LayoutPostingProducts/>}/>
          <Route path="/layout/layout-edit-single-product/:addproductID" element={<LayoutEditProduct />} />
          <Route path='/layout/sellorders' element={<LayoutSellOrders />} />
          <Route path='/layout/sellcustomers' element={<LayoutCustomers />} />
          <Route path='/layout/ups-shipping' element={<LayoutUpsShipping/>} />
          <Route path='/layout/fedex-shipping' element={<LayoutFedexshipping />} />
          <Route path='/layout/requestedquote' element={<LayoutAllrequestedQuote/>} />
          <Route path='/layout/quotedproducts' element={<LayoutAllQuotesProducts />} />
          <Route path='/layout/sellpaymenthistory' element={<LayoutPaymentHistory/>} />
          <Route path='/layout/sellearnings' element={<LayoutEarnings />} />
          <Route path='/layout/sellreview' element={<LayoutShippingDetails/>} />
          <Route path='/layout/sellreturn' element={<LayoutSellReturn />} />
          <Route path='/layout/sellassignproducts' element={<LayoutRequestForQuote/>} />
          <Route path='/layout/saleshistory' element={<LayoutSalesHistory />} />
          <Route path='/layout/layoutsetting' element={<LayoutSetting />} />
          <Route path='/layout/layoutbuy' element={<LayoutBuy />} />
          <Route path='/layout/layoutjoin' element={<Signup />} />
          <Route path='/layout/layoutbid' element={<LayoutBid />} />
          <Route path='/layout/layoutwishlist' element={<LayoutWishlist 
                wishItems={wishItems}
                setWishItems={setWishItems} />} />
          <Route path='/layout/layoutorderlist' element={<LayoutOrderlist/>} />
          {/* <Route path='/layout/layoutreturn' element={<LayoutReturn />} /> */}
          <Route path="/layoutsidebar" element={<LayoutSidebar/>}/>
        </Route>

        <Route path="/admin" element={<AdminPanel />}>
          <Route path="" element={<AdminDasboard />} />
          
        </Route>

        <Route element={<AccountPanel topMargin={topMargin} />}>
          <Route path="/user" element={<MyAccount />} />
          <Route path="/user/orders" element={<MyOrders />} />
          <Route path="/user/downloads" element={<DownloadProduct />} />
          <Route path="/user/address-book" element={<Addressbook />} />
          <Route path="/user/account-info" element={<AccountInfo />} />
          <Route path="/user/payment-methods" element={<StoredPayment />} />
          <Route path="/user/reviews" element={<ProductReview />} />
          <Route path="/user/newsletter" element={<Newsletter />} />
          {/* <Route path="/user/delete-account" element={<DeleteAccount/>} /> */}
          <Route path="/user/saved" element={<SavedLater />} />
          <Route path="/user/returns" element={<MyReturn />} />
          <Route path="/user/wishlist" element={<MyWishlist />} />
          <Route path="/user/quote" element={<MyRequestedQuote />} />
        </Route>
      </Routes>

      {/* <ScrollToTop/> */}
      {/* <Landing2 />
        <Sliders />
        <Footers /> */}
    </NavbarProvider>
  );
}

export default App;
