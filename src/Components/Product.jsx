import React from "react";
import logo from "../assets/Icons/Etrade.png";
import arrowleft from "../assets/leftarr.png";
import heart from "../assets/love.png";
import gal from "../assets/gal.png";
import { Link, useNavigate } from "react-router-dom";
import nature from "../assets/nature.png";
import { useState, useEffect } from "react";

function Product() {
  const [count, setCount] = useState(0);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="bg-red-500 h-dvh">
      <h1>hello</h1>
      <Link to={"/app"}></Link>
    </div>
  );
}

export default Product;
