// import React, { useEffect, useRef } from "react";

// import { Outlet } from "react-router-dom";
// import ProductSideBar from "./ProductSideBar";
// import Nav from "../../HomePage/Layout/Nav";

// function ProductsPanel({ addCart, wishList, cartItems}) {


//   return (

//     <div className="w-screen overflow-scroll " >
//        <Nav  cartItems={cartItems} />
//     <div
//       className="flex flex-row justify-center pr-4 h-screen gap-10 mt-32"
//     >
//       <div className="h-screen flex justify-center w-72 overflow-y-scroll">
//         <ProductSideBar />
//       </div>
//       <div  className="w-[calc(100%-288px)] h-screen overflow-y-scroll">
//         <Outlet  addCart={addCart} wishList={wishList}  />
//       </div>
//     </div>
//     </div>
//   );
// }

// export default ProductsPanel;


import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ProductSideBar from './ProductSideBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../../HomePage/Layout/Nav';
import { fetchCriteriaProductsApi } from '../../../Api/ProductApi';

function ProductsPanel({ addCart, wishList, cartItems }) {
  const navigate = useNavigate();
  // const productCriteria = useSelector((state) => state.product.productsByCriteria);
  // const [criteriaProducts, setCriteriaProducts] = useState(null);
  const handleChange = async (category) => {
    try {
      const productId = category.id; // Get the category ID
      const apiCall = { productCategoryId: productId };
      const response = await fetchCriteriaProductsApi(apiCall);

      console.log("response-->", response);
      navigate(`/allProducts/CategoryProducts?CategoryName=${category.name}`)
      // setCriteriaProducts(response.data); // Set the fetched products
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("criteria--->", criteriaProducts);
  return (
    <div className="w-screen overflow-scroll">
      <Nav cartItems={cartItems} /> 
      <div className="flex flex-row justify-center pr-4 h-screen gap-10 mt-32">
        <div className="h-screen flex justify-center w-72 overflow-y-scroll">
          <ProductSideBar handleChange={handleChange} />
        </div>
        <div className="w-[calc(100%-288px)] h-screen overflow-y-scroll">
          <Outlet addCart={addCart} wishList={wishList} />
        </div>
      </div>
    </div>
  );
}

export default ProductsPanel;
