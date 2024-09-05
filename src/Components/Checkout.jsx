// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Checkout({ topMargin }) {
//   const [isActive, setIsActive] = useState(true);
//   const [ischeck, setIsCheck] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     streetAddress: "",
//     townCity: "",
//     stateCountry: "",
//     postalCode: "",
//     email: "",
//     phone: "",
//   });

//   const addresses = [
//     {
//       name: "Ram",
//       lastname: "Manda",
//       Address: "Dollars",
//       City: "Dollars",
//       State: "US",
//       Country: "US",
//       Pin: "78906",
//       email: "ram@gmail.com",
//       phone: "7894561230",
//     },
//     {
//       name: "John",
//       lastname: "Doe",
//       Address: "Main Street",
//       City: "Cityville",
//       State: "CA",
//       Country: "US",
//       Pin: "12345",
//       email: "john@example.com",
//       phone: "1234567890",
//     },
//     {
//       name: "Jane",
//       lastname: "Smith",
//       Address: "Park Avenue",
//       City: "Metropolis",
//       State: "NY",
//       Country: "US",
//       Pin: "67890",
//       email: "jane@example.com",
//       phone: "0987654321",
//     },
//   ];

//   const handleClick = () => {
//     setIsActive(true);
//     setIsCheck(!ischeck);
//   };

//   const handleCheck = () => {
//     setIsCheck(!ischeck);
//     setIsActive(!isActive);
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
//   const handleRadioChange = (index) => {
//     setSelectedAddress(index);
//     setFormData({
//       firstName: addresses[index].name,
//       lastName: addresses[index].lastname,
//       streetAddress: addresses[index].Address,
//       townCity: addresses[index].City,
//       stateCountry: addresses[index].State,
//       postalCode: addresses[index].Pin,
//       email: addresses[index].email,
//       phone: addresses[index].phone,
//     });
//   };

//   const handleNewAddress = () => {
//     setSelectedAddress(null);
//     setFormData({
//       firstName: "",
//       lastName: "",
//       streetAddress: "",
//       townCity: "",
//       stateCountry: "",
//       postalCode: "",
//       email: "",
//       phone: "",
//     });
//   };

//   return (
//     <div
//       style={{ marginTop: `${topMargin}px` }}
//       className="bg-slate-200 w-full h-fit text-lg text-black px-12 py-2"
//     >
//       <h1 className="text-2xl mb-2 text-black">PharmEtrade {`>`} Checkout</h1>
//       <div className="bg-white rounded-lg p-4 w-full h-full">
//         <div className="flex justify-between">
//           <div className="flex flex-col">
//             <h1 className="text-2xl font-semibold text-black mb-2">Checkout</h1>
//             <div className="flex mb-4 flex-col">
//               <h1>
//                 Have a coupon?
//                 </h1>
//                 <h1>
//                 <a href="#" className="text-cart underline">
//                   {" "}
//                   CLICK HERE TO ENTER YOUR CODE
//                 </a>
//                 </h1>
              
//             </div>
//             <h1 className="mb-4 text-xl font-semibold">Billing Details</h1>
//           </div>
//           <div className="border shadow-md rounded-md w-[60%]">
//             <div className="p-2 mx-4">
//               <h1 className="border-b-2 text-base">Your Address</h1>
//              <div  onClick={handleNewAddress} className="ml-1">
//               <input
//                     type="radio"
//                     // checked={selectedAddress === index}
//                     className="mr-2"
//                     // onChange={() => handleRadioChange(index)}
//                   />
//               <button
//                 className="text-base underline"
//                 onClick={handleNewAddress}
//               >
//                 New Address
//               </button>
//               </div>
//               {addresses.map((address, index) => (
//                 <div
//                   key={index}
//                   className="border rounded-md flex my-2 p-1 bg-pink-50 border-orange-200"
//                 >
//                   <input
//                     type="radio"
//                     checked={selectedAddress === index}
//                     className="mr-2"
//                     onChange={() => handleRadioChange(index)}
//                   />{" "}
//                   <div className="flex items-center justify-center text-xs">
//                     <h1 className="font-semibold">{address.name},</h1>
//                     <h1 className=" mx-1">{address.lastname},</h1>
//                     <p className="">{address.Address},</p>
//                     <p className=" mx-1">{address.City},</p>
//                     <p className="">{address.State},</p>
//                     <p className=" mx-1">{address.Country},</p>
//                     <p className="">{address.Pin},</p>
//                     <p className=" mx-1">{address.email},</p>
//                     <p className="">{address.phone}</p>
//                   </div>
//                 </div>
//               ))}

//               {/* <button
//                 className="text-base underline"
//                 onClick={handleNewAddress}
//               >
//                 New Address
//               </button> */}
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row w-full gap-10">
//           <div className="w-[65%]">
//             <form>
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex gap-2 mb-2 w-full flex-col">
//                   <label>First name</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 h-fit"
//                     placeholder="Enter FirstName"
//                     value={formData.firstName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, firstName: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="flex gap-2 mb-2 w-full flex-col">
//                   <label>Last name</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 h-fit"
//                     placeholder="Enter LastName"
//                     value={formData.lastName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, lastName: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Street Address</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.streetAddress}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         streetAddress: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Town / City</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.townCity}
//                     onChange={(e) =>
//                       setFormData({ ...formData, townCity: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>State / Country</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.stateCountry}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         stateCountry: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Postal code</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.postalCode}
//                     onChange={(e) =>
//                       setFormData({ ...formData, postalCode: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Email</label>
//                   <input
//                     required
//                     type="email"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Phone</label>
//                   <input
//                     required
//                     type="tel"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               <div className="flex mb-2 gap-2 flex-col">
//                 <label>Subscribe for SMS updates</label>
//                 <div className="flex">
//                   <input
//                     type="checkbox"
//                     id="consentCheckbox"
//                     className="h-4 w-4 mt-1 text-blue-600 rounded focus:ring-blue-500"
//                     checked={isChecked}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label
//                     htmlFor="consentCheckbox"
//                     className="ml-2 text-lg text-gray-700 w-full"
//                   >
//                     By checking this box and entering your phone number above,
//                     you consent to receive marketing text messages (e.g.{" "}
//                     <span className="font-semibold">promos</span>,{" "}
//                     <span className="font-semibold">cart reminders</span>) from{" "}
//                     <span className="font-semibold">[company name]</span> at the
//                     number provided, including messages sent by autodialer.
//                     Consent is not a condition of purchase. Msg & data rates may
//                     apply. Msg frequency varies. Unsubscribe at any time by
//                     replying STOP or clicking the unsubscribe link (where
//                     available).{" "}
//                     <a href="#" className="text-blue-600 hover:underline">
//                       Privacy Policy
//                     </a>{" "}
//                     &{" "}
//                     <a href="#" className="text-blue-600 hover:underline">
//                       Terms of Service
//                     </a>
//                     .
//                   </label>
//                 </div>
//               </div>
//               <div className="flex mb-2 gap-2 flex-col">
//                 <label>Additional Info</label>
//                 <input
//                   required
//                   type="text"
//                   className="border-check border-2 rounded-md p-3 w-full h-fit"
//                 />
//               </div>
//             </form>
//           </div>

