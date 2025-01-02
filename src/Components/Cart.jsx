// import React, { useContext, useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import searchimg from "../assets/search1.png";
// import deleteicon from "../assets/trash.png";
// import { useDispatch, useSelector } from "react-redux";
// import { addCartApi, removeItemFromCartApi } from "../Api/CartApi";
// import { fetchOrderPlace } from "../Api/OrderApi";

// import {
//   Tooltip,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@mui/material";
// import wrong from "../assets/Icons/wrongred.png";

// function Cart() {
//   const user = useSelector((state) => state.user.user);
//   const cartList = useSelector((state) => state.cart.cart);
//   const [cartItems, setcartItems] = useState(cartList);
//   // const { cartItems, setCartItems } = useContext(AppContext);
//   const [quantities, setQuantities] = useState([]);
//   const [selectedItemIndex, setSelectedItemIndex] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (cartList) setcartItems(cartList);
//   }, [cartList]);

//   const handleDeleteClick = (index) => {
//     setSelectedItemIndex(index);
//     setOpenDialog(true);
//   };

//   const handleDialogClose = () => {
//     setOpenDialog(false);
//     setSelectedItemIndex(null);
//   };

//   // const handleremove = async () => {
//   //   try {
//   //     const cartId = cartItems[selectedItemIndex].cartId;
//   //     await removeItemFromCartApi(cartId);
//   //     handleDialogClose(); // Close dialog after deleting
//   //   } catch (error) {
//   //     console.error("There was a problem with the fetch operation:", error);
//   //   }
//   // };

//   const handleremove = async (index) => {
//     try {
//       const cartId = cartItems[index].cartId; // Get cartId of the item to delete
//       await removeItemFromCartApi(cartId); // API call to remove item from cart

//       // Remove item from local cart state after successful deletion
//       const updatedCartItems = cartItems.filter((_, i) => i !== index);
//       setCartItems(updatedCartItems); // Update state with remaining items
//     } catch (error) {
//       console.error("There was a problem with the fetch operation:", error);
//     }
//   };

//   console.log(cartItems, "cart");
//   const handleCart = async (productID, Quantity) => {
//     const cartData = {
//       customerId: user.customerId,
//       productId: productID,
//       quantity: Quantity,
//       isActive: 1,
//     };
//     console.log(cartData);
//     try {
//       await addCartApi(cartData);
//     } catch (error) {
//       console.error("Error adding product to cart:", error);
//     }
//   };
//   // const handleQuantityChange = (index, newQuantity) => {
//   //   if (newQuantity) {
//   //     setcartItems((prev) => {
//   //       const updatedList = [...prev];
//   //       updatedList[index] = {
//   //         ...updatedList[index],
//   //         updateQuantity: newQuantity,
//   //       };
//   //       return updatedList;
//   //     });
//   //     handleCart(
//   //       cartItems[index].product.productID,
//   //       newQuantity - cartItems[index].quantity
//   //     );
//   //   }
//   // };
//   const handleQuantityChange = (index, newQuantity) => {
//     // Ensure the new quantity is at least 1
//     if (newQuantity >= 0) {
//       setcartItems((prev) => {
//         const updatedList = [...prev];
//         updatedList[index] = {
//           ...updatedList[index],
//           updateQuantity: newQuantity,
//         };
//         return updatedList;
//       });
//       handleCart(
//         cartItems[index].product.productID,
//         newQuantity - cartItems[index].quantity
//       );
//     }
//   };

//   const calculateSubtotal = (price, quantity) => price * quantity;

//   const total = cartItems.reduce((acc, item) => {
//     const price =
//       item.product?.salePrice > 0
//         ? item.product.salePrice.toFixed(2)
//         : item.product.unitPrice?.toFixed(2);

//     return acc + calculateSubtotal(price, item.quantity);
//   }, 0);

//   const dispatch = useDispatch();
//   const handleProceed = () => {
//     const currentDate = new Date();
//     const payload = {
//       orderId: "",
//       customerId: user.customerId,
//       totalAmount: total?.toFixed(2),
//       orderDate: currentDate.toISOString(),
//       shippingMethodId: 1,
//       orderStatusId: 1,
//       trackingNumber: "",
//       products: cartItems.map((items) => {
//         return {
//           productId: items.product.productID,
//           quantity: items.quantity,
//           pricePerProduct: items.product.salePrice,
//           sellerId: user.customerId,
//           imageUrl: items.product.imageUrl,
//         };
//       }),
//     };
//     dispatch(fetchOrderPlace(payload));
//     navigate(`/checkout?total=${total?.toFixed(2)}`);
//   };

//   const handlemove = () => {
//     navigate("/detailspage/0");
//   };

