// // import React, { useState } from 'react';
// // import { useSelector } from 'react-redux';

// // import ProductSideBar from './ProductSideBar';
// // import { Outlet, useNavigate } from 'react-router-dom';
// // import Nav from '../../HomePage/Layout/Nav';
// // import { fetchCriteriaProductsApi } from '../../../Api/ProductApi';

// // function ProductsPanel() {
// //   const navigate = useNavigate();
// //   const handleChange = async (category) => {
// //     try {
// //       const productId = category.id; // Get the category ID
// //       const apiCall = { productCategoryId: productId };
// //       const response = await fetchCriteriaProductsApi(apiCall);

// //       console.log("response-->", response);
// //       navigate(`/allProducts/CategoryProducts?CategoryName=${category.name}`)
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   // console.log("criteria--->", criteriaProducts);
// //   return (
// //     <div className="w-screen overflow-scroll">
// //       <div className="flex flex-row justify-center pr-4 h-screen gap-10">
// //         <div className="h-screen flex justify-center w-72 overflow-y-scroll">
// //           <ProductSideBar handleChange={handleChange} />
// //         </div>
// //         <div className="w-[calc(100%-288px)] h-screen overflow-y-scroll">
// //           <Outlet />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProductsPanel;




// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// import ProductSideBar from './ProductSideBar';
// import { Outlet, useNavigate } from 'react-router-dom';
// import Nav from '../../HomePage/Layout/Nav';
// import { fetchCriteriaProductsApi } from '../../../Api/ProductApi';

// function ProductsPanel() {
//   const navigate = useNavigate();
//   const handleChange = async (category) => {
//     try {
//       const productId = category.productCategoryId; 
//       const apiCall = { productCategoryId: productId };
//       const response = await fetchCriteriaProductsApi(apiCall);

//       console.log("response-->", response);
//       navigate(`/allProducts/CategoryProducts?CategoryName=${category.productCategoryId}`)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // console.log("criteria--->", criteriaProducts);
//   return (
//     <div className="w-screen overflow-scroll">
//       <div className="flex flex-row justify-center pr-4 h-screen gap-10">
//         <div className="h-screen flex justify-center w-72 overflow-y-scroll">
//           <ProductSideBar handleChange={handleChange} />
//         </div>
//         <div className="w-[calc(100%-288px)] h-screen overflow-y-scroll">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductsPanel;
















import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ProductSideBar from './ProductSideBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../../HomePage/Layout/Nav';
import { fetchCriteriaProductsApi } from '../../../Api/ProductApi';

function ProductsPanel() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0); // Track Y-axis scroll position
console.log(scrollPosition,"Y axis");
  const handleChange = async (category) => {
    try {
      const productId = category.productCategoryId; 
      const apiCall = { productCategoryId: productId };
      const response = await fetchCriteriaProductsApi(apiCall);

      console.log("response-->", response);
      navigate(`/allProducts/CategoryProducts?CategoryName=${category.productCategoryId}`)
    } catch (error) {
      console.log(error);
    }
  };
  const handleScroll = () => {
    setScrollPosition(window.scrollY); // Capture the Y-axis scroll position
  };
  useEffect(() => {
    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  // console.log("criteria--->", criteriaProducts);
  return (
    <div className="w-screen overflow-">
      <div className="flex flex-row justify-center pr-4 h- gap-10">
        <div className={` flex overflow-y-scroll h-[calc(100vh-125px)] justify-center w-72 mt-2 pb-10 ${scrollPosition >880 ? "absolute":"fixed"} fixed left-0  `}>
          <ProductSideBar handleChange={handleChange} />
        </div>
        <div className="w-[calc(100%-288px)]   ml-72  overflow-y-">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProductsPanel;
