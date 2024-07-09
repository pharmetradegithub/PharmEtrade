import React from 'react'

const EditFields = () => {
  return (
    <div className="w-full h-full justify-center flex items-center">
    <div className="w-[95%]  h-full">
      <div className="  flex flex-col my-8">
        <h1 className="text-2xl font-normal text-gray-600 ">EDIT PRODUCT</h1>
        <p className=" my-1 w-[90px] border-blue-600 border-b-[3px]"></p>
      </div>
      {/* section1 start */}

      <div className="flex justify-between items-center text-gray-600 my-6 ">
        <div className="flex flex-col">
          <label className="text-base">
            Product ID
            <span className="text-red-600 text-2xl ">*</span>
          </label>{" "}
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base">
            Thumbnail<span className="text-red-600 text-2xl ">*</span>
          </label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base">
            Name:<span className="text-red-600 text-2xl ">*</span>
          </label>{" "}
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base">
            Attribute Set<span className="text-red-600 text-2xl ">*</span>
          </label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-base">
            Product Status<span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
      </div>

      {/* section1 end */}

      {/* section2 start */}
      <div className="flex justify-between items-center text-gray-600 my-6">
        <div className="flex flex-col">
          <label className="text-base">Status</label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base">
            Type<span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base">SKU</label>
          <input
            type="text"
            id="Upn_Mem"
            className="w-56 h-10 border-slate-300 border "
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base">
            Qty<span className="text-red-600 text-2xl ">*</span>
          </label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-base">
            Qty Sold<span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
      </div>

      {/* section2 end */}

      {/* section3 start */}

      <div className="flex justify-between items-baseline text-gray-600 my-6">
        <div className="flex flex-col">
          <label className="text-base">Qty Confirmed</label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base"> Qty Pending</label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base">Price</label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base">Created At</label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-base">Visibility</label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
      </div>

      {/* section3 end */}

      {/* section4 start */}
      <div className="flex  items-center text-gray-600 my-6">
        <div className="flex flex-col">
          <label className="text-base">Website</label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>
        <div className="flex justify-center mx-8 flex-col">
          <label className="text-base"> Action</label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div>

        {/* <div className="flex flex-col">
          <label className="text-base"> Expiration Date:</label>
          <input
            type="text"
            id="product_name"
            className=" w-56 h-10 border-slate-300 border"
          />
        </div> */}
      </div>
      </div>
      </div>
  )
}

export default EditFields
