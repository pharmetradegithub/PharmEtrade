import React, { useEffect, useState } from "react";
import Buy from "../assets/Buy.png";
import bid from "../assets/Bid.png";
import hand from "../assets/Join.png";
import sale from "../assets/Sell.png";
import { useNavigate } from "react-router-dom";

function PLefts() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/signup");
  }
  function handleBuy() {
    navigate("/products");
  }
  function handleAdmin() {
    navigate("/seller");
  }
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` fixed top-44 bottom-0 left-0 overflow-y-auto ${
        scrollY > 450 && scrollY < 2700 ? "" : "hidden"
      }`}
    >
      <ul className="list-none space-y-4">
        <li onClick={handleBuy}>
          <a
            href="#"
            style={{ borderColor: "#41cdcf", color: "#41cdcf" }}
            className="flex items-center bg-green-50 border-2 border-green-600 text-green-600 rounded-r-full h-14 w-14 hover:w-28 transition-all duration-400 ease-in-out overflow-hidden relative group"
          >
            <span className="absolute left-0 whitespace-nowrap transition-all duration-400 ease-in-out transform -translate-x-full group-hover:translate-x-0">
              Buy
            </span>
            <img src={Buy} className="ml-auto mr-6 text-2xl w-8" />
          </a>
        </li>
        <li onClick={handleClick}>
          <a
            href="#"
            className="flex items-center bg-pink-50 border-2 border-pink-600 text-pink-600 rounded-r-full h-14 w-14 hover:w-28 transition-all duration-400 ease-in-out overflow-hidden relative group"
          >
            <span className="absolute left-0 hover:left-4 whitespace-nowrap transition-all duration-400 ease-in-out transform -translate-x-full group-hover:translate-x-0">
              <p>Join</p>
            </span>
            <img src={hand} className="ml-auto mr-6 text-2xl w-8" />
          </a>
        </li>
        <li onClick={handleAdmin}>
          <a
            href="#"
            style={{ borderColor: "#83c847", color: "#83c847" }}
            className="flex items-center bg-blue-50 border-2 border-green-400 text-blue-600 rounded-r-full h-14 w-14 hover:w-28 transition-all duration-400 ease-in-out overflow-hidden relative group"
          >
            <span className="absolute left-0 whitespace-nowrap transition-all duration-400 ease-in-out transform -translate-x-full group-hover:translate-x-0">
              Sell
            </span>
            <img src={sale} className="ml-auto mr-6 text-2xl w-8" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className=" flex items-center bg-sky-50 border-2 border-sky-500 text-sky-500 rounded-r-full h-14 w-14 hover:w-28 transition-all duration-400 ease-in-out overflow-hidden relative group"
          >
            <span className="absolute left-0 whitespace-nowrap transition-all duration-400 ease-in-out transform -translate-x-full group-hover:translate-x-0">
              Bid
            </span>
            <img src={bid} className="ml-auto mr-6 text-2xl w-8" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PLefts;
