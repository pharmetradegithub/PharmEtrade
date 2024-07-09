import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
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
import AccountPanel from "./Components/UserAccount/AccountPanel";
import MyAccount from "./Components/UserAccount/MyAccount";
import MyOrders from "./Components/UserAccount/MyOrders";
import OrderHistory from "./Components/OrderHistory";
import UpsShipping from "./Components/Admin/Settings/UpsShipping";
import FedexShipping from "./Components/Admin/Settings/FedexShipping";
import ShippingSetting from "./Components/Admin/Settings/ShippingSetting";
import ManageShipping from "./Components/Admin/Settings/ManageShipping";
import AddProducts from "./Components/Admin/Dashboard/AddProducts";
import Orders from "./Components/Admin/Dashboard/Orders";
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Customers from './Components/Admin/Dashboard/Customers';
import Earnings from "./Components/Admin/Earnings/Earnings";
import Review from "./Components/Admin/Review/Review";
import Return from "./Components/Admin/Returns/Return";
import AssignProduct from "./Components/Admin/AssignProducts/AssignProduct";
import AssignProductList from "./Components/Admin/AssignProductList/AssignProductList";
import RequestQuote from "./Components/Admin/RequestQuote/RequestQuote";
import QuotedProducts from "./Components/Admin/RequestQuote/QuotedProducts";



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
  return (
    <NavbarProvider>
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/password" &&
        location.pathname !== "/changepassword" &&
        location.pathname !== "/admin" &&
        location.pathname !== "/admin/orders" &&
        location.pathname !== "/admin/addproducts" &&
        location.pathname !== "/admin/customers" &&
        location.pathname !== "/admin/payouts" &&
        location.pathname !== "/admin/earnings" &&
        location.pathname !== "/admin/review" &&
        location.pathname !== "/admin/returns" &&
        location.pathname !== "/admin/assign-products" &&
        location.pathname !== "/admin/assign-product-list" &&
        location.pathname !== "/admin/request-quote" &&
        location.pathname !== "/admin/quoted-product" &&
        location.pathname !== "/admin/settings" &&
        location.pathname !== "/admin/ups-shipping" &&
        location.pathname !== "/admin/fedex-shipping" &&
        location.pathname !== "/admin/shipping-settings" &&
        location.pathname !== "/admin/manage-shipping" &&
        location.pathname !== "/user" && 
        location.pathname !== "/user/orders" && (
          <Nav topDivRef={topDivRef} cartItems={cartItems} />
        )}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/otp2" element={<OTP2 />} />
        <Route path="/password" element={<Password />} />
        <Route path="/changepassword" element={<Changepassword />} />
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
        <Route path="/checkout" element={<Checkout topMargin={topMargin} />} />
        <Route path="/order" element={<Order topMargin={topMargin} />} />
        <Route path="/pops" element={<Product />} />
        <Route path="/app" element={<Landing topMargin={topMargin} />} />
        <Route path="/" element={<Landing topMargin={topMargin} />} />
        <Route path="/detailspage/:id" element={<Items addCart={addCart} />} />
        <Route path="/orderhistory" element={<OrderHistory topMargin={topMargin} />} />
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

        <Route element={<AdminPanel />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/addproducts" element={<AddProducts />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/payouts" element={<Payouts />} />
          <Route path="/admin/earnings" element={<Earnings />} />
          <Route path="/admin/review" element={<Review />} />
          <Route path="/admin/returns" element={<Return />} />
          <Route path="/admin/assign-products" element={<AssignProduct />} />
          <Route
            path="/admin/assign-product-list"
            element={<AssignProductList />}
          />
          <Route path="/admin/request-quote" element={<RequestQuote />} />
          <Route path="/admin/quoted-product" element={<QuotedProducts />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/ups-shipping" element={<UpsShipping />} />
          <Route path="/admin/fedex-shipping" element={<FedexShipping />} />
          <Route path="/admin/shipping-settings" element={<ShippingSetting />} />
          <Route path="/admin/manage-shipping" element={<ManageShipping />} />
        </Route>

        <Route element={<AccountPanel topMargin={topMargin} />}>
          <Route path="/user" element={<MyAccount />} />
          <Route path="/user/orders" element={<MyOrders />} />

          
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
