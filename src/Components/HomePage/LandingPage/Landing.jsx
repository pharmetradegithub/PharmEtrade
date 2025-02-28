import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landing2 from "./Landing2";
import Sliders from "./Sliders";
import banner1 from "../../../assets/BannerText1.png";
import banner2 from "../../../assets/BannerText2.jpg";
import banner3 from "../../../assets/BannerText3.jpg";
import banner4 from "../../../assets/BannerText4.jpg";
import "./Landing.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Landing({ topMargin, wishList, addCart }) {
  const BannerData = useSelector((state) => state.banner.banner);

  const activeBanners = BannerData ? BannerData.filter((banner) => banner.isActive === 1) : [];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Auto play slides
    autoplaySpeed: 3000, // Slide change interval (3 seconds)
    customPaging: () => <div className="custom-dot"></div>, // Custom dot styling
    appendDots: (dots) => <ul className="custom-dots">{dots}</ul>, // Custom dots container
  };

  console.log("activvvbanner", activeBanners)
  return (
    <div className="w-full font-sans">
      <div className="w-full">
        <div
          className="h-fit"
          style={{
            marginTop: `${topMargin}px`,
          }}
        >
          
          <div className="w-full relative mt-10 md:mt-0 h-[150px] md:h-[350px] overflow-hidden">
            {activeBanners.length > 0 ? (
              <Slider {...settings}>
                {activeBanners.map((item, index) => (
                  <div key={index} className="w-full relative" >
                  
                    <Link to={item.navigateUrl}>
                      <button
                        className={`text-white py-6 px-10 bg-blue-900 cursor-pointer rounded-lg font-semibold absolute left-[55%] bottom-[34%]`}
                      >
                        Show Now
                      </button>
                    </Link>
                  
                    <img
                      src={item.imageUrl}
                      alt={`Carousel Image ${index + 1}`}
                      // className="w-full h-[200px] sm:h-[240px] md:h-[350px] lg:h-[350px] object-cover"

                      className="w-full h-[150px] md:h-[350px] Largest:h-[350px] Largest:object-fill "
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <p className="text-center text-gray-500">No banners available</p>
            )}
          </div>
        </div>
        <div className="w-full bg-slate-200 pb-6">
          <Landing2 addCart={addCart} wishList={wishList} />
          <Sliders addCart={addCart} wishList={wishList} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