//           <div className="bg-gray-100 w-[35%] p-4 h-fit mt-5 ">
//             <h1 className="text-xl font-semibold text-black mb-2">
//               Your Order
//             </h1>
//             <div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Zahler Real Calm Multivitamin × 1 </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Oral irrigator Electric × 1 </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Subtotal </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Total </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-4 w-full text-black">
//               <h2 className="border-b pb-2 border-gray-300 font-bold">
//                 SHIPPING METHODS
//               </h2>
//               <div className="flex justify-between p-4">
//                 <span className="">$0.00</span>
//                 <span>Shipping Method</span>
//               </div>
//             </div>
//             <div className="bg-white mb-4 p-4 border-black w-full h-fit">
//               <div className="mb-4">
//                 <div className="flex flex-row gap-2 items-center mb-2">
//                   <button
//                     className={
//                       isActive
//                         ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
//                         : "w-4 h-4 border-black border-2 rounded-full"
//                     }
//                     onClick={handleClick}
//                   >
//                     {" "}
//                   </button>{" "}
//                   <h1> Details</h1>
//                 </div>
//                 {isActive && (
//                   <div>
//                     <p className="mb-4">
//                       Make your payment directly into our bank account. Please
//                       use your Order ID as the payment reference. Your order
//                       will not be shipped until the funds have cleared in our
//                       account.
//                     </p>{" "}
//                   </div>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <div className="flex flex-row gap-2 items-center mb-2">
//                   <button
//                     className={
//                       ischeck
//                         ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
//                         : "w-4 h-4 border-black border-2 rounded-full"
//                     }
//                     onClick={handleCheck}
//                   >
//                     {" "}
//                   </button>{" "}
//                   <h1> Check payments</h1>
//                 </div>
//                 {ischeck && (
//                   <div>
//                     <p>
//                       Your personal data will be used to process your order,
//                       support your experience throughout this website, and for
//                       other purposes described in our{" "}
//                       <a href="#" className="text-cart underline">
//                         privacy policy.
//                       </a>
//                       <br />
//                     </p>{" "}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <button className="bg-blue-900 px-4 py-2 rounded-3xl text-white font-semibold">
//                 <Link to="/order">Place order</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;








// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import cross from '../assets/wrong.png';
// import plus from '../assets/Icons/plus[1].png';
// import logo from '../assets/logo2.png';
// import payment from '../assets/Icons/paymenticons.png'

// import {
//   Box,
//   TextField,
// } from "@mui/material";

// function Address({ topMargin }) {
//   const [isActive, setIsActive] = useState(true);
//   const [ischeck, setIsCheck] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     streetAddress: "",
//     townCity: "",
//     stateCountry: "",
//     postalCode: "",
//     email: "",
//     phone: "",
//   });

  // const [isPopupShow,setIsPopupShow]= useState(false)
  // const handleopen =()=>{
  //     setIsPopupShow (true)
  // }
  // const details = {
  //   name: "Ram",
  //   lastname: 'Manda',
  //   Address: "Dollars",
  //   City: "Dollars",
  //   State: "US",
  //   Country: 'US',
  //   Pin: '78906',
  //   email: "ram@gmail.com",
  //   phone: 7894561230
  // };

  // const [isTotalHidden, setIsTotalHidden] = useState(false);

  // Function to handle the "Use this address" button click
  // const handleUseAddress = () => {
  //   setIsTotalHidden(true);
  // };

  // const details = [
  //   {
  //     name: "Ram",
  //     // lastname: "Smith",
  //     // Address: 'h-no:4-567/Dollars',
  //     City: "Dollars",
  //     State: "Dollars",
  //     Country: "US",
  //     Pin: 56789,
  //     email: "ram@example.com",
  //     phone: "+1234567890"
  //   }
  // ];

  // const [showPopUp, setShowPopUp] = useState(false);

  // const handleOpen = () => {
  //   setShowPopUp(true);
  //   document.body.style.overflow = 'hidden'; // Disable scrolling
  // };

  // const handleRemove = () => {
  //   setShowPopUp(false);
  //   document.body.style.overflow = 'auto'; // Enable scrolling
  // };

  // const handleUseAddress = () => {
  //   setFormData({
  //     ...formData,
  //     firstName: details.name,
  //     lastName: details.lastname,
  //     streetAddress: details.Address,
  //     townCity: details.City,
  //     stateCountry: details.State,
  //     postalCode: details.Pin,
  //     email: details.email,
  //     phone: details.phone
  //   });
  //   handleRemove();
  // };

  // return (
  //   <div
  //     style={{ marginTop: `${topMargin}px` }}
  //     className="bg-white w-full h-fit text-lg text-black px-12 py-2 relative"
  //   >
  //     <img src={logo} className="w-48 h-16" alt="Logo" />
  //     <h1 className="text-3xl flex justify-center items-center text-black mb-3">Checkout</h1>
  //     <div className="bg-white p-4 w-full h-full border-t">
  //       <div className="flex flex-col">
{/* <div>
          <h1 className="text-orange-700 font-semibold text-lg my-2">1 Select a delivery and service address</h1>
          <div className="flex justify-between">
          
           
            <div className="border shadow-md rounded-md w-[75%] h-full">
              <div className="p-2 mx-4">
                <h1 className="border-b-2 text-base">Your Address</h1>
                <div className="border rounded-md flex my-2 p-2 bg-pink-50 border-orange-200">
                  <input type="radio" checked className="mr-2" readOnly />{" "}
                  <div className="flex items-center justify-center text-base">
                    <h1 className="font-semibold">{details.name},</h1>
                    <h1 className=" mx-1">{details.lastname},</h1>
                    <p className="">{details.Address},</p>
                    <p className=" mx-1">{details.City},</p>
                    <p className="">{details.State},</p>
                    <p className=" mx-1">{details.Country},</p>
                    <p className="">{details.Pin},</p>
                    <p className=" mx-1">{details.email},</p>
                    <p className="">{details.phone}</p>
                    <p className="mx-2 text-sm hover:text-red-500 hover:underline font-semibold text-cyan-500">Edit Address |</p>
                    <div>
                      <p className="text-sm hover:text-red-500 hover:underline font-semibold text-cyan-500">Delivery Instructions</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex my-2 cursor-pointer" onClick={handleOpen}>
                    <img src={plus} className="w-6 h-5" alt="Add Icon" />
                    <h1 className="text-base hover:text-red-400 hover:underline text-cyan-500">Add a new address</h1>
                  </div>

                  {showPopUp && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="bg-white p-6 w-[50%] rounded-md shadow-lg relative">
                        <div className="flex justify-between border-b pb-4 items-center">
                          <h1>Add a new address</h1>
                          <img src={cross} className="w-5 h-5 cursor-pointer" onClick={handleRemove} alt="Close Icon" />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="First Name"
                            id="outlined-size-small"
                            name="First_Name"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="Phone Number"
                            id="outlined-size-small"
                            name="Phone_Number"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="Pin Code"
                            id="outlined-size-small"
                            name="Pin_Code"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="Flat, House-No, Building, Company"
                            id="outlined-size-small"
                            name="Flat_HouseNo_Building_Company"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="Area, Street"
                            id="outlined-size-small"
                            name="Area_Street"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="LandMark"
                            id="outlined-size-small"
                            name="LandMark"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="Town/City"
                            id="outlined-size-small"
                            name="Town_City"
                            size="small"
                            className="w-full"
                          />
                        </div>

                        <div className="my-4">
                          <input type="checkbox" id="default-address" />
                          <label htmlFor="default-address" className="ml-2">Make this my default address</label>
                        </div>

                        <div className="my-4 cursor-pointer">
                          <h1>Delivery instructions (optional)</h1>
                          <p className="hover:text-red-400 hover:underline text-base">
                            Add Preference, notes, access codes and more
                          </p>
                        </div>

                        <button
                          className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white"
                          onClick={handleUseAddress}
                        >
                          Use this address
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white mt-6"
                  onClick={handleUseAddress}
                >
                  Use this address
                </button>
              </div>

             
             </div>
           
         

            <div className="w-[25%] h-full border ml-6 p-3 rounded-lg shadow-lg">
              <div className="border-b ">
                <div className="flex items-center justify-center">
                  <button className="border rounded-full text-sm flex justify-center items-center w-32 h-8 bg-blue-900 text-white">Use this address</button>
                </div>
                <div className="text-xs flex items-center justify-center flex-col my-1 border-b">
                  <p>Choose a shipping address and payment</p>
                  <p>method to calculate shipping, handling and</p>
                  <p>tax.</p>
                </div>
                <div>
                  <h1 className="font-semibold text-xl my-2">Order Summary</h1>
                </div>
                <div className="flex justify-between text-sm mt-3">
                  <p>Items :</p>
                  <p>--</p>
                </div>
                <div className="flex justify-between text-sm border-b mb-2">
                  <p>Delivery :</p>
                  <p>--</p>
                </div>
                <div className="flex justify-between text-red-500 font-semibold">
                  <p>Order Total:</p>
                  <p>$10,000</p>
                </div>
              </div>

              <div className="my-3 flex justify-center items-center">
                <p className="text-xs">This order contains a gift</p>
              </div>
              
            </div>
          </div>
          </div> */}


