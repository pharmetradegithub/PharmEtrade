import React from 'react'
import offer from '../../../assets/offers_1.png'
import edit from '../../../assets/Edit.png'
//  "../../../../assets/Edit.png";
import Bin from "../../../assets/Bin.png";
import Deactivate from "../../../assets/Deactivate.png";
import { Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
const Products = () => {

    const products = useSelector((state) => state.product.Products);

    // const details = [
    //     {
    //         Product_Name: "1-CLIC VIAL RV 145 GREEN 20DR",
    //         Manufacturer: "CENTOR INC",
    //         Brand_Name: "	Tester",
    //     },
    //     {
    //         Product_Name: "HYDRATING OI 41% 106GM",
    //         Manufacturer: "DYNAREX CORP",
    //         Brand_Name: "	Tester",
    //     },
    //     {
    //         Product_Name: "	3 DAY VAGINAL CREAM 2% ***TAR",
    //         Manufacturer: "TARO PHARMACEUTICALS USA CS",
    //         Brand_Name: "	Tester",
    //     }
    // ]
    return (
        <div className='bg-gray-100 w-full h-full flex overflow-y-scroll items-center justify-center'>

        <div className='w-[95%] h-full mt-8'>
            <div>
                <h1 className='text-blue-900 text-xl font-semibold my-3'>Products</h1>
            </div>
            
            <table className='w-full'>
                <thead className='bg-blue-900 text-white  '>
                    <tr className='border-b-2 text-left '>
                    <th className='py-2 px-5'>ID</th>
                        <th className='py-2 px-5'>Thumbnail</th>
                        <th className='py-2'>Product Name</th>
                        <th className='py-2'>Manufacturer</th>
                        <th className='py-2'>Category Specification</th>
                        <th className='py-2  text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((detail, index) => (
                        <tr className='border-b'>
                            <td className='px-4 py-2"'>
                                {index+1}
                            </td>
                            <td className='px-4 py-2"'>
                                <img src={detail?.productGallery?.imageUrl} className='w-16 h-12'/>
                            </td>
                            <td>
                                {detail.productName}

                            </td>
                            <td>{detail.manufacturer}</td>
                            <td>{detail.categorySpecification.specificationName                            }</td>
                            <td className="px-4  justify-center py-2 cursor-pointer flex items-center space-x-2">
                          <Tooltip title="Edit" placement="top">
                            <img
                              src={edit}
                              alt="Edit"
                              className="cursor-pointer w-7 h-7 "
                            //   onClick={() => handleEditProduct(product)}
                            />
                          </Tooltip>
                          <Tooltip placement="top" title="Delete">
                            <img
                              src={Bin}
                              alt="Delete"
                              className="cursor-pointer w-4 h-4"
                            //   onClick={() => DeleteProduct(product.productID)}
                            />
                          </Tooltip>
                          <Tooltip title="Deactivate" placement="top">
                            <img
                              src={Deactivate}
                              alt="Deactivate"
                              className="cursor-pointer w-4 h-4"
                            //   onClick={() => deactivatePopUp(product.productID)}
                            />
                          </Tooltip>
                        </td>

                        </tr>
                    ))}

                </tbody>
            </table>

            </div>

        </div>
    )
}

export default Products