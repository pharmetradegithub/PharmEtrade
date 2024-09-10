import React from 'react'
import offer from "../../assets/offers_1.png";


const ItemsAndDelivery = () => {

    const itemsdetails = [
        {
          // img: 'offer',  // Assuming 'offer' is a string representing the image or icon name
          name: "Pharmacy Pharmetrade",
          type: "Syrup",
          Strength: "500mg",
          Price: 320,
          purchase: "sold by",
          Company_Name: "Pharmetrade",
          option: "Choose a delivery option",
          delivery1: "Monday 9 Sept",
          deliivery_type1: "FREE Delivery",
        },
      ];

  return (
    <div>
    <h1>4 Review items and delivery</h1>

    <div className=" border rounded-md p-4 ">
      <h1 className="text-lg font-semibold text-green-600">
        Arriving 7 Sept 2024
      </h1>
      <p className="text-base">
        If you order in the next 10 hours and 50 minutes (
        Details )
      </p>
      <p className="text-base">
        Items dispatched by Pharmetrade{" "}
      </p>
      {itemsdetails.map((itemsdetail, index) => (
        <div
          key={index}
          className="flex justify-around my-4"
        >
          <div className="mt-4">
            {/* <p>{itemsdetail.src}</p>  */}
            <img src={offer} className="w-28 h-24  " />
          </div>
          <div>
            <p className="text-base font-semibold">
              {itemsdetail.name}
            </p>
            <p className="text-base font-semibold">
              {itemsdetail.type}
            </p>
            <p className="text-base font-semibold">
              {itemsdetail.Strength}
            </p>
            <p className="text-red-600 font-semibold">
              {" "}
              ${itemsdetail.Price}
            </p>
            <input
              type="number"
              //  value={quantities[index]}
              // onChange={(e) =>
              //   handleQuantityChange(index, Number(e.target.value))
              // }
              className="text-xl border rounded-lg p-1 w-16"
              min="1"
            />
            <div className="flex">
              <p>{itemsdetail.purchase}</p>
              <p>{itemsdetail.Company_Name}</p>
            </div>
          </div>

          <div>
            <p className="text-base font-semibold">
              {itemsdetail.option} :
            </p>
            <label className="flex items-center text-base text-green-600 font-semibold">
              <input
                type="radio"
                name={`delivery${index}`}
                value={itemsdetail.delivery_type1}
                className="mr-2"
              />
              {itemsdetail.delivery1}
            </label>
            <p className="text-base ml-5">
              {itemsdetail.deliivery_type1}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ItemsAndDelivery
