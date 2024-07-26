import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Landing from "./Components/HomePage/LandingPage/Landing";
import Login from "./Components/Login";
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
import AdminNav from "./Components/Admin/Layout/AdminNav";
import AdminPanel from "./Components/Admin/Layout/AdminPanel";
import Sidebar from "./Components/Admin/Layout/SideBar";
import Settings from "./Components/Admin/Settings/Settings";
// import SellerInfo from "./Components/DashboardAdmin/SellerInfo";
import Payouts from "./Components/Admin/Payouts/Payouts";
import AccountPanel from "./Components/UserAccount/Layout/AccountPanel";
import MyAccount from "./Components/UserAccount/MyAccount/MyAccount";
import MyOrders from "./Components/UserAccount/MyOrders/MyOrders";
import OrderHistory from "./Components/OrderHistory";
import UpsShipping from "./Components/Admin/Settings/UpsShipping";
import FedexShipping from "./Components/Admin/Settings/FedexShipping";
import ShippingSetting from "./Components/Admin/Settings/ShippingSetting";
import ManageShipping from "./Components/Admin/Settings/ManageShipping";
import AddProducts from "./Components/Admin/Dashboard/AddProducts";
import Orders from "./Components/Admin/Dashboard/Orders";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Customers from "./Components/Admin/Dashboard/Customers";
import Earnings from "./Components/Admin/Earnings/Earnings";
import Review from "./Components/Admin/Review/Review";
import Return from "./Components/Admin/Returns/Return";
import AssignProduct from "./Components/Admin/AssignProducts/AssignProduct";
import AssignProductList from "./Components/Admin/AssignProductList/AssignProductList";
import RequestQuote from "./Components/Admin/RequestQuote/RequestQuote";
import QuotedProducts from "./Components/Admin/RequestQuote/QuotedProducts";
import ProductFields from "./Components/Admin/Components/ProductFields";
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
import Offers from "./Components/HomePage/NavLinks/Offers";

function App() {
  const [count, setCount] = useState(0);
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
  function addCart(prolist) {
    setCartItems([...cartItems, prolist]);
  }
  console.log(cartItems);

  function wishList(prolist) {
    setWishItems([...wishItems, prolist]);
  }
  console.log(wishItems);
  const location = useLocation();

  const excludePatterns = /\/(admin|user|login|signup|password|changepassword)/;

  return (
    <NavbarProvider>
      {/* {!excludePatterns.test(location.pathname) && (
        <Nav topDivRef={topDivRef} cartItems={cartItems} />
      )} */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
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
            element={<Products addCart={addCart} wishList={wishList} />}
          />
          <Route
            path="/checkout"
            element={<Checkout topMargin={topMargin} />}
          />
          <Route path="/order" element={<Order topMargin={topMargin} />} />
          <Route path="/pops" element={<Product />} />
          <Route path="/app" element={<Landing topMargin={topMargin} />} />
          <Route path="/" element={<Landing topMargin={topMargin} />} />
          <Route
            path="/detailspage/:id"
            element={<Items addCart={addCart} />}
          />
          <Route
            path="/orderhistory"
            element={<OrderHistory topMargin={topMargin} />}
          />
          <Route
            path="/bid"
            element={<Bid topMargin={topMargin} />}
          />
          <Route
            path="/buy"
            element={<Buy topMargin={topMargin} />}
          />
           <Route
            path="/whypharmetrade"
            element={<WhyPharma topMargin={topMargin} />}
          /> 
          <Route
          path="/aboutus"
          element={<AboutUs topMargin={topMargin} />}
        /> <Route
        path="/contactus"
        element={<Contactus topMargin={topMargin} />}
      /> <Route
      path="/buy"
      element={<Offers topMargin={topMargin} />}
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

        <Route path="/admin" element={<AdminPanel />}>
          <Route path="" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="addproducts" element={<AddProducts />} />
          <Route path="addproducts/Create" element={<ProductFields />} />

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

        <Route element={<AccountPanel topMargin={topMargin} />}>
          <Route path="/user" element={<MyAccount />} />
          <Route path="/user/orders" element={<MyOrders />} />
          <Route path="/user/downloads" element={<DownloadProduct/>} />
          <Route path="/user/address-book" element={<Addressbook/>} />
          <Route path="/user/account-info" element={<AccountInfo/>} />
          <Route path="/user/payment-methods" element={<StoredPayment/>} />
          <Route path="/user/reviews" element={<ProductReview/>} />
          <Route path="/user/newsletter" element={<Newsletter/>} />
          {/* <Route path="/user/delete-account" element={<DeleteAccount/>} /> */}
          <Route path="/user/saved" element={<SavedLater/>} />
          <Route path="/user/returns" element={<MyReturn/>} />
          <Route path="/user/wishlist" element={<MyWishlist/>} />
          <Route path="/user/quote" element={<MyRequestedQuote/>} />



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