{/* <div>

      <h1 className="text-orange-700 font-semibold text-lg my-2">1 Select a delivery and service address</h1>
      <div className="flex justify-between">
      {!isTotalHidden && (
        <div className="border shadow-md rounded-md h-full w-full">
          <div className="p-2 mx-4">
            <h1 className="border-b-2 text-base">Your Address</h1>
            <div className="border rounded-md flex my-2 p-2 bg-pink-50 border-orange-200">
              <input type="radio" checked className="mr-2" readOnly />
              <div className="flex items-center justify-center text-base">
                <h1 className="font-semibold">{details[0].name},</h1>
                {/* <h1 className="mx-1">{details[0].lastname},</h1> */}
                {/* <p>{details[0].Address},</p> */}
            //     <p className="mx-1">{details[0].City},</p>
            //     <p>{details[0].State},</p>
            //     <p className="mx-1">{details[0].Country},</p>
            //     <p>{details[0].Pin},</p>
            //     <p className="">{details[0].email},</p>
            //     <p>{details[0].phone}</p>
            //     <p className="mx-2 text-sm flex hover:text-red-500 hover:underline font-semibold text-cyan-500">Edit  </p>
            //     <div>
            //       <p className="text-sm hover:text-red-500 hover:underline font-semibold text-cyan-500">Address</p>
            //     </div>
            //   </div>
            // </div>

            {/* Hide this button after it's clicked */}
      //       <button
      //         className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white mt-6"
      //         onClick={handleUseAddress}
      //       >
      //         Use this address
      //       </button>
      //     </div>
      //   </div>
      // )}



//         <div className="flex justify-between w-full">

//         <div className="flex flex-col w-[70%]">
//           {isTotalHidden && (

//             <div className='flex flex-col justify-between mx-2 border-b'>
//               <div className="flex justify-between">
//               <h1>1 Delivery address</h1>
//               <div>
//                 {
//                   details.map((detail, index) => (
//                     <div key={index}>
//                       <p>{detail.name}</p>
//                       <p>{detail.Address}</p>
//                       <p>{detail.City}</p>
//                       <div className='flex'>
//                         <p>{detail.State},</p>
//                         <p className='mx-2'>{detail.Country},</p>
//                         <p>{detail.Pin}</p>
//                       </div>
//                       <p className='text-cyan-500 hover:text-red-400 hover:underline'>Add a new address</p>
//                     </div>
//                   ))
//                 }
//               </div>
//               <div>
//                 <p>Change</p>
//               </div>
// </div> */}
              {/* Add your additional logic or content here */}


              {/* <div>
                    <h2 className='text-orange-500'>2 Select a payment method</h2>

                    <div className='border rounded-md p-4'>
                        <h1 className='border-b text-lg'>Your available balance</h1>

                        <div className='flex items-center my-3'>
                            <img src={plus} className='w-5 h-5 mr-3' />
                            <TextField
                                label="Enter Code"
                                id="outlined-size-small"
                                name="Enter Code"
                                //   value={formData.First_Name}
                                //   onChange={handleInputChange}
                                //   error={!!errors.First_Name}
                                size="small"
                                className="w-52 "
                            />
                            <button className='border mx-3 w-14 h-7 flex items-center justify-center rounded-full'>Apply</button>
                        </div>

                        <div>
                            <h1 className='border-b'>Another payment method</h1>
                        </div>

                        <div>
                            <div className='flex flex-col'>
                                <div className='flex my-2'>
                                <input type='radio'onClick={handleopen} />
                                <span className="mx-2">Credit or debit card</span>
                                </div>
                                <div>
                                <img src={payment} className='w-80 h-9'/>
                                </div>
                                {
                                    isPopupShow &&(
                                        <div className='flex my-2'>
                                            <img src={plus} className='w-5 h-5'/>
                                            <p>Enter  card details</p>
                                            </div>

                                    )
                                }

                            </div>

                            <div className='flex my-2'>
                                <input type='radio' />
                                <span className="mx-2">
                                    Net Banking
                                </span>
                            </div>
                            <div className='flex my-2'>
                                <input type='radio' />
                                <span className="mx-2">
                                   EMI
                                </span>
                            </div>

                            <div className='flex my-2'>
                                <input type='radio' />
                                <span className="mx-2">
                                Cash on Delivery
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
          )}
        </div> */}

        {/* <div className=" w-[30%]  ml-6 flex flex-col pt-2 items-center">
          
            <div className="border-b ">
              <div className="flex items-center justify-center">
                <button className="border rounded-full text-sm flex justify-center items-center w-32 h-8 bg-blue-900 text-white">Use</button>
              </div>
              <div className="text-xs flex items-center justify-center flex-col my-1 border-b">
                <p>Choose a shipping address and payment</p>
                <p>method to calculate shipping, handling and</p>
                <p>tax.</p>
              </div>
              <div>
                <h1 className="font-semibold text-xl my-2">Order Summary</h1>
              </div>
              <div className="flex justify-between text-sm mt-3">
                <p>Items :</p>
                <p>--</p>
              </div>
              <div className="flex justify-between text-sm border-b mb-2">
                <p>Delivery :</p>
                <p>--</p>
              </div>
              <div className="flex justify-between text-red-500 font-semibold">
                <p>Order Total:</p>
                <p>$10,000</p>
              </div>
            </div>
         

        
        </div> */}
        {/* </div>







      </div>
    </div> */}
          
        {/* other components start */}
//         <div className="w-[75%]">
//          <div className="border-b my-3">
//              <h1>2 Payment method</h1>
//          </div>
//          <div className="border-b my-3">
//              <h1>3 Offers</h1>
//          </div>
//          <div className="border-b my-3">
//              <h1>4 Items and delivery</h1>
//          </div>

//          </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Address;




