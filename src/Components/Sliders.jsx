


import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import right from "../assets/arrowright.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import left from "../assets/arrowleft.png";
import mobile from "../assets/mobile.png";
import { useNavbarContext } from "./NavbarContext";
import screen1 from "../assets/Icons/Screen dummy-1.png";
import screen2 from "../assets/Icons/Screen dummy-2.png";
import screen3 from "../assets/Icons/Screen dummy-3.png";
import screen4 from "../assets/Icons/Screen dummy-4.png";
import other from "../assets/other.png";
import addcart from "../assets/addcart.png";
import fav from "../assets/love.png";
import mask from "../assets/mask.png";
import covid from "../assets/covid.png";
import { useState, useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Content from "./Content";
import { IoIosArrowUp } from "react-icons/io";

function Sliders() {
  const searchBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("");
          } else {
            entry.target.classList.remove("");
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (searchBarRef.current) {
      observer.observe(searchBarRef.current);
    }

    return () => {
      if (searchBarRef.current) {
        observer.unobserve(searchBarRef.current);
      }
    };
  }, []);
  const [images] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
    screen1,
  ]);
  const mobiles = [mobile, mobile, mobile, mobile, mobile];
  const screens = [mask, covid, covid, mask];
  const { pop } = useNavbarContext();
  const [showAll, setShowAll] = useState(screens.slice(0, 4));
  const [curIndex, setCurIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    console.log("prev");
    const nextInd = curIndex + 2;
    if (nextInd < screens.length) {
      const nextVisibleImages = screens.slice(nextInd, nextInd + 2);
      setShowAll(nextVisibleImages);
      setCurIndex(nextInd);
    }
  };

  const handlePrevious = () => {
    const previousInd = curIndex - 2;
    console.log("next");
    if (previousInd >= 0) {
      const previousVisibleImages = screens.slice(previousInd, previousInd + 2);
      setShowAll(previousVisibleImages);
      setCurIndex(previousInd);
    }
  };

  const handleClickNext = () => {
    console.log("prev");
    const nextInd = currentIndex + 5;
    if (nextInd < images.length) {
      const nextVisibleImages = images.slice(nextInd, nextInd + 5);
      setVisibleImages(nextVisibleImages);
      setCurrentIndex(nextInd);
    }
  };

  const handleClickPrevious = () => {
    const previousInd = currentIndex - 5;
    console.log("next");
    if (previousInd >= 0) {
      const previousVisibleImages = images.slice(previousInd, previousInd + 5);
      setVisibleImages(previousVisibleImages);
      setCurrentIndex(previousInd);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="pl-20">
        <div className="flex flex-col justify-center gap-10 mt-4 ">
          {/* <button className="text-xl "><img src={covid} className='w-24'/></button> */}

          <div className="flex justify-between ml-10 text-fonts font-semibold text-3xl">
            <p>Special offers</p>

            <div className="flex justify-end mr-14 gap-2">
              <button className="bg-foots rounded-full p-2 ">
                <img src={left} className="w-4 h-4" onClick={handlePrevious} />
              </button>
              <button className="bg-foots rounded-full px-2 py-2">
                <img src={right} className="w-4 h-4" onClick={handleNext} />
              </button>
            </div>
          </div>

          <div className=" md:grid md:grid-cols-3  md:w-screen xl:flex xl:justify-center  xl:flex-row xl:gap-4 xl:w-full ">
            {showAll.map((items) => (
              <div style={{ width: "45vh" }}>
                <img src={items} className="md:w-72 md:h-44 rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-10 mt-4 ">
          <div className="flex items-center justify-between mr-20 mt-4 gap-2">
            <h1 className="ml-10  text-3xl font-semibold text-fonts">
              {" "}
              New Product
            </h1>
            <div className="flex items-center ">
              <button className=" bg-foots rounded-full px-2 py-2">
                <img
                  src={left}
                  onClick={handleClickPrevious}
                  className="w-4 h-4"
                />
              </button>
              <button className="bg-foots rounded-full px-2 py-2">
                <img
                  src={right}
                  onClick={handleClickNext}
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
          <div className="md:grid md:grid-cols-3 md:grid-rows-2 xl:ml-10 xl:flex xl:justify-center  overflow-x-scroll snap-x snap-mandatory xl:gap-10 ">
            {visibleImages.map((img, index) => (
              <div key={index} className="snap-center shrink-0 ">
                <div className="">
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="h-52 w-48 object-contain rounded-xl bg-foots"
                  />
                  <div>
                    <h2 className="text-foot">Nature Mask</h2>
                    <h3 className="font-semibold text-box-blue">$99.00</h3>
                  </div>
                  <div className="flex flex-row border justify-center bg-gray-100 border-gray-300 shadow-md rounded-xl p-2 lg:w-48 gap-5 items-center mt-3  mb-2">
                    <div>
                      <img
                        src={addcart}
                        className="h-8 border bg-foots p-1 rounded-full"
                      />
                    </div>
                    <div>
                      <img
                        src={fav}
                        className="h-8 border bg-foots p-1 rounded-full"
                      />
                    </div>
                    <div>
                      <img
                        src={other}
                        className="h-8 border bg-foots p-1 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <button className="text-xl ml-4"><img src={right} className='w-24'/></button> */}
        </div>
        {/* <div
        className={
          pop
            ? " getTouchs md:w-80% xl:w-80% relative h-fit md:mt-12 xl:mt-24 xl:mx-8 rounded-md xl:p-10 xl:flex xl:flex-col xl:justify-center"
            : " getTouchs md:ml-0 md:w-80% md:h-fit xl:w-80% relative h-fit md:mt-12 xl:mt-24 xl:mx-8 rounded-md xl:p-10 xl:flex xl:flex-col xl:justify-center"
        }>
        <div className="border-2 md:p-0 border-white w-auto md:h-fit md:w-auto xl:w-auto xl:h-80 lg:ml-4 lg:mr-4 lg:mt-4 lg:mb-4 xl:ml-12 rounded-md">
          <p className="absolute xl:top-6 z-5 left-1/3 h-fit bg-box-blue text-white px-4 py-2 rounded-md  text-3xl">
            Get in touch{" "}
          </p>
          <div className="ml-10 md:flex md:flex-row md:gap-10 lg:gap-20 xl:flex xl:flex-row xl:gap-96 ">
            <div className="flex items-center justify-center lg:pb-4 lg:pl-4 xl:pr-4">
              <div
                ref={searchBarRef}
                className="relative flex items-center w-full max-w-md"
              >
                <div className="md:w-screen xl:w-fit xl:pl-8 ">
                  <ul className="md:text-xl xl:text-3xl text-white font-light  w-fit">
                    <li className="w-fit ">Manage Inventory</li>
                    <li className="">Increase cash flow </li>
                    <li className="">Grow you business</li>
                    <li className="">
                      Promote products and deals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 pr-36 mt-7 justify-between items-center">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full h-14 px-5"
              />
              <input
                type="text"
                placeholder="Enter Your Contact"
                className="w-96 h-14 px-5"
              />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-96 h-14 px-5"
              />
              <button className="bg-box-blue text-white rounded-lg w-fit p-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div> */}
        <div
          className={
            pop
              ? " getTouchs md:w-80% xl:w-80% relative h-5% md:mt-24 xl:mt-48 xl:mx-8 rounded-md xl:p-10 xl:flex xl:flex-col xl:justify-center"
              : " getTouchs md:ml-0 md:w-80% md:h-5% xl:w-80% relative h-15% md:mt-12 xl:mt-20 xl:mx-8 rounded-md xl:p-5 xl:flex xl:flex-col xl:justify-center"
          }
        >
          <div className="border-2 md:p-0 border-white w-auto md:h-5% md:w-auto xl:w-auto xl:h-5% lg:ml-4 xl:flex xl:justify-center lg:mr-4 lg:mt-4 lg:mb-4 xl:ml-12 rounded-md">
            <p className="absolute xl:top-4 z-5 left-1/3 h-5% bg-box-blue text-white px-4 py-2 rounded-md  text-2xl">
              Get in touch{" "}
            </p>
            <div className="ml-10 md:flex md:flex-row md:gap-10 lg:gap-20 xl:flex xl:flex-row xl:gap-50 ">
              <div className="flex items-center justify-center lg:pb-4 lg:pl-4 xl:pr-4">
                <div
                  ref={searchBarRef}
                  className="relative flex items-center w-full max-w-md"
                >
                  <div className="md:w-screen xl:w-fit xl:pl-8 ">
                    <ul className="md:text-xl xl:text-2xl text-white font-light  bounce-in-top  w-96">
                      <li className="w-96 ">Manage Inventory</li>
                      <li className="">Increase cash flow </li>
                      <li className="">Grow you business</li>
                      <li className="">Promote products and deals</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 pr-36 mt-7  justify-start items-center">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-72 h-10 px-5 "
                />
                <input
                  type="text"
                  placeholder="Enter Your Contact"
                  className="w-72 h-10 px-5"
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-72 h-10 px-5"
                />
                <button className="bg-box-blue text-white rounded-lg w-fit p-2 my-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full h-full">
          <div className="flex justify-center items-center  mt-24">
            {mobiles.map((item, key) => {
              return (
                <div key={key} className="flex justify-center mr-4">
                  <img
                    src={item}
                    alt={`Mobile ${key}`}
                    className="h-[350px] w-52 xl:w-[360px] hover:scale-110 transition duration-300 ease-in-out rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="bg-yellow-100 mt-8 cursor-pointer text-blue-900 font-semibold p-3 flex justify-center items-center text-[17px]"
        onClick={scrollToTop}
      >
        {" "}
        Back To Top
        <IoIosArrowUp className="w-8 h-6" />
      </div>
    </>
  );
}

export default Sliders;




// import React from "react";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";
// import right from "../assets/arrowright.png";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import left from "../assets/arrowleft.png";
// import mobile from "../assets/mobile.png";
// import { useNavbarContext } from "./NavbarContext";
// import screen1 from "../assets/Icons/Screen dummy-1.png";
// import screen2 from "../assets/Icons/Screen dummy-2.png";
// import screen3 from "../assets/Icons/Screen dummy-3.png";
// import screen4 from "../assets/Icons/Screen dummy-4.png";
// // import other from "../assets/other.png";
// import compare from "../assets/compare1_Icon.png"
// // import addcart from "../assets/addcart.png";
// import addcart from "../assets/cart1_icon.png"
// // import fav from "../assets/love.png";
// import fav from "../assets/Wishlish1_icon.png"
// import mask from "../assets/mask.png";
// import covid from "../assets/covid.png";
// import { useState, useRef, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
// import Content from "./Content";
// import { IoIosArrowUp } from "react-icons/io";

// function Sliders() {
//   const searchBarRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("bounce-in-top");
//           } else {
//             entry.target.classList.remove("bounce-in-top");
//           }
//         });
//       },
//       { threshold: 0.5 } // Adjust threshold as needed
//     );

//     if (searchBarRef.current) {
//       observer.observe(searchBarRef.current);
//     }

//     return () => {
//       if (searchBarRef.current) {
//         observer.unobserve(searchBarRef.current);
//       }
//     };
//   }, []);
//   const [images] = useState([
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     screen1,
//   ]);
//   const mobiles = [mobile, mobile, mobile, mobile, mobile];
//   const screens = [mask, covid, covid, mask];
//   const { pop } = useNavbarContext();
//   const [showAll, setShowAll] = useState(screens.slice(0, 4));
//   const [curIndex, setCurIndex] = useState(0);
//   const [visibleImages, setVisibleImages] = useState(images.slice(0, 5));
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const handleNext = () => {
//     console.log("prev");
//     const nextInd = curIndex + 2;
//     if (nextInd < screens.length) {
//       const nextVisibleImages = screens.slice(nextInd, nextInd + 2);
//       setShowAll(nextVisibleImages);
//       setCurIndex(nextInd);
//     }
//   };

//   const handlePrevious = () => {
//     const previousInd = curIndex - 2;
//     console.log("next");
//     if (previousInd >= 0) {
//       const previousVisibleImages = screens.slice(previousInd, previousInd + 2);
//       setShowAll(previousVisibleImages);
//       setCurIndex(previousInd);
//     }
//   };

//   const handleClickNext = () => {
//     console.log("prev");
//     const nextInd = currentIndex + 5;
//     if (nextInd < images.length) {
//       const nextVisibleImages = images.slice(nextInd, nextInd + 5);
//       setVisibleImages(nextVisibleImages);
//       setCurrentIndex(nextInd);
//     }
//   };

//   const handleClickPrevious = () => {
//     const previousInd = currentIndex - 5;
//     console.log("next");
//     if (previousInd >= 0) {
//       const previousVisibleImages = images.slice(previousInd, previousInd + 5);
//       setVisibleImages(previousVisibleImages);
//       setCurrentIndex(previousInd);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       <div className="pl-20">
//         <div className="flex flex-col justify-center gap-10 mt-4 ">
//           {/* <button className="text-xl "><img src={covid} className='w-24'/></button> */}

//           <div className="flex justify-between ml-10 text-fonts font-semibold text-3xl">
//             <p>Special offers</p>

//             <div className="flex justify-end mr-14 gap-2">
//               <button className="bg-foots rounded-full p-2 ">
//                 <img src={left} className="w-4 h-4" onClick={handlePrevious} />
//               </button>
//               <button className="bg-foots rounded-full px-2 py-2">
//                 <img src={right} className="w-4 h-4" onClick={handleNext} />
//               </button>
//             </div>
//           </div>

//           <div className=" md:grid md:grid-cols-3  md:w-screen xl:flex xl:items-center ml-10 xl:flex-row xl:gap-4 xl:w-full ">
//             {showAll.map((items) => (
//               <div style={{ width: "45vh" }}>
//                 <img src={items} className="md:w-72 md:h-44 rounded-lg" />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col justify-center gap-10 mt-4 ">
//             <div className="flex items-center justify-between mr-20 mt-4 gap-2">
//               <h1 className="ml-10  text-3xl font-semibold text-fonts">
//                 {" "}
//                 New Product
//               </h1>
//               <div className="flex items-center ">
//                 <button className=" bg-foots rounded-full px-2 py-2">
//                   <img
//                     src={left}
//                     onClick={handleClickPrevious}
//                     className="w-4 h-4"
//                   />
//                 </button>
//                 <button className="bg-foots rounded-full px-2 py-2">
//                   <img
//                     src={right}
//                     onClick={handleClickNext}
//                     className="w-4 h-4"
//                   />
//                 </button>
//               </div>
//             </div>
//           <div className="md:grid md:grid-cols-3 md:grid-rows-2 xl:ml-12 xl:flex overflow-x-scroll snap-x snap-mandatory xl:gap-6 ">
//             {visibleImages.map((img, index) => (
//               <div
//                 key={index}
//                 className="snap-center shrink-0 "
//               >
//                 <div className="">
//                   <img
//                     src={img}
//                     alt={`Product ${index + 1}`}
//                     className="h-52 w-48 object-contain rounded-xl bg-foots"
//                   />
//                   <div>
//                     <h2 className="text-foot">Nature Mask</h2>
//                     <h3 className="font-semibold text-box-blue">$99.00</h3>
//                   </div>
//                   <div className="flex flex-row border justify-center bg-gray-100 border-gray-300 shadow-md rounded-xl p-2 gap-5 items-center mt-3  mb-2">
//                     <div>
//                       <img
//                         src={addcart}
//                         className="h-8 border bg-foots p-1  rounded-full"
//                       />
//                     </div>
//                     <div>
//                       <img
//                         src={fav}
//                         className="h-8 border bg-foots p-1 rounded-full"
//                       />
//                     </div>
//                     <div>
//                       <img
//                         src={compare}
//                         className="h-8 border bg-foots p-1 rounded-full"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* <button className="text-xl ml-4"><img src={right} className='w-24'/></button> */}
//         </div>
       
//         <div
//           className={
//             pop
//               ? " getTouchs md:w-80% xl:w-80% relative h-5% md:mt-24 xl:mt-48 xl:mx-8 rounded-md xl:p-10 xl:flex xl:flex-col xl:justify-center"
//               : " getTouchs md:ml-0 md:w-80% md:h-5% xl:w-80% relative h-15% md:mt-12 xl:mt-20 xl:mx-8 rounded-md xl:p-5 xl:flex xl:flex-col xl:justify-center"
//           }
//         >
//           <div className="border-2 md:p-0 border-white w-auto md:h-5% md:w-auto xl:w-auto xl:h-5% lg:ml-4 lg:mr-4 lg:mt-4 lg:mb-4 xl:ml-12 rounded-md">
//             <p className="absolute xl:top-4 z-5 left-1/3 h-5% bg-box-blue text-white px-4 py-2 rounded-md  text-2xl">
//               Get in touch{" "}
//             </p>
//             <div className="ml-10 md:flex md:flex-row md:gap-10 lg:gap-20 xl:flex xl:flex-row xl:gap-50 ">
//               <div className="flex items-center justify-center lg:pb-4 lg:pl-4 xl:pr-4">
//                 <div
//                   ref={searchBarRef}
//                   className="relative flex items-center w-full max-w-md"
//                 >
//                   <div className="md:w-screen xl:w-fit xl:pl-8 ">
//                     <ul className="md:text-xl xl:text-2xl text-white font-light bounce-in-top w-96">
//                       <li className="w-96 bounce-in-top">Manage Inventory</li>
//                       <li className="bounce-in-top">Increase cash flow </li>
//                       <li className="bounce-in-top">Grow you business</li>
//                       <li className="bounce-in-top">
//                         Promote products and deals
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-5 pr-36 mt-7  justify-start items-center">
//                 <input
//                   type="text"
//                   placeholder="Enter Your Name"
//                   className="w-72 h-10 px-5 "
//                 />
//                 <input
//                   type="text"
//                   placeholder="Enter Your Contact"
//                   className="w-72 h-10 px-5"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Enter Your Email"
//                   className="w-72 h-10 px-5"
//                 />
//                 <button className="bg-box-blue text-white rounded-lg w-fit p-2 my-2">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=" w-full h-full">
//           <div className="flex justify-center items-center  mt-24">
//             {mobiles.map((item, key) => {
//               return (
//                 <div key={key} className="flex justify-center mr-4">
//                   <img
//                     src={item}
//                     alt={`Mobile ${key}`}
//                     className="h-[350px] w-52 hover:scale-110 transition duration-300 ease-in-out rounded-lg"
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <div
//         className="bg-yellow-100 mt-8 cursor-pointer text-blue-900 font-semibold p-3 flex justify-center items-center text-[17px]"
//         onClick={scrollToTop}
//       >
//         {" "}
//         Back To Top
//         <IoIosArrowUp className="w-8 h-6" />
//       </div>
//     </>
//   );
// }

// export default Sliders;


