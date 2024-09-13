// // import React from "react";
// // import { Link } from "react-router-dom";
// // import addcart from "../assets/addcart.png";
// // import fav from "../assets/fav.png";
// // import nature from "../assets/img1.png";
// // import other from "../assets/other.png";
// // import Items from "./Items";
// // // import { useNavbarContext } from "./NavbarContext";
// // import { useNavigate } from "react-router-dom";

// // const ProductDetails = () => {
// //   // const { pop, setPop } = useNavbarContext();
// //   const navigate = useNavigate();
// //   const images = Array(4).fill(nature);

// //   return (
// //     <div className="w-full h-full flex justify-center mb-20">
// //       <div className="h-full w-[90%] ">
// //         <h2 className="text-3xl font-bold text-blue-900">PRODUCT DETAILS</h2>
// //         <div>
// //           <h4 className="text-2xl font-semibold my-5">Description</h4>
// //           <div className="h-full w-[85%]  font-medium space-y-2">
// //             <p className="font-normal text-[20px] font-sans">
// //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
// //             </p>
// //             <p className="font-normal text-[20px] font-sans">
// //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
// //               voluptate in fugit!
// //             </p>
// //             <p className="font-normal text-[20px] font-sans">
// //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
// //               aliquam in quisquam. Cumque cupiditate laudantium deleniti culpa
// //               illum adipisci eos quis fuga neque dolor repellendus, ullam autem,
// //               dolores architecto voluptate tempore reprehenderit quidem. Quae
// //               quia distinctio rerum saepe officiis quasi ex explicabo qui optio
// //               libero? In autem praesentium necessitatibus corrupti?
// //             </p>
// //             <p className="font-normal text-[20px] font-sans">
// //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
// //               molestiae fugiat optio recusandae praesentium consectetur earum !
// //             </p>
// //           </div>

// //           <div>
// //             <h2 className="text-2xl font-semibold mt-3">Product Form</h2>
// //             <span className="font-normal text-[20px]">Tablet</span>
// //           </div>

// //           <div>
// //             <h2 className="text-2xl font-semibold mt-4">Directions for Use:</h2>
// //             <span className="font-normal text-[20px]">
// //               Take one tablet daily or as directed by your physician.
// //             </span>
// //           </div>

// //           <div className="">
// //             <h2 className="text-2xl font-semibold mt-4">Safety Information:</h2>
// //             <div className="p-6">
// //               <ul className="font-normal list-disc font-sans text-[20px] pl-5 space-y-2">
// //                 <li>Keep out of reach of children</li>
// //                 <li>Use under medical supervision</li>
// //                 <li>Do not exceed the recommended dose</li>
// //                 <li>Store in a cool, dry place away from direct sunlight</li>
// //                 <li>
// //                   Pregnant or nursing mothers, children, and people with medical
// //                   conditions must consult a physician before taking this
// //                   supplement
// //                 </li>
// //                 <li>
// //                   Do not use if the product appears to be tampered with or the
// //                   seal is broken
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;




// import React from "react";
// import { Link } from "react-router-dom";
// import addcart from "../assets/addcart.png";
// import fav from "../assets/fav.png";
// import nature from "../assets/img1.png";
// import other from "../assets/other.png";
// import Items from "./Items";
// // import { useNavbarContext } from "./NavbarContext";
// import { useNavigate } from "react-router-dom";

// const ProductDetails = ({productdescription}) => {
//   // const { pop, setPop } = useNavbarContext();
//   const navigate = useNavigate();
//   const images = Array(4).fill(nature);

