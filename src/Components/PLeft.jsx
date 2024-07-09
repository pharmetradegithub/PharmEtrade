// import React from "react";

// function PLeft() {
//   return (
//     <div
//       className=" w-96 flex flex-col text-white gap-3 text-xl"
//       style={{ marginLeft: 35 }}
//     >
//       <div className="border-1 bg-blue-900  w-11/12 px-5 py-2 text-xl rounded-md">
//         <p>All categories</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Allegies</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Bath & Body</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Cough Cold & flu</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Digestive Health</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Drug</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Eye Care</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Ear Nose & Throat Care</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>First Aid </p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Foot Care</p>
//       </div>

//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Home Test Monitoring</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Incontinence</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Pain Relief & Management</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-mmd">
//         <p>Pediatric Care</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Personal Care</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Pet</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-5 py-2 rounded-md">
//         <p>Presciption & Packaging</p>
//       </div>
//     </div>
//   );
// }

// export default PLeft;


import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


  // const navigate = useNavigate();


function PLeft() {
  return (
    <div
      className=" w-80 flex flex-col text-white gap-2 text-lg"
      style={{ marginLeft: 35 }}
    >
      <div className="border-1 bg-blue-900  w-11/12 px-4 py-1 text-lg rounded-md">
        {/* <p>All categories</p> */}
        <Link
          to="/"
          className="w-fit p-2   text-white rounded-lg"
        >
          Home
        </Link>
      </div>
      <div className="border-1 bg-blue-900  w-11/12 px-4 py-1 text-lg rounded-md">
        <p>All categories</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Allegies</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Bath & Body</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Cough Cold & flu</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Digestive Health</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Drug</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Eye Care</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Ear Nose & Throat Care</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>First Aid </p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Foot Care</p>
      </div>

      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Home Test Monitoring</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Incontinence</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Pain Relief & Management</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-mmd">
        <p>Pediatric Care</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Personal Care</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Pet</p>
      </div>
      <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
        <p>Presciption & Packaging</p>
      </div>
    </div>
  );
}

export default PLeft;
