// import React, { useState } from "react"; 
// import { Link, useNavigate } from "react-router-dom";
// import { RxCross2 } from "react-icons/rx";
// import { RiDeleteBinLine } from "react-icons/ri";

// function Cart({ topMargin, cartItems, setCartItems }) {
//   const [quantities, setQuantities] = useState(cartItems.map(() => 1));
//   let navigate = useNavigate();

//   function handleremove(index) {
//     const filtered = cartItems.filter((_, i) => i !== index);
//     setCartItems(filtered);

//     const updatedQuantities = quantities.filter((_, i) => i !== index);
//     setQuantities(updatedQuantities);
//   }

//   const handleQuantityChange = (index, newQuantity) => {
//     const updatedQuantities = [...quantities];
//     updatedQuantities[index] = newQuantity;
//     setQuantities(updatedQuantities);
//   };

//   const calculateSubtotal = (price, quantity) => price * quantity;
//   const total = cartItems.reduce(
//     (acc, item, index) =>
//       acc + calculateSubtotal(item.price, quantities[index]),
//     0
//   );

//   const handleProceed = () => {
//     navigate("/checkout");
//   };

//   return (
//     <div
//       className="w-full h-full flex flex-col justify-center  font-sans bg-gray-200 p-10"
//       style={{ marginTop: `${topMargin}px` }}
//     >
//       <p className=" lg:text-2xl lg:mb-2 text-black  flex ">
//         PharmaTrade {`>`} Cart
//       </p>
//       <div className=" w-full h-full bg-white rounded-lg shadow-lg p-5">
//         <h2 className="text-[25px] mb-4">Cart</h2>
//         {cartItems.length > 0 ? (
          
//           <div className="flex flex-col  gap-2">
//             <div className="flex w-84 ">
//               <div className="w-full  lg:w-2/3">
//                 <table className="min-w-full">
//                   <thead>
//                     <tr>
//                       <th
//                         scope="col"
//                         className="px-5 py-3 text-[18px] text-left font-medium text-blue-950 tracking-wider"
//                       >
//                         Image
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-5 py-3 text-[18px] text-left font-medium text-blue-950 tracking-wider"
//                       >
//                         Product Name
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-5 py-3 text-[18px] text-left font-medium text-blue-950 tracking-wider"
//                       >
//                         Price
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-5 py-3 text-[18px] text-left font-medium text-blue-950 tracking-wider"
//                       >
//                         Quantity
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-5 py-3 text-[18px] text-left font-medium text-blue-950 tracking-wider"
//                       >
//                         Subtotal
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-5 py-3 text-[18px] text-left font-medium text-blue-950 tracking-wider"
//                       >
//                         Action
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200 border-2 rounded-lg">
//                     {cartItems.map((item, index) => (
//                       <tr key={index}>
//                         {/* <td className="px-5 py-4 whitespace-nowrap">
//                          <button
//                            className="font-semibold text-[20px] ml-4 bg-gray-100 rounded-lg h-6 w-5"
//                            onClick={() => handleremove(index)}
//                          >
//                            <RxCross2 />
//                          </button>
//                        </td> */}
//                         <td className="px-3 py-2 whitespace-nowrap">
//                           <img
//                             className="h-16 w-16 pl-3 mb-2 flex justify-center rounded-lg"
//                             src={item.src}
//                             alt={item.id}
//                           />
//                         </td>
//                         <td className="px-4 py-3 whitespace-nowrap">
//                           Vitamin C(1000IU) Cap X
//                         </td>
//                         <td className="px-4 py-3 whitespace-nowrap">
//                           {item.price}
//                         </td>
//                         <td className="px-4 py-3 whitespace-nowrap">
//                           <input
//                             type="number"
//                             value={quantities[index]}
//                             onChange={(e) =>
//                               handleQuantityChange(
//                                 index,
//                                 Number(e.target.value)
//                               )
//                             }
//                             className="text-xl border rounded-lg p-1 w-16"
//                             min="1"
//                           />
//                         </td>
//                         <td className="px-4 py-3 whitespace-nowrap">
//                           <strong>{item.price}</strong>
//                         </td>
//                         <td className="px-4 py-3 whitespace-nowrap">
//                           <button
//                             className="font-semibold text-[20px] ml-4 bg-gray-100 rounded-lg h-6 w-5"
//                             onClick={() => handleremove(index)}
//                           >
//                             <RiDeleteBinLine className="w-7 h-9 text-red-600" />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 <div className="">
//               <input
//                 placeholder="Coupon Code"
//                 className="px-16 bg-slate-100 items-center text-white text-lg py-2 border-2 rounded-full "
//               />
//               <button className="px-6 py-2 ml-5 items-center font-bold text-white text-lg bg-sky-700 border-2 rounded-full">
//                 Apply Coupon
//               </button>
//               <button className="px-6 ml-10 py-2 items-center font-bold text-white text-lg bg-sky-700 border-2 rounded-full">
//                 Update Cart
//               </button>
//             </div>
//               </div>
//               <div className="lg:ml-8">
//                 <table>
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-2 text-center font-medium text-blue-950 text-[18px]">
//                         Cart Totals
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="border rounded-lg">
//                     <tr>
//                       <td className="px-4 py-2 whitespace-nowrap text-center font-medium">
//                         Subtotal
//                       </td>
//                       <td className="px-12 py-2 whitespace-nowrap text-center">
//                         $ amount
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="px-5 py-2 whitespace-nowrap text-center font-medium">
//                         Total
//                       </td>
//                       <td className="px-12 py-4 whitespace-nowrap text-center">
//                         $ amount
//                       </td>
//                     </tr>
//                   </tbody>
//                   <div>
//                     <button
//                       className="px-3 py-2 ml-3 mt-2 items-center font-bold text-white text-lg bg-sky-700 border-2 rounded-full"
//                       onClick={handleProceed}
//                     >
//                       Proceed to checkout
//                     </button>
//                     <button className="px-3 flex justify-center font-bold text-black text-lg bg-slate-300 py-2 border-2 rounded-full m-2">
//                       <Link to="/products">Continue Shopping</Link>
//                     </button>
//                   </div>
//                 </table>
//               </div>
//             </div>
//             {/* <div className="">
//               <input
//                 placeholder="Coupon Code"
//                 className="px-16 bg-slate-100 items-center text-white text-lg py-2 border-2 rounded-full "
//               />
//               <button className="px-6 py-2 ml-5 items-center font-bold text-white text-lg bg-sky-700 border-2 rounded-full">
//                 Apply Coupon
//               </button>
//               <button className="px-6 ml-10 py-2 items-center font-bold text-white text-lg bg-sky-700 border-2 rounded-full">
//                 Update Cart
//               </button>
//             </div> */}
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center mt-20">
//             <h2 className="text-2xl font-semibold text-gray-700">
//               Your cart is currently empty.
//             </h2>
//             <Link
//               to="/products"
//               className="mt-5 px-8 py-3 font-bold text-white text-xl bg-sky-700 border-2 rounded-full"
//             >
//               RETURN TO SHOP
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