//   return (
//     <div className="w-[95%] h-full flex justify-center border-t-2 shadow-inner pt-4 ">
//       <div className="h-full w-[95%] ">
//         <h2 className="text-xl font-bold text-black">PRODUCT DETAILS</h2>
//         <div>
//           <h4 className="text-xl font-semibold text-blue-900 mt-2">Description</h4>
//           <div className="h-full w-[95%]  font-medium space-y-2">
//             {productdescription}
//             {/* <p className="font-normal text-[16px] font-sans">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
//             </p>
//             <p className="font-normal text-[16px] font-sans">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
//               voluptate in fugit!
//             </p>
//             <p className="font-normal text-[16px] font-sans">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
//               aliquam in quisquam. Cumque cupiditate laudantium deleniti culpa
//               illum adipisci eos quis fuga neque dolor repellendus, ullam autem,
//               dolores architecto voluptate tempore reprehenderit quidem. Quae
//               quia distinctio rerum saepe officiis quasi ex explicabo qui optio
//               libero? In autem praesentium necessitatibus corrupti?
//             </p>
//             <p className="font-normal text-[16px] font-sans">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
//               molestiae fugiat optio recusandae praesentium consectetur earum !
//             </p> */}
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold text-blue-900 mt-3">Product Form</h2>
//             <span className="font-normal text-[16px]">Tablet</span>
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold text-blue-900 mt-4">Directions for Use:</h2>
//             <span className="font-normal text-[16px]">
//               Take one tablet daily or as directed by your physician.
//             </span>
//           </div>

//           <div className="">
//             <h2 className="text-xl font-semibold text-blue-900 mt-4">Safety Information:</h2>
//             <div className="p-6">
//               <ul className="font-normal list-disc font-sans text-[16px] pl-5 space-y-2">
//                 <li>Keep out of reach of children</li>
//                 <li>Use under medical supervision</li>
//                 <li>Do not exceed the recommended dose</li>
//                 <li>Store in a cool, dry place away from direct sunlight</li>
//                 <li>
//                   Pregnant or nursing mothers, children, and people with medical
//                   conditions must consult a physician before taking this
//                   supplement
//                 </li>
//                 <li>
//                   Do not use if the product appears to be tampered with or the
//                   seal is broken
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



