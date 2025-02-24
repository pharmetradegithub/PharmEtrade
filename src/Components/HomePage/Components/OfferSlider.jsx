



// import React, { useEffect, useRef } from "react";
// import left from "../../../assets/arrowleft.png";
// import right from "../../../assets/arrowright.png";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchGetProductOffer, fetchProductOffer } from "../../../Api/ProductApi";
// // import { fetchGetProductOffer, fetchProductOffer } from "../../../Api/ProductApi";

// let newoffer = [];

// const OfferSlider = ({ images, Title }) => {
//   const carouselContainer = useRef(null);
//   const specialOffers = useSelector((state) => state.product.productSpecialOffer);
//   console.log("offer-->", specialOffers)
//   newoffer = [];
//   specialOffers?.map((element, index) => {
//     const newObject = {...element, image: images[index]};
//     newoffer.push(newObject);
//     return newObject
//   })
//   console.log("new offere", newoffer);

//   const navigation = (dir) => {
//     const container = carouselContainer.current;

//     const scrollAmount =
//       dir === "left"
//         ? container.scrollLeft - (container.offsetWidth + 20)
//         : container.scrollLeft + (container.offsetWidth + 20);

//     container.scrollTo({
//       left: scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProductOffer()); // Dispatch the API call to fetch special offers
//   }, [dispatch]);


//   const overlayTexts = [
//     "Up to 65% off | Deals on OTC Products",
//     "Up to 45% off | Deals on RX Products",
//     "Up to 65% off | Deals on OTC Products",
//     "Up to 45% off | Deals on RX Products",
//     "Up to 65% off | Deals on OTC Products",
//     "Up to 45% off | Deals on RX Products",
//     "Up to 65% off | Deals on OTC Products",
//     "Up to 45% off | Deals on RX Products",
//   ];
//   console.log("offerSpecial---------", specialOffers)

//   const handleSeeOffers = (categorySpecificationId) => {
//     try {
//       dispatch(fetchGetProductOffer(categorySpecificationId))
//     }
//     catch (error) {
//       console.log("error")
//     }
//   }


//   return (
//     <div className="flex flex-col justify-center gap-10 pt-4 pb-8">
//       <div className="flex justify-between ml-4 font-semibold text-3xl">
//         <p>{Title}</p>

//         <div className="flex justify-end mr-14 gap-2">
//           <button
//             className="bg-white rounded-sm p-2"
//             onClick={() => navigation("left")}
//           >
//             <img src={left} className="w-4 h-4" alt="Left" />
//           </button>
//           <button
//             className="bg-white rounded-sm p-2 "
//             onClick={() => navigation("right")}
//           >
//             <img src={right} className="w-4 h-4 " alt="Right" />
//           </button>
//         </div>
//       </div>
//       <div className="w-full px-1 flex  justify-between">
//         <div
//           ref={carouselContainer}
//           className="flex w-full   gap-2 overflow-x-scroll "
//         >
//           {newoffer.map((element, index) => (
//             <div
//               key={index}
//               className="border bg-white shadow-2xl min-w-[300px] Laptop:min-w-[320px] p-4 relative flex flex-col gap-3 items-center justify-center"
//             >
               
//                 <p key={index} className="w-full h-12 text-[17px] font-semibold cursor-pointer">
//                 Up to {element?.discount}% off | Deals on {element?.specificationName}
//                 </p>
            
//               <div>
//                 {" "}
//                 <Link to="/allProducts/offers">
//                   <img
//                     src={element.image}
//                     className="w-[300px] cursor-pointer Laptop:w-[320px] shadow-sm shadow-slate-100 Laptop:h-[200px] h-[180px] rounded-sm"
//                     alt={`Offer ${index + 1}`}
//                     onClick={()=>handleSeeOffers(element?.categorySpecificationId)}
//                   />
//                 </Link>
//               </div>

//               <div className="w-full mt-8 text-black flex font-semibold justify-end" onClick={()=>handleSeeOffers(element?.categorySpecificationId)}>
//                 <Link to="/allProducts/offers" className="hover:text-red-500">
//                   See all offers
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OfferSlider;




import React, { useEffect, useRef } from "react";
import left from "../../../assets/arrowleft.png";
import right from "../../../assets/arrowright.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProductOffer, fetchOfferGetAll, fetchProductOffer } from "../../../Api/ProductApi";
// import { fetchGetProductOffer, fetchProductOffer } from "../../../Api/ProductApi";

let newoffer = [];

