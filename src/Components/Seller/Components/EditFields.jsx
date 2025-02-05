import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditFields = () => {
  const { addproductID } = useParams();
  const [ProductData, setProductData] = useState(null);
  useEffect(() => {
    const GetProductById = async () => {
      try {
        const response = await fetch(
          `http://ec2-100-29-38-82.compute-1.amazonaws.com/api/ProductFilter/GetProductsById?AddproductID=${addproductID}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          const errorDetails = await response.json();
          throw new Error(
            `Error: ${response.status} ${
              response.statusText
            } - ${JSON.stringify(errorDetails)}`
          );
        }

        const result = await response.json();
        setProductData(result.productfilter[0]);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
      }
    };
    GetProductById();
  }, []);
  return (
    <div className="w-full h-full justify-center overflow-x-hidden flex items-center">
      <div className="w-[95%]  h-full">
        <div className="  flex flex-col mb-4">
          <h1 className="text-2xl font-normal text-gray-600 ">EDIT PRODUCT</h1>
          <p className=" my-1 w-[90px] border-blue-600 border-b-[3px]"></p>
        </div>
        {/* section1 start */}

        <div className="flex  w-full Largest:w-[80%] flex-row justify-between">
          <div className="flex flex-col  gap-5 items-center text-gray-600  ">
            <div className="flex flex-col">
              <label className="text-base">Category Specification</label>
              <input
                type="text"
                value={ProductData?.productcategory_id}
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Brand Name</label>
              <input
                type="text"
                value={ProductData?.brandName}
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">About the Product</label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.productName}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base">Manufacturer</label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.
                  manufacturer
                  }
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base">Pack Quantity</label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.
                  packQuantity}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
          </div>

          {/* section1 end */}

          {/* section2 start */}
          <div className="flex flex-col gap-5 items-center text-gray-600 ">
            <div className="flex flex-col">
              <label className="text-base">
                Product Type<span className="text-red-600 text-xl">*</span>
              </label>
              <input
                type="text"
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="">
                Price($)<span className="text-red-600 text-xl">*</span>
              </label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.priceName}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base"> UPN Member Price($)</label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.upNmemberPrice}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex  flex-col">
              <label className="text-base"> Strength</label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.strength}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base">Pack Type</label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.
                  packType}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
          </div>

          {/* section2 end */}

          {/* section3 start */}

          <div className="flex flex-col  gap-5 items-baseline text-gray-600 ">
            <div className="flex flex-col">
              <label className="text-base">Product Category</label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.ndCorUPC}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Amount in Stock</label>
              <input
                type="text"
                id="Upn_Mem"
                value={ProductData?.packQuantity}
                className="w-44 h-8 border-slate-300 border "
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Sale Price($)</label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.salePrice}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">From</label>
              <input
                type="text"
                value={ProductData?.fromdate}
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base">Pack Condition</label>
              <input
                type="text"
                value={ProductData?.packCondition}
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
          </div>

          {/* section3 end */}

          {/* section4 start */}
          <div className="flex flex-col  gap-5 items-center text-gray-600 ">
            <div className="flex flex-col">
              <label className="text-base"> Product Name </label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.productName}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="">
                Taxable<span className="text-red-600 text-xl ">*</span>
              </label>
              <input
                type="text"
                value={ProductData?.taxable}
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Sale Price Form($)</label>
              <input
                type="text"
                value={ProductData?.salePriceFrom}
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base">Lot Number</label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.lotNumber}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
          </div>
          {/* section-5 start */}
          <div className="flex flex-col gap-5  items-center text-gray-600 ">
            <div className="flex flex-col">
              <label className="">
                {" "}
                NDC/UDC
                <span className="text-red-600 text-xl">*</span>
              </label>
              <input
                type="text"
                id="product_name"
                value={ProductData?.ndCorUPC}
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Product Details</label>
              <input
                type="text"
                value={ProductData?.productDescription}
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-base">Sale Price To($)</label>
              <input
                type="text"
                value={ProductData?.salePriceTo}
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base">Expiration Date</label>
              <input
                type="text"
                value={ProductData?.expirationDate}
                id="product_name"
                className=" w-44 h-8 border-slate-300 border"
              />
            </div>
          </div>
          {/* section-5 end */}
        </div>
      </div>
    </div>
  );
};

export default EditFields;
