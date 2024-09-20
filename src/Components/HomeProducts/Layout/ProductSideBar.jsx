import React, { useEffect, useState } from "react";
import dropdown from "../../../assets/Icons/dropdown.png";
import dropdownup from "../../../assets/Icons/dropdownUp.png";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const categories = [
  // "All categories",
  "Prescription Medications",
  "Baby & Child Care Products",
  "Health care products",
  "Household Suppliers",
  "Oral Care Products",
  "Stationery & Gift Wrapping Supplies",
  "Vision Products",
  "Diet & Sports Nutrition",
  "Vitamins, Minerals & Supplements",
  "Personal Care products",
];

const allCategoriesSubItems = [
  { name: "Prescription_drug", checked: false },
  // { name1: "(EA)", checked1: false },
  // { name: "Cough Cold & Flu", checked: false },
  // { name: "Digestive Health", checked: false },
];

function ProductSideBar() {
  // const [dropdownOpen, setDropdownOpen] = useState({
  //   allCategories: false,
  //   deals: false,
  //   brands: false,
  //   packing: false,
  // });
  const productCriteria = useSelector(
    (state) => state.product.productsByCriteria
  );
  const location = useLocation();
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("CategoryName");

    if (category) {
      setCategoryName(category);
    }
  }, [location.search]);

  const toggleDropdown = (category) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="w-full overflow-y-scroll h-full bg-slate-50 text-lg py-4 pl-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="w-[90%] mb-2 rounded-md bg-blue-900 text-white"
        >
          <div className={`border-1 ${categoryName.split(" ")[0] === category.split(" ")[0]?"bg-gray-400":"bg-blue-900"} px-4 py-1 rounded-md text-base flex justify-between items-center cursor-pointer text-white hover:bg-gray-400 hover:text-black `}>
            <p>{category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSideBar;