function Cart({ topMargin, cartItems, setCartItems }) {
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));
  let navigate = useNavigate();

  function handleremove(index) {
    const filtered = cartItems.filter((_, i) => i !== index);
    setCartItems(filtered);

    const updatedQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(updatedQuantities);
  }

  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  const calculateSubtotal = (price, quantity) => price * quantity;
  const total = cartItems.reduce(
    (acc, item, index) =>
      acc + calculateSubtotal(item.price, quantities[index]),
    0
  );

  const handleProceed = () => {
    navigate("/checkout");
  };

  return (
    <div
      className="w-full h-full flex flex-col justify-center font-sans bg-gray-200 p-4 md:p-10"
      style={{ marginTop: `${topMargin}px` }}
    >
      <p className="text-lg md:text-2xl mb-2 text-black flex">
        PharmaTrade {`>`} Cart
      </p>
      <div className="w-full bg-white rounded-lg shadow-lg p-5">
        <h2 className="text-xl md:text-2xl mb-4">Cart</h2>
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="w-full lg:w-2/3">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-medium text-blue-950 tracking-wider">
                      Image
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-medium text-blue-950 tracking-wider">
                      Product Name
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-medium text-blue-950 tracking-wider">
                      Price
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-medium text-blue-950 tracking-wider">
                      Quantity
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-medium text-blue-950 tracking-wider">
                      Subtotal
                    </th>
                    <th className="px-2 md:px-5 py-2 md:py-3 text-left font-medium text-blue-950 tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="px-2 md:px-3 py-2 whitespace-nowrap">
                        <img
                          className="h-16 w-16 rounded-lg"
                          src={item.src}
                          alt={item.id}
                        />
                      </td>
                      <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                        ${item.price}
                      </td>
                      <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                        <input
                          type="number"
                          value={quantities[index]}
                          onChange={(e) =>
                            handleQuantityChange(index, Number(e.target.value))
                          }
                          className="text-xl border rounded-lg p-1 w-16"
                          min="1"
                        />
                      </td>
                      <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                        <strong>
                          ${calculateSubtotal(item.price, quantities[index])}
                        </strong>
                      </td>
                      <td className="px-2 md:px-4 py-3 whitespace-nowrap">
                        <button
                          className="text-red-600"
                          onClick={() => handleremove(index)}
                        >
                          <RiDeleteBinLine className="w-7 h-9" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex gap-4">
                <input
                  placeholder="Coupon Code"
                  className="px-4 py-2 w-24 bg-gray-100 text-lg border rounded-full"
                />
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="px-6 py-2 font-bold text-white text-lg bg-sky-700 rounded-full">
                    Apply Coupon
                  </button>
                  <button className="px-6 py-2 font-bold text-white text-lg bg-sky-700 rounded-full">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-5">
                <h2 className="text-xl md:text-2xl mb-4 text-center">
                  Cart Totals
                </h2>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 font-medium">Subtotal</td>
                      <td className="px-4 py-2 text-right">${total}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Total</td>
                      <td className="px-4 py-2 text-right">${total}</td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="w-full mt-4 px-4 py-2 font-bold text-white text-lg bg-sky-700 rounded-full"
                  onClick={handleProceed}
                >
                  Proceed to checkout
                </button>
                <button className="w-full mt-2 px-4 py-2 font-bold text-black text-lg bg-slate-300 rounded-full">
                  <Link to="/products">Continue Shopping</Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your cart is currently empty.
            </h2>
            <Link
              to="/products"
              className="mt-5 px-8 py-3 font-bold text-white text-xl bg-sky-700 rounded-full"
            >
              RETURN TO SHOP
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