//   return (
//     <div className="flex flex-col justify-center font-sans bg-gray-200 p-8">
//       <p className="text-lg md:text-2xl mb-2 text-blue-900 flex font-semibold">
//         PharmEtrade {`>`} Cart
//       </p>
//       <div className="w-full bg-white rounded-lg shadow-lg p-5">
//         <div className="flex justify-between">
//           <h2 className="text-xl md:text-2xl m-5 text-blue-900 font-semibold">
//             Cart
//           </h2>
//         </div>
//         {cartItems.length > 0 ? (
//           <div className="flex flex-col lg:flex-row gap-2">
//             <div className="w-full lg:w-2/3">
//               <table className="min-w-full border shadow-lg rounded-lg">
//                 <thead>
//                   <tr className="border-b">
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Image
//                     </th>
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Product Name
//                     </th>
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Price
//                     </th>
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Quantity
//                     </th>
//                     <th className="px-2 md:px-5 -mr-2 py-2 md:py-3 text-right font-semibold text-blue-950 tracking-wider">
//                       Subtotal
//                     </th>
//                     <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {cartItems.map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-2 md:px-3 py-2 ">
//                         <Link to={`/detailspage/${item.product.productID}`}>
//                           <img
//                             className="h-16 w-16 rounded-lg"
//                             src={item.product.imageUrl}
//                             alt={item.product.id}
//                           />
//                         </Link>
//                       </td>
//                       <td className="px-2 md:px-4 py-3 p-2 flex flex-wrap">
//                         {item.product.productName}
//                       </td>
//                       <td className=" md:px-4 py-3 text-center ">
//                         {/* ${item.product.unitPrice?.toFixed(2)} */}$
//                         {item.product?.salePrice > 0
//                           ? item.product.salePrice.toFixed(2)
//                           : item.product.unitPrice?.toFixed(2)}
//                       </td>

//                       <td>
//                         <div className="mt-2 flex items-center">

//                           <button
//                             className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700 font-bold"
//                             onClick={() =>
//                               item.updateQuantity <=
//                               item.product.minimumOrderQuantity
//                                 ? handleremove(index) // Call handleremove with index if at or below minimum
//                                 : handleQuantityChange(
//                                     index,
//                                     Math.max(
//                                       item.product.minimumOrderQuantity,
//                                       item.updateQuantity - 1
//                                     )
//                                   )
//                             }
//                           >
//                             {item.updateQuantity <=
//                             item.product.minimumOrderQuantity ? (
//                               <span className="material-icons">delete</span> // Replace with your delete icon
//                             ) : (
//                               "-"
//                             )}
//                           </button>

//                           <input
//                             type="text"
//                             // value={ item?.product?.minimumOrderQuantity} // Default to minimumOrderQuantity
//                             value={
//                               item.updateQuantity ??
//                               item.product.minimumOrderQuantity
//                             }
//                             onChange={(e) => {
//                               const value = e.target.value;
//                               handleQuantityChange(index, value); // Allow the user to clear the input while typing
//                             }}
//                             onBlur={(e) => {
//                               const value = parseInt(e.target.value, 10);
//                               if (!isNaN(value)) {
//                                 if (value < item.product.minimumOrderQuantity) {
//                                   alert(
//                                     `Minimum order quantity is ${item.product.minimumOrderQuantity}`
//                                   );
//                                   handleQuantityChange(
//                                     index,
//                                     item.product.minimumOrderQuantity
//                                   ); // Reset to minimum
//                                 } else if (
//                                   value > item.product.maximumOrderQuantity
//                                 ) {
//                                   alert(
//                                     `Max order quantity is ${item.product.maximumOrderQuantity}`
//                                   );
//                                   handleQuantityChange(
//                                     index,
//                                     item.product.maximumOrderQuantity
//                                   ); // Reset to maximum
//                                 }
//                               }
//                             }}
//                             className="w-12 mx-2 border font-bold rounded-md text-center bg-white"
//                           />

//                           <button
//                             className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700 font-bold"
//                             onClick={() => {
//                               console.log("clicked");
//                               if (
//                                 item.updateQuantity <
//                                 item.product.maximumOrderQuantity
//                               ) {
//                                 handleQuantityChange(
//                                   index,
//                                   item.updateQuantity + 1
//                                 );
//                               } else {
//                                 alert(
//                                   `Maximum order quantity is only ${item.product.maximumOrderQuantity}`
//                                 );
//                               }
//                             }}
//                             // disabled={
//                             //   item.updateQuantity <=
//                             //   item.product.maximumOrderQuantity
//                             // } // Disable button if quantity reaches minimumOrderQuantity
//                           >
//                             +
//                           </button>
//                         </div>
//                         <div className="text-xs">
//                           Minimum Quantity Required:
//                           {item?.product?.minimumOrderQuantity}
//                         </div>
//                       </td>

