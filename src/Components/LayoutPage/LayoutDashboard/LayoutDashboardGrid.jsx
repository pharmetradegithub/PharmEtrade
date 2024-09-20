import React from 'react'
const LayoutDashboardGrid = ( { onClose }) => {

    const products = [
        {
          id: "000",
          thumbnail: "D061D23",
          name: "Generic Medicine",
          attributeSet: "350",
          productStatus: "",
          status: "",
          type: "View Order",
        },
        {
          id: "001",
          thumbnail: "D061D23",
          name: "Another Medicine",
          attributeSet: "250",
          productStatus: "",
          status: "",
          type: "View Order",
        },
        {
            id: "000",
            thumbnail: "D061D23",
            name: "Generic Medicine",
            attributeSet: "350",
            productStatus: "",
            status: "",
            type: "View Order",
          },
          {
            id: "000",
            thumbnail: "D061D23",
            name: "Generic Medicine",
            attributeSet: "350",
            productStatus: "",
            status: "",
            type: "View Order",
          },
          {
            id: "000",
            thumbnail: "D061D23",
            name: "Generic Medicine",
            attributeSet: "350",
            productStatus: "",
            status: "",
            type: "View Order",
          },
          {
            id: "000",
            thumbnail: "D061D23",
            name: "Generic Medicine",
            attributeSet: "350",
            productStatus: "",
            status: "",
            type: "View Order",
          },
          {
            id: "000",
            thumbnail: "D061D23",
            name: "Generic Medicine",
            attributeSet: "350",
            productStatus: "",
            status: "",
            type: "View Order",
          },
          {
            id: "000",
            thumbnail: "D061D23",
            name: "Generic Medicine",
            attributeSet: "350",
            productStatus: "",
            status: "",
            type: "View Order",
          },
        {
            id: "001",
            thumbnail: "D061D23",
            name: "Another Medicine",
            attributeSet: "250",
            productStatus: "",
            status: "",
            type: "View Order",
          },
      ];
  return (
    <div>

<div className="border rounded-md text-[15px] bg-white mt-4  ">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr className="border-b-2">
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Purchased On</th>
                <th className="px-4 py-2 text-left">Products</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">View</th>
                
              </tr>
            </thead>
            <tbody className='overflow-y-scroll'>
            {products.map((product,index)=>(

<tr key={index} className="border-b  ">
<td className="px-4 py-2">{product.id}</td>
<td className="px-4 py-2">{product.thumbnail}</td>
<td className="px-4 py-2">{product.name}</td>
<td className="px-4 py-2">{product.attributeSet}</td>
<td className="px-4 py-2">{product.productStatus}</td>
<td className="px-4 py-2">{product.status}</td>
<td className="px-4 py-2">{product.type}</td>
</tr>

            ))}
                   
            
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default LayoutDashboardGrid