import React from "react";
import { Link } from "react-router-dom";
import addcart from "../assets/addcart.png";
import fav from "../assets/fav.png";
import nature from "../assets/img1.png";
import other from "../assets/other.png";
import Items from "./Items";
// import { useNavbarContext } from "./NavbarContext";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  // const { pop, setPop } = useNavbarContext();
  const navigate = useNavigate();
  const images = Array(4).fill(nature);

  const detailsTables = [
    {
      Product_Name: "Paracetamol",
      Manufacture: "xyzz",
      Size: 50,
      Form: "Tablet",
      UnitOfMeasurement: "Mg",
      Strength: "100",
      Brand_Name: "Cipla",
      Height: "10in",
      Weight: "40gr",
      Width: "40%",
      Length: "40"
    }
  ]


  return (
    <div className="w-[95%] h-full flex justify-center border-t-2 shadow-inner pt-4 ">
      <div className="h-full w-[95%] ">
        <h2 className="text-xl font-bold text-black">PRODUCT DETAILS</h2>
        <div>
          <h4 className="text-xl font-semibold text-blue-900 mt-2">Description</h4>
          <div className="h-full w-[95%]  font-medium space-y-2">
            <p className="font-normal text-[16px] font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
            <p className="font-normal text-[16px] font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              voluptate in fugit!
            </p>
            <p className="font-normal text-[16px] font-sans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              aliquam in quisquam. Cumque cupiditate laudantium deleniti culpa
              illum adipisci eos quis fuga neque dolor repellendus, ullam autem,
              dolores architecto voluptate tempore reprehenderit quidem. Quae
              quia distinctio rerum saepe officiis quasi ex explicabo qui optio
              libero? In autem praesentium necessitatibus corrupti?
            </p>
            <p className="font-normal text-[16px] font-sans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              molestiae fugiat optio recusandae praesentium consectetur earum !
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mt-3">Product Form</h2>
            <span className="font-normal text-[16px]">Tablet</span>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-900 mt-4">Directions for Use:</h2>
            <span className="font-normal text-[16px]">
              Take one tablet daily or as directed by your physician.
            </span>
          </div>
          {/* <div>
            {detailsTables.map((detailsTable, index) => (
              <div key={index} className="flex">
                <table className="flex border w-[40%] h-[500px] justify-around items-center">
                  <thead className=" flex justify-start items-start " >
                  <tr className="flex flex-col gap-4  ">
                    <th >Product Name </th>
                    <th>Manufacturer:</th>
                    <th>Size:</th>
                    <th>Form:</th>
                    <th>Unit Of Measurement: </th>
                    <th>Strength:</th>
                    <th>Brand Name:
                    </th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Width</th>
                    <th>Length</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="flex flex-col gap-4">
                    <td>{detailsTable.Product_Name}</td>
                    <td>{detailsTable.Manufacture}</td>
                    <td>{detailsTable.Size}</td>
                    <td>{detailsTable.Form}</td>
                    <td>{detailsTable.UnitOfMeasurement}</td>
                    <td>{detailsTable.Strength}</td>
                    <td>{detailsTable.Brand_Name}</td>
                    <td>{detailsTable.Height}</td>
                    <td>{detailsTable.Weight}</td>
                    <td>{detailsTable.Width}</td>
                    <td>{detailsTable.Length}</td>
                  </tr>
                  </tbody>
                </table>
              </div>

            ))}
          </div> */}
<p className="text-xl text-blue-900  my-4 font-semibold">Product Information</p>
          <div className="my-4">
            {detailsTables.map((detailsTable, index) => (
              <div key={index} className="flex ">
                <table className="table-fixed border border-gray-400 w-[40%] h-auto">
                  <tbody >
                    <tr className="grid grid-cols-2 border-b">
                      <th className="p-2 text-left bg-slate-100">Product Name:</th>
                      <td className="p-2">{detailsTable.Product_Name}</td>
                    </tr>
                    <tr className="grid grid-cols-2 border-b">
                      <th className="p-2 text-left bg-slate-100">Manufacturer:</th>
                      <td className="p-2">{detailsTable.Manufacture}</td>
                    </tr>
                    <tr className="grid grid-cols-2 border-b">
                      <th className="p-2 text-left bg-slate-100">Size:</th>
                      <td className="p-2">{detailsTable.Size}</td>
                    </tr>
                    <tr className="grid grid-cols-2 border-b">
                      <th className="p-2 text-left bg-slate-100">Form:</th>
                      <td className="p-2">{detailsTable.Form}</td>
                    </tr>
                    <tr className="grid grid-cols-2 border-b">
                      <th className="p-2 text-left bg-slate-100">Unit Of Measurement:</th>
                      <td className="p-2">{detailsTable.UnitOfMeasurement}</td>
                    </tr>
                    <tr className="grid grid-cols-2 border-b">
                      <th className="p-2 text-left bg-slate-100">Strength:</th>
                      <td className="p-2">{detailsTable.Strength}</td>
                    </tr>
                    <tr className="grid grid-cols-2 border-b">
                      <th className="p-2 text-left bg-slate-100">Brand Name:</th>
                      <td className="p-2">{detailsTable.Brand_Name}</td>
                    </tr>
                    <tr className="grid grid-cols-2 border-b">
                      <th className="p-2 text-left bg-slate-100">Height:</th>
                      <td className="p-2">{detailsTable.Height}</td>
                    </tr>
                    <tr className="grid grid-cols-2 border-b">
                      <th className="p-2 text-left bg-slate-100">Weight:</th>
                      <td className="p-2">{detailsTable.Weight}</td>
                    </tr>
                    <tr className="grid grid-cols-2 border-b">
                      <th className="p-2 text-left bg-slate-100">Width:</th>
                      <td className="p-2">{detailsTable.Width}</td>
                    </tr>
                    <tr className="grid grid-cols-2">
                      <th className="p-2 text-left bg-slate-100">Length:</th>
                      <td className="p-2">{detailsTable.Length}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>



          <div className="">
            <h2 className="text-xl font-semibold text-blue-900 mt-4">Safety Information:</h2>
            <div className="p-6">
              <ul className="font-normal list-disc font-sans text-[16px] pl-5 space-y-2">
                <li>Keep out of reach of children</li>
                <li>Use under medical supervision</li>
                <li>Do not exceed the recommended dose</li>
                <li>Store in a cool, dry place away from direct sunlight</li>
                <li>
                  Pregnant or nursing mothers, children, and people with medical
                  conditions must consult a physician before taking this
                  supplement
                </li>
                <li>
                  Do not use if the product appears to be tampered with or the
                  seal is broken
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