//                       <td className="px-2 md:px-4 text-right py-3 ">
//                         <strong>
//                           $
//                           {calculateSubtotal(
//                             item.product?.salePrice > 0
//                               ? item.product.salePrice.toFixed(2)
//                               : item.product.unitPrice?.toFixed(2),
//                             item.quantity
//                           )?.toFixed(2)}
//                         </strong>
//                       </td>
//                       <td className="px-2 md:px-4 py-8 whitespace-nowrap flex items-center justify-center">
//                         <button
//                           className="text-red-600 w-4 h-3"
//                           // onClick={() => handleremove(index)}
//                           onClick={() => handleDeleteClick(index)}
//                         >
//                           <Tooltip placement="top" title="Delete">
//                             <img
//                               src={deleteicon}
//                               className="w-6"
//                               alt="delete-icon"
//                             />
//                           </Tooltip>
//                         </button>
//                         {item.product.minimumOrderQuantity}{" "}
//                         {item.product.maximumOrderQuantity}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="mt-4 flex gap-4">
//                 <input
//                   placeholder="Coupon Code"
//                   className="px-4 py-2 w-36 bg-gray-100 text-lg border rounded-full"
//                 />
//                 <div className="flex flex-col md:flex-row gap-4">
//                   <button className="px-6 py-2 font-bold text-white text-lg bg-blue-900 rounded-full">
//                     Apply Coupon
//                   </button>
//                   {/* <button className="px-6 py-2 font-bold text-white text-lg bg-blue-900 rounded-full">
//                     Update Cart
//                   </button> */}
//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
//               <div className="bg-white border rounded-lg shadow-lg p-5">
//                 <h2 className="text-xl md:text-2xl mb-4  text-blue-900 text-center font-semibold">
//                   Cart Totals
//                 </h2>
//                 <table className="w-full">
//                   <tbody>
//                     <tr>
//                       <td className="px-4 py-2 font-semibold">Subtotal</td>
//                       <td className="px-4 py-2 text-right">
//                         ${total?.toFixed(2)}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="px-4 py-2 font-semibold">Total</td>
//                       <td className="px-4 py-2 text-right">
//                         ${total?.toFixed(2)}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 <button
//                   className="w-full mt-4 px-4 py-2 font-bold text-white text-lg bg-blue-900 rounded-full"
//                   onClick={handleProceed}
//                 >
//                   Proceed to checkout
//                 </button>
//                 <button className="w-full mt-2 px-4 py-2 font-bold text-black text-lg bg-slate-300 rounded-full">
//                   <Link to="/allProducts">Continue Shopping</Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center m-8">
//             <h2 className="text-xl font-semibold text-gray-700">
//               Your cart is currently empty.
//             </h2>

//             <img src={searchimg} className="w-24 h-24 mt-4" alt="empty-cart" />
//             <button className="bg-blue-900 text-white px-4 py-2 mt-6 rounded-lg">
//               <Link to="/allProducts">Continue Shopping</Link>
//             </button>
//           </div>
//         )}
//       </div>
//       {/* Confirmation Dialog */}
//       <Dialog open={openDialog} onClose={handleDialogClose}>
//         <div className="flex  justify-end p-2">
//           <img
//             onClick={handleDialogClose}
//             src={wrong}
//             className="w-5 h-5 cursor-pointer flex justify-end"
//           />
//         </div>
//         <DialogContent>
//           Are you sure you want to delete this item from your cart?
//         </DialogContent>
//         <div>
//           <DialogActions
//             sx={{
//               display: "flex",
//               justifyContent: "space-around",
//             }}
//           >
//             <Button
//               onClick={handleDialogClose}
//               sx={{
//                 color: "white",
//                 backgroundColor: "red",
//                 "&:hover": { backgroundColor: "#cc0000" },
//               }}
//             >
//               Cancel
//             </Button>
//             <Button
//               onClick={handleremove}
//               sx={{
//                 color: "white",
//                 backgroundColor: "green",
//                 "&:hover": { backgroundColor: "#006400" },
//               }}
//             >
//               Delete
//             </Button>
//           </DialogActions>
//         </div>
//       </Dialog>
//     </div>
//   );
// }

// export default Cart;

import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import searchimg from "../assets/search1.png";
import deleteicon from "../assets/trash.png";
import { useDispatch, useSelector } from "react-redux";
import { addCartApi, removeItemFromCartApi } from "../Api/CartApi";
import { fetchOrderPlace } from "../Api/OrderApi";

