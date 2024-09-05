import React, { useEffect, useRef } from "react";

import { Outlet } from "react-router-dom";
import ProductSideBar from "./ProductSideBar";
import Nav from "../../HomePage/Layout/Nav";

function ProductsPanel({ addCart, wishList, cartItems}) {


  return (

    <div className="w-screen overflow-scroll " >
       <Nav  cartItems={cartItems} />
    <div
      className="flex flex-row justify-center pr-4 h-screen gap-10 mt-32"
    >
      <div className="h-screen flex justify-center w-72 overflow-y-scroll">
        <ProductSideBar />
      </div>
      <div  className="w-[calc(100%-288px)] h-screen overflow-y-scroll">
        <Outlet  addCart={addCart} wishList={wishList}  />
      </div>
    </div>
    </div>
  );
}

export default ProductsPanel;