import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import cross from '../assets/letter-x[1].png';
import plus from '../assets/Icons/plus[1].png';
import logo from '../assets/logo2.png';
import payment from '../assets/Icons/paymenticons.png'
import AmericanExpress from '../assets/AmericanExpress.png'
import visa from '../assets/visa.png'
import Discover from '../assets/Discover.png'
import dotspaymenticon from '../assets/dotpaymenticon.png'
import net from '../assets/net.png'
import dropdown from '../assets/Icons/dropDownb.png'
import offer from '../assets/offers_1.png'
import {
  Box,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import { fetchProductByIdApi } from "../Api/ProductApi";

function Address({ topMargin, totalAmount }) {
  const fetchData = useSelector((state) => state.product.Products);
  const [searchParams] = useSearchParams();
  const total = searchParams.get("total");
  
  
  console.log("ffffffff--->", totalAmount)
  const [isActive, setIsActive] = useState(true);
  const [ischeck, setIsCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    townCity: "",
    stateCountry: "",
    postalCode: "",
    email: "",
    phone: "",
  });

  // const [isPopupShow, setIsPopupShow] = useState(false)
  // const [isOpenAddress, setIsOpenAddress] = useState(false)
  const handleopen = () => {
    setIsPopupShow(true)
  }

  const handleOpenAddress = () => {
    Navigate('/address')
  }

  const [isTotalHidden, setIsTotalHidden] = useState(false);

  // Function to handle the "Use this address" button click
  const handleUseAddress = () => {
    setIsTotalHidden(true);
  };


  const [formErrors, setFormErrors] = useState({});


  const [showWeekendOptions, setShowWeekendOptions] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const details = [
    {
      name: "Ram",
      // lastname: "Smith",
      // Address: 'h-no:4-567/Dollars',
      City: "Dollars",
      State: "Dollars",
      Country: "US",
      Pin: 56789,
      email: "ram@example.com",
      phone: "+1234567890"
    }
  ];


  const itemsdetails = [
    {
      // img: 'offer',  // Assuming 'offer' is a string representing the image or icon name
      name: "Pharmacy Pharmetrade",
      type: "Syrup",
      Strength: '500mg',
      Price: 320,
      purchase: "sold by",
      Company_Name: 'Pharmetrade',
      option: "Choose a delivery option",
      delivery1: 'Monday 9 Sept',
      deliivery_type1: 'FREE Delivery'


    }

  ];

  const [selectedPayment, setSelectedPayment] = useState(false);

  const [isPopupShow, setIsPopupShow] = useState(false);
  const [isCardPopup, setIsCardPopup] = useState(false);
  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    if (paymentMethod === 'card') {
      setIsPopupShow(true);
    } else {
      setIsPopupShow(false);
      setIsCardPopup(false);
    }
  };
  const handleCardOpen = () => {
    setIsCardPopup(true);
  };

  const handleCardRemove = () => {
    setIsCardPopup(false);
  };

  // card pop up open
  //  const[ isCardPopup, SetIsCardPopup] =useState(false)

  //  const handlecardopen =()=>{
  //  SetIsCardPopup(true)
  //  }

  //  const handlecardremove =()=>{
  //  SetIsCardPopup(false)
  // }
  useEffect(() => {
    if (shortPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },);

  const [showPopUp, setShowPopUp] = useState(false);
  const [shortPopup, setShortPopup] = useState(false);
  const [selectedAddressType, setSelectedAddressType] = useState('');

  const handleRemove = () => setShowPopUp(false);
  const handleshortpopOpen = () => setShortPopup(!shortPopup);

  const handleAddressTypeClick = (type) => {
    setSelectedAddressType(type);
  };


  const handlepopOpen = () => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    setShowPopUp(true);
  };


  const [iscardEmiopen, SetIsCardEmiOpen] = useState(false)

  const handleCardemiOpen = () => {
    SetIsCardEmiOpen(true)
  }

  const handleCardemiremove = () => {
    SetIsCardEmiOpen(false)
  }


  const handleAddaddress = () => {
    setShortPopup(true)
  }
  const handleAddaddressremove = () => {
    setShortPopup(false)
  }

  const [isEmiPopup, SetIsEmiPopup] = useState(false)

  const handleemiopen = () => {
    SetIsEmiPopup(true)
  }

  const handleUseAddressbutton = () => {
    const errors = {};

    // Check for empty required fields and set error messages
    if (!document.getElementById('First_Name').value) {
      errors.First_Name = 'First Name is required';
    }
    if (!document.getElementById('Phone_Number').value) {
      errors.Phone_Number = 'Phone Number is required';
    }
    if (!document.getElementById('Pin_Code').value) {
      errors.Pin_Code = 'Pin Code is required';
    }
    if (!document.getElementById('Flat_HouseNo_Building_Company').value) {
      errors.Flat_HouseNo_Building_Company = 'Flat_HouseNo_Building_Company is required';
    }
    if (!document.getElementById('Area_Street').value) {
      errors.Area_Street = 'Pin Code is required';
    }
    if (!document.getElementById('LandMark').value) {
      errors.LandMark = 'LandMark is required';
    }
    if (!document.getElementById('Town_City').value) {
      errors.Town_City = 'Town_City is required';
    }


    setFormErrors(errors);

    // If no errors, proceed with using the address
    if (Object.keys(errors).length === 0) {
      // Handle the logic for using the address
      alert('Address used successfully!');
    }
  };
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/app')
  }

  // year month drop down

  const generateYears = (startYear, endYear) => {
    let years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const generateMonths = () => {
    const months = [
     1,2,3,4,5,6,7,8,9,10,11,12
    ];
    return months;
  };

  const currentYear = new Date().getFullYear();
  const futureYears = generateYears(2024, currentYear + 40); // Including future years (e.g., 10 years ahead)
  const months = generateMonths();

  return (
    <div
      style={{ marginTop: `${topMargin}px` }}
      className="bg-white w-full h-fit text-lg text-black px-12 py-2 relative"
    >
      <img src={logo} className="w-48 h-16 cursor-pointer" alt='logo' onClick={ handleNavigate} />
      <h1 className="text-3xl flex justify-center items-center text-black mb-3">Checkout</h1>
      <div className="bg-white p-4 w-full h-full border-t">
        <div className="flex flex-col">

          <div>

            <h1 className="text-orange-700 font-semibold text-lg my-2">1 Select a delivery and service address</h1>
            <div className="flex justify-evenly">

              {!isTotalHidden && (
                // {isOpenAddress &&
                <div className="flex justify-between">
                  <div className="max-w-screen-Largest">
                    <div className="max-w-screen-Laptop border shadow-md rounded-md h-full">
                      <div className="p-2 mx-8 ">
                        <h1 className="border-b-2 text-base">Your Address</h1>
                        <div className="border flex-col rounded-md flex my-2 p-2  px-8  bg-pink-50 border-orange-200">
                          <div className="flex">
                            <input type="radio" checked className="mr-2" readOnly />
                            <div className="flex items-center justify-center text-base">
                              <h1 className="font-semibold">{details[0].name},</h1>
                              {/* <h1 className="mx-1">{details[0].lastname},</h1> */}
                              <p>{details[0].Address},</p>
                              <p className="mx-1">{details[0].City},</p>
                              <p>{details[0].State},</p>
                              <p className="mx-1">{details[0].Country},</p>
                              <p>{details[0].Pin},</p>
                              <p className="mx-1">{details[0].email},</p>
                              <p>{details[0].phone}</p>
                              <div className="flex hover:underline hover:text-red-500 cursor-pointer ml-2">
                                <p className=" text-sm    text-cyan-500">Edit </p>
                                <p className=" text-sm  text-cyan-500">Address </p>
                              </div>
                            </div>
                          </div>


                          <div>
                            <p className=" text-sm  ml-5  text-cyan-500">delivery instruction </p>
                          </div>

                        </div>
                        <div className="flex cursor-pointer">
                          <img src={plus} className="w-5 h-5" />
                          <h1 className="hover:text-red-400 hover:underline text-cyan-600" onClick={handlepopOpen}>Add a new address </h1>


                          {showPopUp && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                              <div className="bg-white p-6 w-[45%] rounded-md shadow-lg relative overflow-y-scroll max-h-[90vh]">
                                <div className="flex justify-between border-b pb-4 items-center">
                                  <h1>Add a new address</h1>
                                  <img
                                    src={cross} // replace with the actual path to your close icon
                                    className="w-5 h-5 cursor-pointer"
                                    onClick={handleRemove}
                                    alt="Close Icon"
                                  />
                                </div>
                                <div className="my-4">
                                  <TextField
                                    label="First Name"
                                    id="First_Name"
                                    name="First_Name"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.First_Name}
                                    helperText={formErrors.First_Name}
                                  />
                                </div>
                                <div className="my-4">
                                  <TextField
                                    label="Phone Number"
                                    id="Phone_Number"
                                    name="Phone_Number"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.Phone_Number}
                                    helperText={formErrors.Phone_Number}
                                  />
                                </div>
                                <div className="my-4">
                                  <TextField
                                    label="Pin Code"
                                    id="Pin_Code"
                                    name="Pin_Code"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.Pin_Code}
                                    helperText={formErrors.Pin_Code}
                                  />
                                </div>
                                <div className="my-4">
                                  <TextField
                                    label="Flat, House-No, Building, Company"
                                    id="Flat_HouseNo_Building_Company"
                                    name="Flat_HouseNo_Building_Company"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.Flat_HouseNo_Building_Company}
                                    helperText={formErrors.Flat_HouseNo_Building_Company}
                                  />
                                </div>
                                <div className="my-4">
                                  <TextField
                                    label="Area, Street"
                                    id="Area_Street"
                                    name="Area_Street"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.Area_Street}
                                    helperText={formErrors.Area_Street}
                                  />
                                </div>
                                <div className="my-4">
                                  <TextField
                                    label="LandMark"
                                    id="LandMark"
                                    name="LandMark"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.LandMark}
                                    helperText={formErrors.LandMark}
                                  />
                                </div>
                                <div className="my-4">
                                  <TextField
                                    label="Town/City"
                                    id="Town_City"
                                    name="Town_City"
                                    size="small"
                                    className="w-full"
                                    error={!!formErrors.Town_City}
                                    helperText={formErrors.Town_City}
                                  />
                                </div>

                                <div className="my-4">
                                  <input type="checkbox" id="default-address" />
                                  <label htmlFor="default-address" className="ml-2">
                                    Make this my default address
                                  </label>
                                </div>

                                <div className="my-4 cursor-pointer">
                                  <h1>Delivery instructions (optional)</h1>
                                  <div className="flex" onClick={handleshortpopOpen}>
                                  <img src={dropdown} className="w-5 h-5 "/>
                                  <p
                                    className="hover:text-red-400 hover:underline text-base text-cyan-600"
                                   
                                  >
                                    Add Preference, notes, access codes and more
                                  </p>
                                  </div>

                                  {shortPopup && (
                                    <div>
                                      <div>
                                        <h1>Address Type</h1>
                                        <div className="flex">
                                          <h1
                                            className={`border text-base border-black p-1 rounded-full flex justify-center items-center w-16 h-7 cursor-pointer ${selectedAddressType === 'House' && 'bg-gray-300'}`}
                                            onClick={() => handleAddressTypeClick('House')}
                                          >
                                            House
                                          </h1>
                                          <h1
                                            className={`border text-base border-black p-1 mx-3 rounded-full flex justify-center items-center w-24 h-7 cursor-pointer ${selectedAddressType === 'Apartment' && 'bg-gray-300'}`}
                                            onClick={() => handleAddressTypeClick('Apartment')}
                                          >
                                            Apartment
                                          </h1>
                                          <h1
                                            className={`border text-base border-black p-1 rounded-full flex justify-center items-center w-18 h-7 cursor-pointer ${selectedAddressType === 'Business' && 'bg-gray-300'}`}
                                            onClick={() => handleAddressTypeClick('Business')}
                                          >
                                            Business
                                          </h1>
                                          <h1
                                            className={`border text-base border-black p-1 mx-3 rounded-full flex justify-center items-center w-16 h-7 cursor-pointer ${selectedAddressType === 'Other' && 'bg-gray-300'}`}
                                            onClick={() => handleAddressTypeClick('Other')}
                                          >
                                            Other
                                          </h1>
                                        </div>
                                      </div>

                                      <div className="my-4">
                                        {(selectedAddressType === 'House' || selectedAddressType === 'Apartment') && (
                                          <div className="border rounded-md shadow-md  p-4">
                                            <h1 className="text-sm">
                                              Independent house, villa, or builder floor (6 AM - 11 PM delivery)
                                            </h1>

                                            <div className="flex justify-evenly flex-col mt-4">
                                              <div className="flex flex-col">
                                                <div
                                                  onClick={() => setShowWeekendOptions(!showWeekendOptions)}
                                                  className="cursor-pointer"
                                                >
                                                  <p className="text-base border-b hover:text-cyan-500">
                                                    Can you receive deliveries at this address on weekends?
                                                  </p>
                                                </div>
                                                {showWeekendOptions && (
                                                  <div className="flex border-b mt-2">
                                                    <div className="flex-col flex mr-4">
                                                      <h1>Saturday</h1>
                                                      <div className="flex justify-between mt-1">
                                                        <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6">
                                                          Yes
                                                        </p>
                                                        <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6">
                                                          No
                                                        </p>
                                                      </div>
                                                    </div>
                                                    <div className="flex-col flex">
                                                      <h1>Sunday</h1>
                                                      <div className="flex justify-between mt-1">
                                                        <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6">
                                                          Yes
                                                        </p>
                                                        <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6">
                                                          No
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                )}
                                              </div>

                                              <div className="flex flex-col mt-4">
                                                <div
                                                  onClick={() => setShowInstructions(!showInstructions)}
                                                  className="cursor-pointer"
                                                >
                                                  <p className="border-b text-base hover:text-cyan-500">
                                                    Do we need additional instructions to deliver to this address?
                                                  </p>
                                                </div>
                                                {showInstructions && (
                                                  <div className="mt-2">
                                                    <textarea
                                                      type="text"
                                                      className="w-96 h-20 border border-black outline-none"
                                                      placeholder="provide details such as building description , a nearby landmark, or other navigation instructions."

                                                    />
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        )}

                                        {(selectedAddressType === 'Business' || selectedAddressType === 'Other') && (
                                          <div className="border rounded-md shadow-md  p-4">
                                            <h1 className="text-sm">
                                              Commercial building, office, or store (10 AM - 7 PM delivery)
                                            </h1>
                                            <div className="mt-3 border-b pb-2">
                                              <div className="flex ">
                                                <input type="checkbox" />
                                                <h1 className="mx-2">Monday</h1>

                                              </div>
                                              <div className="flex  ">
                                                <input type="checkbox" />
                                                <h1 className="mx-2">Tuesday</h1>
                                              </div>
                                              <div className="flex ">
                                                <input type="checkbox" />
                                                <h1 className="mx-2">Wednesday</h1>
                                              </div>
                                              <div className="flex ">
                                                <input type="checkbox" />
                                                <h1 className="mx-2">Thursday</h1>
                                              </div>
                                              <div className="flex ">
                                                <input type="checkbox" />
                                                <h1 className="mx-2">Friday</h1>
                                              </div>
                                              <div className="flex ">
                                                <input type="checkbox" />
                                                <h1 className="mx-2">Saturday</h1>
                                              </div>
                                              <div className="flex ">
                                                <input type="checkbox" />
                                                <h1 className="mx-2">Sunday</h1>
                                              </div>
                                            </div>

                                            <div className="flex flex-col mt-4">
                                              <div
                                                onClick={() => setShowInstructions(!showInstructions)}
                                                className="cursor-pointer"
                                              >
                                                <p className="border-b text-sm hover:text-cyan-500">
                                                  Do we need additional instructions to deliver to this address?
                                                </p>
                                              </div>
                                              {showInstructions && (
                                                <div className="mt-2">
                                                  <textarea
                                                    type="text"
                                                    className="w-96 h-20 border border-black outline-none"
                                                    placeholder="provide details such as building description , a nearby landmark, or other navigation instructions."
                                                  />
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div className="flex justify-between mt-6">
                                  <button
                                    className="w-48 border py-2 bg-orange-400 hover:bg-yellow-500 text-sm text-white"
                                    onClick={handleUseAddressbutton}
                                  >
                                    Use this address
                                  </button>
                                  <button
                                    className="w-48 border py-2 bg-gray-200 hover:bg-gray-300 text-sm"
                                    onClick={handleRemove}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>


                        {/* Hide this button after it's clicked */}
                        <button
                          className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white mt-6"
                          onClick={handleUseAddress}
                        >
                          Use this address
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* <div className=" w-[30%]  mx-16 border flex flex-col pt-2 items-center relative">

<div className="border-b fixed">
  <div className="flex items-center justify-center">
    <button className="border rounded-full text-sm flex justify-center items-center w-32 h-8 bg-blue-900 text-white">Use</button>
  </div>
  <div className="text-xs flex items-center justify-center flex-col my-1 border-b">
    <p>Choose a shipping address and payment</p>
    <p>method to calculate shipping, handling and</p>
    <p>tax.</p>
  </div>
  <div>
    <h1 className="font-semibold text-xl my-2">Order Summary</h1>
  </div>
  <div className="flex justify-between text-sm mt-3">
    <p>Items :</p>
    <p>--</p>
  </div>
  <div className="flex justify-between text-sm border-b mb-2">
    <p>Delivery :</p>
    <p>--</p>
  </div>
  <div className="flex justify-between text-red-500 font-semibold">
    <p>Order Total:</p>
    <p>$10,000</p>
  </div>
</div>



</div> */}


                </div>
              )}




              <div className="flex justify-between w-full">

                <div className="flex flex-col w-[70%]">
                  {isTotalHidden && (

                    <div className='flex flex-col justify-between mx-2 border-b w-full'>
                      <div className="flex justify-between">
                        <h1>1 Delivery address</h1>
                        <div>
                          {
                            details.map((detail, index) => (
                              <div key={index}>
                                <p>{detail.name}</p>
                                <p>{detail.Address}</p>
                                <p>{detail.City}</p>
                                <div className='flex'>
                                  <p>{detail.State},</p>
                                  <p className='mx-2'>{detail.Country},</p>
                                  <p>{detail.Pin}</p>
                                </div>
                                <p className='text-cyan-500 cursor-pointer hover:text-red-400 hover:underline' onClick={handleAddaddress}>Add delivery instruction</p>


                                {shortPopup && (
                                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white p-6 rounded-md shadow-lg max-h-[90vh] overflow-auto">
                                      <div className="flex justify-between">
                                        <h1>Address Type</h1>
                                        <img
                                          src={cross}
                                          onClick={handleAddaddressremove}
                                          className="w-5 h-4 cursor-pointer"
                                          alt="Close"
                                        />
                                      </div>
                                      <div className="flex mt-4">
                                        <h1
                                          className={`border text-base border-black p-1 rounded-full flex justify-center items-center w-16 h-7 cursor-pointer ${selectedAddressType === 'House' && 'bg-gray-300'}`}
                                          onClick={() => handleAddressTypeClick('House')}
                                        >
                                          House
                                        </h1>
                                        <h1
                                          className={`border text-base border-black p-1 mx-3 rounded-full flex justify-center items-center w-24 h-7 cursor-pointer ${selectedAddressType === 'Apartment' && 'bg-gray-300'}`}
                                          onClick={() => handleAddressTypeClick('Apartment')}
                                        >
                                          Apartment
                                        </h1>
                                        <h1
                                          className={`border text-base border-black p-1 rounded-full flex justify-center items-center w-18 h-7 cursor-pointer ${selectedAddressType === 'Business' && 'bg-gray-300'}`}
                                          onClick={() => handleAddressTypeClick('Business')}
                                        >
                                          Business
                                        </h1>
                                        <h1
                                          className={`border text-base border-black p-1 mx-3 rounded-full flex justify-center items-center w-16 h-7 cursor-pointer ${selectedAddressType === 'Other' && 'bg-gray-300'}`}
                                          onClick={() => handleAddressTypeClick('Other')}
                                        >
                                          Other
                                        </h1>
                                      </div>

                                      <div className="my-4">
                                        {(selectedAddressType === 'House' || selectedAddressType === 'Apartment') && (
                                          <div className="border rounded-md shadow-md p-4">
                                            <h1 className="text-sm">
                                              Independent house, villa, or builder floor (6 AM - 11 PM delivery)
                                            </h1>

                                            <div className="flex justify-evenly flex-col mt-4">
                                              <div className="flex flex-col">
                                                <div
                                                  onClick={() => setShowWeekendOptions(!showWeekendOptions)}
                                                  className="cursor-pointer"
                                                >
                                                  <p className="text-base border-b hover:text-cyan-500">
                                                    Can you receive deliveries at this address on weekends?
                                                  </p>
                                                </div>
                                                {showWeekendOptions && (
                                                  <div className="flex border-b mt-2">
                                                    <div className="flex-col flex mr-4">
                                                      <h1>Saturday</h1>
                                                      <div className="flex justify-between mt-1">
                                                        <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6 cursor-pointer">
                                                          Yes
                                                        </p>
                                                        <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6 cursor-pointer">
                                                          No
                                                        </p>
                                                      </div>
                                                    </div>
                                                    <div className="flex-col flex">
                                                      <h1>Sunday</h1>
                                                      <div className="flex justify-between mt-1">
                                                        <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6 cursor-pointer">
                                                          Yes
                                                        </p>
                                                        <p className="border hover:border-cyan-500 hover:bg-slate-400 w-12 flex items-center justify-center rounded-full border-black h-6 cursor-pointer">
                                                          No
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                )}
                                              </div>

                                              <div className="flex flex-col mt-4">
                                                <div
                                                  onClick={() => setShowInstructions(!showInstructions)}
                                                  className="cursor-pointer"
                                                >
                                                  <p className="border-b text-base hover:text-cyan-500">
                                                    Do we need additional instructions to deliver to this address?
                                                  </p>
                                                </div>
                                                {showInstructions && (
                                                  <div className="mt-2">
                                                    <textarea
                                                      className="w-96 h-20 border border-black outline-none"
                                                      placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions."
                                                    />
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        )}

                                        {(selectedAddressType === 'Business' || selectedAddressType === 'Other') && (
                                          <div className="border rounded-md shadow-md p-4">
                                            <h1 className="text-sm">
                                              Commercial building, office, or store (10 AM - 7 PM delivery)
                                            </h1>
                                            <div className="mt-3 border-b pb-2">
                                              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
                                                (day) => (
                                                  <div className="flex items-center mt-2" key={day}>
                                                    <input type="checkbox" />
                                                    <h1 className="mx-2">{day}</h1>
                                                  </div>
                                                )
                                              )}
                                            </div>

                                            <div className="flex flex-col mt-4">
                                              <div
                                                onClick={() => setShowInstructions(!showInstructions)}
                                                className="cursor-pointer"
                                              >
                                                <p className="border-b text-sm hover:text-cyan-500">
                                                  Do we need additional instructions to deliver to this address?
                                                </p>
                                              </div>
                                              {showInstructions && (
                                                <div className="mt-2">
                                                  <textarea
                                                    className="w-96 h-20 border border-black outline-none"
                                                    placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions."
                                                  />
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div className="flex justify-end">
                                        <button className="rounded-full bg-blue-900 text-white border w-40 h-8 flex items-center justify-center">
                                          Save Instructions
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))
                          }
                        </div>
                        <div>
                          <button onClick={handleOpenAddress} className="text-cyan-500">Change</button>
                        </div>
                      </div>


                      <div>
                        <h2 className='text-orange-500'>2 Select a payment method</h2>

                        <div className='border rounded-md p-4'>
                          <h1 className='border-b text-lg'>Your available balance</h1>

                          <div className='flex items-center my-3'>
                            <img src={plus} className='w-5 h-5 mr-3' />
                            <TextField
                              label="Enter Code"
                              id="outlined-size-small"
                              name="Enter Code"
                              size="small"
                              className="w-52"
                            />
                            <button className='border mx-3 w-16 h-8  text-base  bg-blue-900 text-white flex items-center justify-center rounded-full'>Apply</button>
                          </div>

                          <div>
                            <h1 className='border-b'>Another payment method</h1>
                          </div>

                          <div>
                            <div className='flex flex-col'>
                              <div
                                className={`flex items-center p-2 ${selectedPayment === 'card' ? 'bg-pink-50 border border-black rounded-md' : ''}`}
                                onClick={() => handlePaymentSelection('card')}
                              >
                                <input type='radio' checked={selectedPayment === 'card'} readOnly />
                                <span className='ml-2'>Credit or debit card</span>
                              </div>
                              {selectedPayment === 'card' && (
                                <div className="flex mt-2">
                                  <img src={AmericanExpress} className="w-12 h-9 mr-2" />
                                  <img src={visa} className="w-12 h-9 mr-2" />
                                  <img src={Discover} className="w-12 h-9 mr-2" />
                                  <img src={dotspaymenticon} className="w-12 h-9 mr-2" />
                                  <img src={net} className="w-12 h-9" />
                                </div>
                              )}
                              {isPopupShow && (
                                <div className='flex mt-2'>
                                  <img src={plus} className='w-5 h-5 mr-2' />
                                  <p className="cursor-pointer" onClick={handleCardOpen}>Enter card details</p>
                                </div>
                              )}
                            </div>

                            {isCardPopup && (
                              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="bg-white border rounded-md w-96 p-5">
                                  <div className="flex justify-between border-b pb-3">
                                    <h1>Enter Card Details</h1>
                                    <img src={cross} className="w-5 h-5 cursor-pointer" onClick={handleCardRemove} />
                                  </div>
                                  <div className="flex flex-col mt-4">
                                    <div className="flex mb-3">
                                      <label className="w-32">Card Number</label>
                                      <input type="text" className="flex-1 h-8 border border-black px-2" />
                                    </div>
                                    <div className="flex mb-3">
                                      <label className="w-32">Nick Name</label>
                                      <input type="text" className="flex-1 h-8 border border-black px-2" />
                                    </div>
                                    <div className="flex flex-col mb-3">
                                      <label>Expiry Date</label>
                                      <div className="flex">
                                        <select className="border border-black rounded-md mx-2 shadow-md bg-slate-200">
                                          {futureYears.map((year) => (
                                            <option key={year} value={year}>
                                              {year}
                                            </option>
                                          ))}
                                        </select>

                                        <select className="border border-black rounded-md mx-2 shadow-md bg-slate-200">
                                          {months.map((month, index) => (
                                            <option key={index} value={month}>
                                              {month}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      <p>Please ensure that you enable your card for online payments from your bank’s app.</p>
                                    </div>
                                    <div className="flex mt-4">
                                      <img src={AmericanExpress} className="w-12 h-9 mr-2" />
                                      <img src={visa} className="w-12 h-9 mr-2" />
                                      <img src={Discover} className="w-12 h-9 mr-2" />
                                      <img src={dotspaymenticon} className="w-12 h-9 mr-2" />
                                      <img src={net} className="w-12 h-9" />
                                    </div>
                                  </div>
                                  <div className="flex justify-end mt-5">
                                    <button className="border rounded-full w-24 border-black h-8 mr-2" onClick={handleCardRemove}>
                                      Cancel
                                    </button>
                                    <button className="flex justify-center items-center w-40 h-8 bg-blue-900 text-white rounded-full">
                                      Enter Card Details
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}

                            <div
                              className={`flex flex-col  p-2 mt-2 ${selectedPayment === 'netbanking' ? 'bg-pink-50 border border-black rounded-md' : ''}`}
                              onClick={() => handlePaymentSelection('netbanking')}
                            >
                              <div>
                                <input type='radio' checked={selectedPayment === 'netbanking'} readOnly />
                                <span className='ml-2'>Net Banking</span>
                              </div>
                              <div>
                                <select className="border rounded-md">
                                  <option>Choose an option</option>
                                  <option>HDFC</option>
                                  <option>Axis</option>
                                </select>
                              </div>
                            </div>
                            <div
                              className={`flex flex-col  p-2 mt-2 ${selectedPayment === 'emi' ? 'bg-pink-50 border border-black rounded-md' : ''}`}
                              onClick={() => handlePaymentSelection('emi')}
                            >
                              <div>
                                <input type='radio' checked={selectedPayment === 'emi'} readOnly onClick={handleemiopen} />
                                <span className='ml-2' >EMI</span>
                              </div>
                              <div >
                                {
                                  isEmiPopup && (
                                    <div>


                                      <div className="flex mt-2">
                                        <img src={AmericanExpress} className="w-12 h-9 mr-2" />
                                        <img src={visa} className="w-12 h-9 mr-2" />
                                        <img src={Discover} className="w-12 h-9 mr-2" />
                                        <img src={dotspaymenticon} className="w-12 h-9 mr-2" />
                                        <img src={net} className="w-12 h-9" />
                                      </div>


                                      <div className='flex mt-2'>
                                        <img src={plus} className='w-5 h-5 mr-2' />
                                        <p className="cursor-pointer" onClick={handleCardemiOpen}>Enter card details</p>
                                        <div>
                                          {
                                            iscardEmiopen && (
                                              <div>


                                                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                                  <div className="bg-white border rounded-md w-96 p-5">
                                                    <div className="flex justify-between border-b pb-3">
                                                      <h1>Enter Card Details</h1>
                                                      <img src={cross} className="w-5 h-5 cursor-pointer" onClick={handleCardemiremove} />
                                                    </div>
                                                    <div className="flex flex-col mt-4">
                                                      <div className="flex mb-3">
                                                        <label className="w-32">Card Number</label>
                                                        <input type="text" className="flex-1 h-8 border border-black px-2" />
                                                      </div>
                                                      <div className="flex mb-3">
                                                        <label className="w-32">Nick Name</label>
                                                        <input type="text" className="flex-1 h-8 border border-black px-2" />
                                                      </div>
                                                      <div className="flex flex-col mb-3">
                                                        <label>Expiry Date</label>
                                                        <div className="flex">
                                                          <select className="border border-black rounded-md mx-2 shadow-md bg-slate-200">
                                                            {futureYears.map((year) => (
                                                              <option key={year} value={year}>
                                                                {year}
                                                              </option>
                                                            ))}
                                                          </select>

                                                          <select className="border border-black rounded-md mx-2 shadow-md bg-slate-200">
                                                            {months.map((month, index) => (
                                                              <option key={index} value={month}>
                                                                {month}
                                                              </option>
                                                            ))}
                                                          </select>
                                                        </div>
                                                      </div>
                                                      <div className="text-sm text-gray-600">
                                                        <p>Please ensure that you enable your card for online payments from your bank’s app.</p>
                                                      </div>
                                                      <div className="flex mt-4">
                                                        <img src={AmericanExpress} className="w-12 h-9 mr-2" />
                                                        <img src={visa} className="w-12 h-9 mr-2" />
                                                        <img src={Discover} className="w-12 h-9 mr-2" />
                                                        <img src={dotspaymenticon} className="w-12 h-9 mr-2" />
                                                        <img src={net} className="w-12 h-9" />
                                                      </div>
                                                    </div>
                                                    <div className="flex justify-end mt-5">
                                                      <button className="border rounded-full w-24 border-black h-8 mr-2" onClick={handleCardemiremove}>
                                                        Cancel
                                                      </button>
                                                      <button className="flex justify-center items-center w-40 h-8 bg-blue-900 text-white rounded-full">
                                                        Enter Card Details
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>


                                              </div>
                                            )
                                          }
                                        </div>
                                      </div>


                                    </div>

                                  )
                                }
                              </div>


                            </div>

                            <div
                              className={`flex items-center p-2 mt-2 border-b ${selectedPayment === 'cod' ? 'bg-pink-50 border border-black rounded-md' : ''}`}
                              onClick={() => handlePaymentSelection('cod')}
                            >
                              <input type='radio' checked={selectedPayment === 'cod'} readOnly />
                              <span className='ml-2'>Cash on Delivery</span>
                            </div>
                          </div>
                          <div className=" mt-2 items-center flex ">
                            <button className="w-60 border rounded-full bg-blue-900 text-basep-1 text-white">Use this payment method</button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="my-2 border-b">
                          <h1> 3 Offers</h1>
                        </div>

                        <div>
                          <h1>4 Review items and delivery</h1>

                          <div className=" border rounded-md p-4 ">

                            <h1 className="text-lg font-semibold text-green-600">Arriving 7 Sept 2024</h1>
                            <p className="text-base">If you order in the next 10 hours and 50 minutes ( Details )</p>
                            <p className="text-base">Items dispatched by Pharmetrade </p>
                            {itemsdetails.map((itemsdetail, index) => (

                              <div key={index} className="flex justify-around my-4">
                                <div className="mt-4">
                                  {/* <p>{itemsdetail.src}</p> */}
                                  <img src={offer} className="w-28 h-24  " />
                                </div>
                                <div>
                                  <p className="text-base font-semibold">{itemsdetail.name}</p>
                                  <p className="text-base font-semibold">{itemsdetail.type}</p>
                                  <p className="text-base font-semibold">{itemsdetail.Strength}</p>
                                  <p className="text-red-600 font-semibold"> ${itemsdetail.Price}</p>
                                  <input
                                    type="number"
                                    //  value={quantities[index]}
                                    // onChange={(e) =>
                                    //   handleQuantityChange(index, Number(e.target.value))
                                    // }
                                    className="text-xl border rounded-lg p-1 w-16"
                                    min="1"
                                  />
                                  <div className="flex">
                                    <p>{itemsdetail.purchase}</p>
                                    <p>{itemsdetail.Company_Name}</p>
                                  </div>



                                </div>

                                <div>
                                  <p className="text-base font-semibold">{itemsdetail.option} :</p>
                                  <label className="flex items-center text-base text-green-600 font-semibold">
                                    <input type="radio" name={`delivery${index}`} value={itemsdetail.delivery_type1} className="mr-2" />
                                    {itemsdetail.delivery1}
                                  </label>
                                  <p className="text-base ml-5">{itemsdetail.deliivery_type1}</p>
                                </div>
                              </div>
                            ))}


                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
                <div className=" w-[40%]  mx-16  flex flex-col pt-2 items-center relative">

                  <div className="border fixed shadow-md rounded-md p-7 py-5">
                    <div className="flex items-center justify-center">
                      <button className="border rounded-full text-sm flex justify-center items-center w-32 h-8 bg-blue-900 text-white">Use this address</button>
                    </div>
                    <div className="text-base flex items-center justify-center flex-col my-1 border-b">
                      <p>Choose a shipping address and payment</p>
                      <p>method to calculate shipping, handling and</p>
                      <p>tax.</p>
                    </div>
                    <div>
                      <h1 className="font-semibold text-xl my-2">Order Summary</h1>
                    </div>
                    <div className="flex justify-between text-sm mt-3">
                      <p>Items :</p>
                      <p>--</p>
                    </div>
                    <div className="flex justify-between text-sm border-b my-2">
                      <p>Delivery :</p>
                      <p>--</p>
                    </div>
                    <div className="flex justify-between text-red-500 font-semibold">
                      <p>Order Total:</p>
                      <p>${total}</p>
                    </div>
                  </div>



                </div>

                {/* <div className=" w-[30%]  ml-6 flex flex-col pt-2 items-center relative">

                  <div className="border-b fixed">
                    <div className="flex items-center justify-center">
                      <button className="border rounded-full text-sm flex justify-center items-center w-32 h-8 bg-blue-900 text-white">Use</button>
                    </div>
                    <div className="text-xs flex items-center justify-center flex-col my-1 border-b">
                      <p>Choose a shipping address and payment</p>
                      <p>method to calculate shipping, handling and</p>
                      <p>tax.</p>
                    </div>
                    <div>
                      <h1 className="font-semibold text-xl my-2">Order Summary</h1>
                    </div>
                    <div className="flex justify-between text-sm mt-3">
                      <p>Items :</p>
                      <p>--</p>
                    </div>
                    <div className="flex justify-between text-sm border-b mb-2">
                      <p>Delivery :</p>
                      <p>--</p>
                    </div>
                    <div className="flex justify-between text-red-500 font-semibold">
                      <p>Order Total:</p>
                      <p>$10,000</p>
                    </div>
                  </div>



                </div> */}
              </div>

              {/* <div className=" w-[30%]  mx-16 border flex flex-col pt-2 items-center relative">

<div className="border-b fixed">
  <div className="flex items-center justify-center">
    <button className="border rounded-full text-sm flex justify-center items-center w-32 h-8 bg-blue-900 text-white">Use</button>
  </div>
  <div className="text-xs flex items-center justify-center flex-col my-1 border-b">
    <p>Choose a shipping address and payment</p>
    <p>method to calculate shipping, handling and</p>
    <p>tax.</p>
  </div>
  <div>
    <h1 className="font-semibold text-xl my-2">Order Summary</h1>
  </div>
  <div className="flex justify-between text-sm mt-3">
    <p>Items :</p>
    <p>--</p>
  </div>
  <div className="flex justify-between text-sm border-b mb-2">
    <p>Delivery :</p>
    <p>--</p>
  </div>
  <div className="flex justify-between text-red-500 font-semibold">
    <p>Order Total:</p>
    <p>$10,000</p>
  </div>
</div>



</div> */}







            </div>
          </div>

          {/* other components start */}
          {!isTotalHidden && (
            <div className="w-[60%]">
              <div className="border-b my-3">
                <h1>2 Payment method</h1>
              </div>
              <div className="border-b my-3">
                <h1>3 Offers</h1>
              </div>
              <div className="border-b my-3">
                <h1>4 Items and delivery</h1>
              </div>

            </div>
         )} 
        </div>
      </div>
    </div>
  );
}

export default Address;