import {
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import wrong from "../assets/Icons/wrongred.png";

function Cart() {
  const user = useSelector((state) => state.user.user);
  console.log("uuuuu", user?.isUPNMember);
  const cartList = useSelector((state) => state.cart.cart);
  console.log("cartList---->", cartList);
  const [cartItems, setcartItems] = useState(cartList);
  // const { cartItems, setCartItems } = useContext(AppContext);
  const [quantities, setQuantities] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartList) setcartItems(cartList);
  }, [cartList]);

  const handleDeleteClick = (index) => {
    setSelectedItemIndex(index);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedItemIndex(null);
  };

  const handleremove = async () => {
    try {
      const cartId = cartItems[selectedItemIndex].cartId;
      await removeItemFromCartApi(cartId);
      handleDialogClose(); // Close dialog after deleting
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const handleCart = async (productID, Quantity) => {
    const cartData = {
      customerId: user.customerId,
      productId: productID,
      quantity: Quantity,
      isActive: 1,
    };

    try {
      await addCartApi(cartData);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  // const handleQuantityChange = (index, newQuantity) => {
  //   if (newQuantity) {
  //     setcartItems((prev) => {
  //       const updatedList = [...prev];
  //       updatedList[index] = {
  //         ...updatedList[index],
  //         updateQuantity: newQuantity,
  //       };
  //       return updatedList;
  //     });
  //     handleCart(
  //       cartItems[index].product.productID,
  //       newQuantity - cartItems[index].quantity
  //     );
  //   }
  // };
  const handleQuantityChange = (index, newQuantity) => {
    // Ensure the new quantity is at least 1
    if (newQuantity >= 1) {
      setcartItems((prev) => {
        const updatedList = [...prev];
        updatedList[index] = {
          ...updatedList[index],
          updateQuantity: newQuantity,
        };
        return updatedList;
      });
      handleCart(
        cartItems[index].product.productID,
        newQuantity - cartItems[index].quantity
      );
    }
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  // const total = cartItems.reduce((acc, item) => {
  //   const currentDate = new Date();
  //   const saleStartDate = new Date(item.product?.salePriceValidFrom);
  //   const saleEndDate = new Date(item.product?.salePriceValidTo);

  //   // Check if salePrice exists and if the current date is within the sale period
  //   const price =
  //     item.product?.salePrice > 0 &&
  //     currentDate >= saleStartDate &&
  //     currentDate <= saleEndDate
  //       ? item.product.salePrice
  //       : item.product.unitPrice;

  //   return acc + calculateSubtotal(price, item.quantity);
  // }, 0);
  const total = cartItems.reduce((acc, item) => {
    const currentDate = new Date();
    const saleStartDate = new Date(item.product?.salePriceValidFrom);
    const saleEndDate = new Date(item.product?.salePriceValidTo);

    // Determine the price based on UPN membership and sale conditions
    const price =
      user?.isUPNMember === 1 && item.product?.upnMemberPrice > 0
        ? item.product.upnMemberPrice
        : item.product?.salePrice > 0 &&
          currentDate >= saleStartDate &&
          currentDate <= saleEndDate
          ? item.product.salePrice
          : item.product.unitPrice;

    // Add the subtotal to the accumulator
    return acc + calculateSubtotal(price, item.quantity);
  }, 0);

  const dispatch = useDispatch();

  // const handleProceed = async () => {
  //   // Check stock availability for each item in the cart
  //   let hasStockIssue = false;

  //   for (let i = 0; i < cartItems.length; i++) {
  //     const item = cartItems[i];

  //     // Logging item details for debugging
  //     console.log(
  //       `Checking stock for ${item.product.productName}: Quantity = ${item.quantity}, Stock = ${item.product.amountInStock}`
  //     );

  //   for (const item of cartItems) {
  //     if (item.quantity > item.product.amountInStock) {
  //       alert(
  //         `Sorry, there's not enough stock for ${item.product.productName}. Only ${item.product.amountInStock} left.`
  //       );
  //       hasStockIssue = true;
  //       break;
  //     }

  //     if (item.quantity > item.product.maximumOrderQuantity) {
  //       alert(
  //         `The quantity for ${item.product.productName} exceeds the maximum order limit of ${item.product.maximumOrderQuantity}.`
  //       );
  //       hasStockIssue = true;
  //       break;
  //     }

  //     if (item.quantity < item.product.minimumOrderQuantity) {
  //       alert(
  //         `The quantity for ${item.product.productName} is below the minimum order limit of ${item.product.minimumOrderQuantity}.`
  //       );
  //       hasStockIssue = true;
  //       break;
  //     }
  //   }
  // }

  //   if (hasStockIssue) return;

  //   // If all products have enough stock, proceed with the order
  //   const currentDate = new Date();
  //   const payload = {
  //     orderId: "",
  //     customerId: user.customerId,
  //     totalAmount: total?.toFixed(2),
  //     orderDate: currentDate.toISOString(),
  //     shippingMethodId: 1,
  //     orderStatusId: 1,
  //     trackingNumber: "",
  //     products: cartItems.map((item) => ({
  //       productId: item.product.productID,
  //       quantity: item.quantity,
  //       pricePerProduct: item.product.salePrice,
  //       sellerId: user.customerId,
  //       imageUrl: item.product.imageUrl,
  //     })),
  //   };

  //   try {
  //     // Dispatch the action to place the order
  //     await dispatch(fetchOrderPlace(payload));

  //     // Navigate to checkout page
  //     navigate(`/checkout?total=${total?.toFixed(2)}`);
  //   } catch (error) {
  //     console.error("Error processing the order:", error);
  //   }
  // };

  const orderPlace = useSelector((state) => state.order.orderPlace);
  const handleProceed = async () => {
    // Check stock availability for each item in the cart
    let hasStockIssue = false;

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];

      // Logging item details for debugging
      console.log(
        `Checking stock for ${item.product.productName}: Quantity = ${item.quantity}, Stock = ${item.product.amountInStock}`
      );

      if (item.quantity > item.product.amountInStock) {
        alert(
          `Sorry, there's not enough stock for ${item.product.productName}. Only ${item.product.amountInStock} left.`
        );
        hasStockIssue = true;
        break;
      }

      if (item.quantity > item.product.maximumOrderQuantity) {
        alert(
          `The quantity for ${item.product.productName} exceeds the maximum order limit of ${item.product.maximumOrderQuantity}.`
        );
        hasStockIssue = true;
        break;
      }

      if (item.quantity < item.product.minimumOrderQuantity) {
        alert(
          `The quantity for ${item.product.productName} is below the minimum order limit of ${item.product.minimumOrderQuantity}.`
        );
        hasStockIssue = true;
        break;
      }
    }

    if (hasStockIssue) return;

    // If all products have enough stock, proceed with the order
    const currentDate = new Date();
    // const payload = {
    //   orderId: "",
    //   customerId: user.customerId,
    //   totalAmount: total?.toFixed(2),
    //   orderDate: currentDate.toISOString(),
    //   shippingMethodId: 1,
    //   orderStatusId: 7,
    //   trackingNumber: "",
    //   products: cartItems.map((item) => ({
    //     productId: item.product.productID,
    //     quantity: item.quantity,
    //     pricePerProduct: item.product.salePrice,
    //     sellerId: user.customerId,
    //     imageUrl: item.product.imageUrl,
    //   })),
    // };
    const payload = {
      orderId: "" || orderPlace?.orderId,
      customerId: user.customerId,
      totalAmount: total?.toFixed(2),
      orderDate: currentDate.toISOString(),
      shippingMethodId: 1,
      orderStatusId: 7,
      trackingNumber: "",
      products: cartItems.map((item) => {
        const currentDate = new Date();
        const saleStartDate = new Date(item.product?.salePriceValidFrom);
        const saleEndDate = new Date(item.product?.salePriceValidTo);

        // Determine the price based on conditions
        let pricePerProduct;
        if (user?.isUPNMember === 1 && item.product?.upnMemberPrice > 0) {
          pricePerProduct = item.product.upnMemberPrice;
        } else if (
          item.product?.salePrice > 0 &&
          currentDate >= saleStartDate &&
          currentDate <= saleEndDate
        ) {
          pricePerProduct = item.product.salePrice;
        } else {
          pricePerProduct = item.product.unitPrice;
        }

        return {
          productId: item.product.productID,
          quantity: item.quantity,
          pricePerProduct: pricePerProduct?.toFixed(2),
          sellerId: item.product.sellerId,
          imageUrl: item.product.imageUrl,
        };
      }),
    };

    try {
      // Dispatch the action to place the order
      const res = await dispatch(fetchOrderPlace(payload));
      console.log(res)
      if (res?.status === 200) {
        navigate(`/checkout?total=${total?.toFixed(2)}`);
      } else {
        alert("Server Error. Please try again")
      }
      // navigate(`/checkout?total=${total?.toFixed(2)}&isCart=${true}`);
      // Navigate to checkout page
    } catch (error) {
      console.error("Error processing the order:", error);
    }
  };

  const handlemove = () => {
    navigate("/detailspage/0");
  };

  return (
    <div className="flex flex-col justify-center font-sans bg-gray-200 p-8">
      <p className="text-sm md:text-lg lg:text-2xl mb-2 text-blue-900 flex font-semibold">
        PharmEtrade {`>`} Cart
      </p>
      <div className="w-full bg-white rounded-lg shadow-lg md:p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-xl lg:text-2xl m-5 text-blue-900 font-semibold">
            Cart
          </h2>
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row sm:gap-2 gap-4">
            <div className="w-full lg:w-2/3 overflow-x-auto p-4 md:p-0 lg:p-0">
              <div className="hidden md:block lg:block ">
                <table className="min-w-full border  shadow-lg rounded-lg text-xs md:text-sm lg:text-base">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left font-semibold text-blue-950 tracking-wider">
                        Image
                      </th>
                      <th className="px-4  py-2  text-left font-semibold text-blue-950 tracking-wider">
                        Product Name
                      </th>
                      <th className="px-4 py-2  text-left font-semibold text-blue-950 tracking-wider">
                        Price
                      </th>
                      <th className="px-2  py-2 text-left font-semibold text-blue-950 tracking-wider">
                        Quantity
                      </th>
                      <th className="px-2  py-2 text-center font-semibold text-blue-950 tracking-wider">
                        Subtotal
                      </th>
                      <th className="px-2 md:px-5 py-2 md:py-3 text-left font-semibold text-blue-950 tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className="px-2 py-2 ">
                          <Link to={`/detailspage/${item.product.productID}`}>
                            <img
                              className="h-16 w-16 rounded-lg"
                              src={item.product.imageUrl}
                              alt={item.product.id}
                            />
                          </Link>
                        </td>
                        <td className="px-2 md:px-4 md:text-lg py-2 text-xs p-2 flex flex-wrap">
                          {item.product.productName}
                        </td>
                        {/* <td className="md:px-4 py-3 text-center">
                        $
                        {(() => {
                          const currentDate = new Date();
                          const saleStartDate = new Date(
                            item.product?.salePriceValidFrom
                          );
                          const saleEndDate = new Date(
                            item.product?.salePriceValidTo
                          );

                          // Check if salePrice exists, and the current date is within the sale period
                          if (
                            item.product?.salePrice > 0 &&
                            currentDate >= saleStartDate &&
                            currentDate <= saleEndDate
                          ) {
                            return item.product.salePrice.toFixed(2);
                          } else {
                            return item.product.unitPrice?.toFixed(2);
                          }
                        })()}
                      </td> */}
                        <td className="md:px-4 py-3 text-center">
                          $
                          {(() => {
                            const currentDate = new Date();
                            const saleStartDate = new Date(
                              item.product?.salePriceValidFrom
                            );
                            const saleEndDate = new Date(
                              item.product?.salePriceValidTo
                            );

                            // Check if the user is a UPN member and has a special price
                            if (
                              user?.isUPNMember === 1 &&
                              item.product?.upnMemberPrice > 0
                            ) {
                              return item.product.upnMemberPrice.toFixed(2);
                            }

                            // Check if salePrice exists, and the current date is within the sale period
                            if (
                              item.product?.salePrice > 0 &&
                              currentDate >= saleStartDate &&
                              currentDate <= saleEndDate
                            ) {
                              return item.product.salePrice.toFixed(2);
                            }

                            // Default to unitPrice
                            return item.product.unitPrice?.toFixed(2);
                          })()}
                        </td>

                        <td>
                          <div className="flex flex-col mx-3">
                            {/* <p className="font-semibold">Quantity</p> */}

                            <div className="mt-2 flex items-center flex-col-reverse sm:flex-row">
                              <button
                                className={`lg:px-2 sm:px-1  py-1 border rounded-md bg-gray-200 text-gray-700 font-bold"
                              ${item.updateQuantity <
                                    item.product.minimumOrderQuantity
                                    ? "bg-gray-400 opacity-50 cursor-not-allowed" // Style when disabled
                                    : "bg-gray-200" // Style when enabled
                                  }`}
                                onClick={() =>
                                  handleQuantityChange(
                                    index,
                                    Math.max(1, item.updateQuantity - 1)
                                  )
                                }
                                disabled={
                                  item.updateQuantity === 1 ||
                                  item.updateQuantity <
                                  item.product.minimumOrderQuantity
                                } // Disable button if quantity is 1
                              >
                                -
                              </button>

                              <input
                                type="text"
                                value={item.updateQuantity}
                                disabled={true}
                                className="w-12 mx-2 border font-bold rounded-md text-center bg-white"
                              />

                              <button
                                className={`px-2 py-1 border rounded-md font-bold text-gray-700 ${item.updateQuantity >
                                  item.product.amountInStock ||
                                  item.updateQuantity >
                                  item.product.maximumOrderQuantity
                                  ? "bg-gray-400 opacity-50 cursor-not-allowed" // Style when disabled
                                  : "bg-gray-200" // Style when enabled
                                  }`}
                                onClick={() =>
                                  handleQuantityChange(
                                    index,
                                    item.updateQuantity + 1
                                  )
                                }
                                disabled={
                                  item.updateQuantity >
                                  item.product.amountInStock ||
                                  item.updateQuantity >
                                  item.product.maximumOrderQuantity
                                }
                              >
                                +
                              </button>
                            </div>

                            {item.updateQuantity >
                              item.product.amountInStock && (
                                <p className="text-red-500 text-sm">
                                  Only {item.product.amountInStock} available in
                                  stock
                                </p>
                              )}

                            {item.updateQuantity >
                              item.product.maximumOrderQuantity && (
                                <p className="text-red-500 text-sm">
                                  You can buy maximum of{" "}
                                  {item.product.maximumOrderQuantity} Only
                                </p>
                              )}
                            {item.updateQuantity <
                              item.product.minimumOrderQuantity && (
                                <p className="text-red-500 text-sm">
                                  You must order at least{" "}
                                  {item.product.minimumOrderQuantity}
                                </p>
                              )}
                          </div>
                          {/* <div className="text-xs">Minimum Quantity Required:{item?.product?.minimumOrderQuantity}</div> */}
                        </td>

                        {/* <td className="px-2 md:px-4 text-right py-3">
                        <strong>
                          $
                          {(() => {
                            const currentDate = new Date();
                            const saleStartDate = new Date(
                              item.product?.salePriceValidFrom
                            );
                            const saleEndDate = new Date(
                              item.product?.salePriceValidTo
                            );

                            const price =
                              item.product?.salePrice > 0 &&
                              currentDate >= saleStartDate &&
                              currentDate <= saleEndDate
                                ? item.product.salePrice
                                : item.product.unitPrice;

                            return calculateSubtotal(
                              price,
                              item.quantity
                            )?.toFixed(2);
                          })()}
                        </strong>
                      </td> */}
                        <td className="px-2 md:px-4 text-right py-3">
                          <strong>
                            $
                            {(() => {
                              const currentDate = new Date();
                              const saleStartDate = new Date(
                                item.product?.salePriceValidFrom
                              );
                              const saleEndDate = new Date(
                                item.product?.salePriceValidTo
                              );

                              // Determine the price based on UPN membership and sale conditions
                              const price =
                                user?.isUPNMember === 1 &&
                                  item.product?.upnMemberPrice > 0
                                  ? item.product.upnMemberPrice
                                  : item.product?.salePrice > 0 &&
                                    currentDate >= saleStartDate &&
                                    currentDate <= saleEndDate
                                    ? item.product.salePrice
                                    : item.product.unitPrice;

                              // Calculate the subtotal based on the selected price and quantity
                              return calculateSubtotal(
                                price,
                                item.quantity
                              )?.toFixed(2);
                            })()}
                          </strong>
                        </td>

                        <td className="px-2 md:px-4 py-8 whitespace-nowrap flex items-center justify-center">
                          <button
                            className="text-red-600 w-4 h-3"
                            // onClick={() => handleremove(index)}
                            onClick={() => handleDeleteClick(index)}
                          >
                            <Tooltip placement="top" title="Delete">
                              <img
                                src={deleteicon}
                                className="w-6"
                                alt="delete-icon"
                              />
                            </Tooltip>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* new mobile lyout 15/11/24*/}
              <div className="block lg:hidden md:hidden">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border rounded-lg shadow-md p-2 mb-4 flex flex-row items-center gap-4"
                  >
                    {/* Image Section */}
                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                      <Link to={`/detailspage/${item.product.productID}`}>
                        <img
                          className="h-20 w-20 rounded-lg"
                          src={item.product.imageUrl}
                          alt={item.product.id}
                        />
                      </Link>
                    </div>

                    {/* Details Section */}
                    <div className="flex-1">
                      <p className="font-extrabold text-blue-950">
                        {item.product.productName}
                      </p>
                      <p className="text-gray-700">
                        Price: $
                        {(() => {
                          const currentDate = new Date();
                          const saleStartDate = new Date(
                            item.product?.salePriceValidFrom
                          );
                          const saleEndDate = new Date(
                            item.product?.salePriceValidTo
                          );

                          // Check if the user is a UPN member and has a special price
                          if (
                            user?.isUPNMember === 1 &&
                            item.product?.upnMemberPrice > 0
                          ) {
                            return item.product.upnMemberPrice.toFixed(2);
                          }

                          // Check if salePrice exists, and the current date is within the sale period
                          if (
                            item.product?.salePrice > 0 &&
                            currentDate >= saleStartDate &&
                            currentDate <= saleEndDate
                          ) {
                            return item.product.salePrice.toFixed(2);
                          }

                          // Default to unitPrice
                          return item.product.unitPrice?.toFixed(2);
                        })()}
                      </p>
                      <p className="text-gray-700">
                        <div className="flex flex-col">
                          <div className="flex items-center ">
                            {/* Decrease Quantity Button */}
                            <button
                              className={`w-6 h-6 flex items-center justify-center border rounded-md text-black font-bold ${item.updateQuantity <
                                item.product.minimumOrderQuantity
                                ? "bg-gray-400 opacity-50 cursor-not-allowed"
                                : "bg-gray-200"
                                }`}
                              onClick={() =>
                                handleQuantityChange(
                                  index,
                                  Math.max(1, item.updateQuantity - 1)
                                )
                              }
                              disabled={
                                item.updateQuantity === 1 ||
                                item.updateQuantity <
                                item.product.minimumOrderQuantity
                              }
                            >
                              -
                            </button>

                            {/* Quantity Display */}
                            <input
                              type="text"
                              value={item.updateQuantity}
                              disabled={true}
                              className="w-8 h-6 mx-2 text-center border rounded-md font-bold bg-white"
                            />

                            {/* Increase Quantity Button */}
                            <button
                              className={`w-6 h-6 flex items-center justify-center border rounded-md text-black font-bold ${item.updateQuantity >
                                item.product.amountInStock ||
                                item.updateQuantity >
                                item.product.maximumOrderQuantity
                                ? "bg-gray-400 opacity-50 cursor-not-allowed"
                                : "bg-gray-200"
                                }`}
                              onClick={() =>
                                handleQuantityChange(
                                  index,
                                  item.updateQuantity + 1
                                )
                              }
                              disabled={
                                item.updateQuantity >
                                item.product.amountInStock ||
                                item.updateQuantity >
                                item.product.maximumOrderQuantity
                              }
                            >
                              +
                            </button>
                          </div>

                          {/* Validation Messages */}
                          {item.updateQuantity > item.product.amountInStock && (
                            <p className="text-red-500 text-xs mt-1">
                              Only {item.product.amountInStock} available in
                              stock.
                            </p>
                          )}
                          {item.updateQuantity >
                            item.product.maximumOrderQuantity && (
                              <p className="text-red-500 text-xs mt-1">
                                You can buy a maximum of{" "}
                                {item.product.maximumOrderQuantity}.
                              </p>
                            )}
                          {item.updateQuantity <
                            item.product.minimumOrderQuantity && (
                              <p className="text-red-500 text-xs mt-1">
                                You must order at least{" "}
                                {item.product.minimumOrderQuantity}.
                              </p>
                            )}
                        </div>
                      </p>
                      <p className="text-gray-700">
                        Subtotal: $
                        {/* {calculateSubtotal(
                          item.product.salePrice > 0 &&
                            new Date() >=
                              new Date(item.product.salePriceValidFrom) &&
                            new Date() <=
                              new Date(item.product.salePriceValidTo)
                            ? item.product.salePrice
                            : item.product.unitPrice,
                          item.updateQuantity
                        ).toFixed(2)} */}
                        {(() => {
                          const currentDate = new Date();
                          const saleStartDate = new Date(
                            item.product?.salePriceValidFrom
                          );
                          const saleEndDate = new Date(
                            item.product?.salePriceValidTo
                          );

                          // Determine the price based on UPN membership and sale conditions
                          const price =
                            user?.isUPNMember === 1 &&
                              item.product?.upnMemberPrice > 0
                              ? item.product.upnMemberPrice
                              : item.product?.salePrice > 0 &&
                                currentDate >= saleStartDate &&
                                currentDate <= saleEndDate
                                ? item.product.salePrice
                                : item.product.unitPrice;

                          // Calculate the subtotal based on the selected price and quantity
                          return calculateSubtotal(
                            price,
                            item.quantity
                          )?.toFixed(2);
                        })()}
                      </p>
                      <button
                        className="text-red-600 mt-2"
                        onClick={() => handleDeleteClick(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* new mobile lyout 15/11/24*/}

              <div className="mt-4 flex flex-col md:flex-row gap-4 p-4">
                <input
                  placeholder="Coupon Code"
                  className="px-4 py-2 w-full md:w-36 bg-gray-100 text-lg border rounded-full"
                />
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="px-6 py-2 font-bold text-white text-lg bg-blue-900 rounded-full">
                    Apply Coupon
                  </button>
                  {/* <button className="px-6 py-2 font-bold text-white text-lg bg-blue-900 rounded-full">
                    Update Cart
                  </button> */}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0 p-4 md:p-0 ">
              <div className="bg-white border rounded-lg shadow-lg p-5">
                <h2 className="text-xl md:text-2xl mb-4  text-blue-900 text-center font-semibold">
                  Cart Totals
                </h2>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Subtotal</td>
                      <td className="px-4 py-2 text-right">
                        ${total?.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Total</td>
                      <td className="px-4 py-2 text-right">
                        ${total?.toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="w-full mt-4 px-4 py-2 font-bold text-white text-lg bg-blue-900 rounded-full"
                  onClick={handleProceed}
                >
                  Proceed to checkout
                </button>
                {/* <button className="w-full mt-2 px-4 py-2 font-bold text-black text-lg bg-slate-300 rounded-full">
                  <Link to="/allProducts">Continue Shopping</Link>
                </button> */}
                <button
                  className="w-full mt-2 px-4 py-2 font-bold text-black text-lg bg-slate-300 rounded-full"
                  onClick={() => navigate(-1)} // Navigate to the previous page
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center m-8">
            <h2 className="text-xl font-semibold text-gray-700">
              Your cart is currently empty.
            </h2>

            <img src={searchimg} className="w-24 h-24 mt-4" alt="empty-cart" />
            <button className="bg-blue-900 text-white px-4 py-2 mt-6 rounded-lg">
              <Link to="/allProducts">Continue Shopping</Link>
            </button>
          </div>
        )}
      </div>
      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <div className="flex  justify-end p-2">
          <img
            onClick={handleDialogClose}
            src={wrong}
            className="w-5 h-5 cursor-pointer flex justify-end"
          />
        </div>
        <DialogContent>
          Are you sure you want to delete this item from your cart?
        </DialogContent>
        <div>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              onClick={handleDialogClose}
              sx={{
                color: "white",
                backgroundColor: "red",
                "&:hover": { backgroundColor: "#cc0000" },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleremove}
              sx={{
                color: "white",
                backgroundColor: "green",
                "&:hover": { backgroundColor: "#006400" },
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default Cart;
