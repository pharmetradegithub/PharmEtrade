import React from 'react'

function LayoutOtcProducts() {

    const products = useSelector((state) => state.product.Products);
    const [productList, setproductList] = useState(products);
    console.log("layoutproduct-->",productList)
    useEffect(() => {
      if (products) {
        const updatedProducts = products.map((product) => ({
          ...product,
          CartQuantity: 1, // Set initial quantity to 1 for all products
        }));
        setproductList(updatedProducts);
      }
    }, [products]);
  return (
    <div className="w-full mt-5">
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-between">
          {productList.length > 0 ? (
            productList.map((product, index) => (
              <div
                key={index}
                className="flex p-4 border w-full justify-around shadow-lg rounded-md mb-4"
              >
                <div className="flex flex-col mx-2">
                  <img
                    src={product.productGallery.imageUrl}
                    className="w-36 p-2 hover:cursor-pointer rounded-lg h-28 bg-slate-200"
                    alt="Product"
                    onClick={() =>
                      handleProductDetails(product.productID, product)
                    }
                  />
                </div>

                <div className="flex flex-col mx-3">
                  <p className="font-semibold">Item Details</p>
                  <div className="mt-2">
                    <p className="font-semibold">{product.productName}</p>

                    <p className="text-xs mt-1 w-60">
                      {showMore[index]
                        ? product.productDescription
                        : `${product.productDescription.slice(0, 50)}...`}
                      {product.productDescription.length > 50 && (
                        <button
                          className="text-blue-500 ml-1"
                          onClick={() => toggleShowMore(index)}
                        >
                          {showMore[index] ? "See Less" : " More details"}
                        </button>
                      )}
                    </p>
                    <div className="flex w-full mt-1 gap-1">
                      <img src={Expicon} className="w-6 h-6" />
                      <div className="flex flex-col">
                        <p>Exp.Date :</p>
                        <p className="font-semibold">
                          {product.expiryDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mx-3">
                  <p className="font-semibold">Package Details</p>
                  <div className="mt-2">
                    <p className="text-red-500 font-semibold">
                      {product.package}
                    </p>
                    <p className="text-base mt-1">
                      {product.packCondition}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mx-3">
                  <p className="font-semibold">Unit Price</p>
                  <div className="mt-2">
                    <p className="font-semibold">${product.salePrice}</p>
                  </div>
                </div>

                <div className="flex flex-col mx-3">
                  <p className="font-semibold">Quantity</p>
                  <div className="mt-2 flex">
                    <input
                      type="number"
                      disabled={
                        cart.some(
                          (item) =>
                            item.product.productID == product.productID
                        ) === 1
                      }
                      value={product.CartQuantity
                        // cart.some(
                        //     (item) =>
                        //         item.product.productID === product.productID
                        //   )
                        //     ? cart.find(
                        //         (item) =>
                        //             item.product.productID === product.productID
                        //       ).quantity
                        //       : product.CartQuantity
                          }
                      onChange={(e) =>
                        handleQuantityChange(
                          index,
                          parseInt(e.target.value)
                        )
                      }
                      className="w-16 border rounded-md text-center"
                      min="1"
                    />
                  </div>
                </div>

                {/* Wishlist */}
                <div className="flex flex-col items-center justify-between">
                  <div className="mt-2">
                    <img
                      src={
                        wishlistProductIDs.includes(product.productID)
                          ? filledHeart
                          : emptyHeart
                      }
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => handleClick(product.productID)}
                      alt="Wishlist Icon"
                    />
                  </div>

                  {/* Add to Cart */}
                  {/* {cart.some(
                    (item) => item.product.productID == product.productID
                  ) == 0 ? ( */}
                    <div
                      onClick={() =>
                        handleCart(product.productID, product.CartQuantity)
                      }
                      className="flex text-white h-[40px] cursor-pointer px-2 rounded-lg bg-blue-900 mx-3 justify-center items-center"
                    >
                      <div className="mr-1">
                        <img
                          src={addcart}
                          className="w-6 h-6 cursor-pointer"
                          alt="Add to Cart Icon"
                        />
                      </div>
                      <p className="font-semibold">{"Add to Cart"}</p>
                    </div>
                  {/* ) : ( */}
                    {/* <div className="flex text-white cursor-pointer h-[40px] px-2 rounded-lg bg-sky-600 mx-3 justify-center items-center">
                      <div className="mr-1">
                        <img
                          src={addcart}
                          className="w-6 h-6 "
                          alt="Add to Cart Icon"
                        />
                      </div>
                      <p className="font-semibold">{"Added Cart"}</p>
                    </div> */}
                  {/* )} */}
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LayoutOtcProducts