const OfferSlider = ({ images, Title }) => {
  const carouselContainer = useRef(null);
  const specialOffers = useSelector((state) => state.product.productSpecialOffer) || [] ;
  const getAll = useSelector((state) => state.offer.OfferGetLanding) || [];
  newoffer = [];
  specialOffers?.map((element, index) => {
    const newObject = { ...element, image: '' };
    newoffer.push(newObject);
    return newObject
  })

  newoffer?.map((element) => {
    getAll?.map((data) => {
      if (element.categorySpecificationId == data.categorySpecificationId) {
        element.image = data.imageUrl
      }
    })
  })

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductOffer()); // Dispatch the API call to fetch special offers
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOfferGetAll())
  }, [])

  const overlayTexts = [
    "Up to 65% off | Deals on OTC Products",
    "Up to 45% off | Deals on RX Products",
    "Up to 65% off | Deals on OTC Products",
    "Up to 45% off | Deals on RX Products",
    "Up to 65% off | Deals on OTC Products",
    "Up to 45% off | Deals on RX Products",
    "Up to 65% off | Deals on OTC Products",
    "Up to 45% off | Deals on RX Products",
  ];

  const handleSeeOffers = (categorySpecificationId) => {
    try {
      dispatch(fetchGetProductOffer(categorySpecificationId))
    }
    catch (error) {
      console.log("error")
    }
  }


  return (
    <div className="flex flex-col justify-center gap-3 Large:gap-4 pt-4 pb-1">
      <div className="flex justify-between  sm:justify-between ml-1 font-semibold text-3xl">
        <p className=" text-xl sm:text-xl md:text-xl lg:text-3xl">{Title}</p>

        <div className="flex justify-end mr-1 gap-2">
          <button
            className="bg-white rounded-sm p-2"
            onClick={() => navigation("left")}
          >
            <img src={left} className="w-4 h-4" alt="Left" />
          </button>
          <button
            className="bg-white rounded-sm p-2  "
            onClick={() => navigation("right")}
          >
            <img src={right} className="w-4 h-4 " alt="Right" />
          </button>
        </div>
      </div>
      <div className="w-full px-1 flex  justify-between">
        <div
          ref={carouselContainer}
          className="flex w-full   gap-2 overflow-x-scroll "
        >
          {/* old code==== */}
          {/* {newoffer.map((element, index) => (
            <div
              key={index}
              className="border bg-white shadow-2xl min-w-[260px] sm:w-[500px] Laptop:min-w-[320px] p-4 relative flex flex-col gap-3 items-center justify-center"
            >
               
                <p key={index} className="w-full h-12 text-[17px] font-semibold cursor-pointer">
                Up to {element?.discount}% off | Deals on {element?.specificationName}
                </p>
            
              <div>
                {" "}
                <Link to="/allProducts/offers">
                  <img
                    src={element.image}
                    className="w-[300px] cursor-pointer Laptop:w-[320px] shadow-sm shadow-slate-100 Laptop:h-[200px] h-[180px] rounded-sm"
                    alt={`Offer ${index + 1}`}
                    onClick={()=>handleSeeOffers(element?.categorySpecificationId)}
                  />
                </Link>
              </div>

              <div className="w-full mt-8 text-black flex font-semibold justify-end" onClick={()=>handleSeeOffers(element?.categorySpecificationId)}>
                <Link to="/allProducts/offers" className="hover:text-red-500">
                  See all offers
                </Link>
              </div>
            </div>
          ))} */}
          {/* old code ==== */}
          {/* new code==== */}
          {/* {newoffer.map((element, index) => (
            <div
              key={index}
              className="border shadow-2xl w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] Laptop:w-[350px] Laptop:h-[350px] p-4 relative flex flex-col bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${element.image})`, backgroundSize: "cover" }}
            >
              <div className="flex flex-col flex-grow justify-between">
                <p className="w-full text-[15px] font-semibold cursor-pointer bg-white/80 p-2 rounded-md">
                  Up to {element?.discount}% off | Deals on {element?.specificationName}
                </p>
                <div className="w-full text-black font-semibold flex justify-end">
                  <Link to="/allProducts/offers" className="hover:text-red-500">
                    See all offers
                  </Link>
                </div>
              </div>
            </div>
          ))} */}
          {/* new code==== */}
          {/* <div className="w-full grid grid-cols-1 gap-4 px-4"> */}
            {newoffer.map((element, index) => (
              <div
                key={index}
                className="border shadow-2xl w-full h-[300px] min-w-[260px]  sm:w-[500px] Laptop:min-w-[320px] p-4 relative flex flex-col bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${element.image})`, backgroundSize: "cover" }}
              >
                <div className="flex flex-col flex-grow justify-between">
                  <p className="w-full text-[15px] font-semibold cursor-pointer bg-white/80 p-2 rounded-md">
                    Up to {element?.discount}% off | Deals on {element?.specificationName}
                  </p>
                  <div className="w-full text-black font-semibold flex justify-end">
                    <Link to="/allProducts/offers" className="hover:text-red-500">
                      See all offers
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {/* </div> */}





        </div>
      </div>
    </div>
  );
};

export default OfferSlider;




