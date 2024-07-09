

import React from "react";
import { CiMenuKebab } from "react-icons/ci";

import EarningsChart from "../Components/EarningChart";

const Earnings = () => {
  const stats = [
    { label: "Orders", value: 2420, percentage: 20 },
    { label: "Total Amount ", value: 3843, percentage: 25 },
    { label: "Total Earnings ", value: 1700, percentage: -1 },
    { label: "Admin Comission", value: "$2530", percentage: 17 },
  ];
  const data = [
    {
      interval: "Sep 14, 2021",
      orders: 2,
      totalAmount: "$20.68",
      totalEarning: "$19.41",
      totalDiscountAmount: "$0.00",
      adminCommission: "$1.27",
    },
  ];

  return (
    <div className="  w-full h-full flex  justify-center items-center">
      <div className=" w-[95%] h-full mt-4">
        <div className=" flex justify-between">
          <p className="text-[22px] text-blue-900 font-medium">Earnings</p>
        </div>
        <div className=" flex my-4 flex-wrap justify-normal gap-2 items-center p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-28 w-56  border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-[17px] text-gray-700 font-normal">
                    {stat.label}
                  </div>
                  <div className="menu-icon">
                    <CiMenuKebab />
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div
                    className={`text-sm 
                     ${
                       stat.percentage > 0 ? " bg-green-400" : " bg-red-400"
                     } p-1 rounded-lg`}>
                    ↑ {stat.percentage} %
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex w-full justify-between p-2">
          <div className=" flex justify-center w-full bg-gray-100">
            <EarningsChart />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div>Latest Earnings</div>
            <div className="flex flex-row gap-6">
              <div>filter icon</div>
              <div>
                {" "}
                <select className="h-fit py-1">
                  <option>Intervals </option>
                  <option>Orders</option>
                  <option>Total Amount </option>
                  <option>Total Earnings </option>
                  <option>Total Discounts Amount </option>
                  <option>Admin Comission </option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 text[15px]">
            <h2 className="text-xl font-semibold mb-4">Latest Earnings</h2>
            <table className="min-w-full bg-white   border-gray-200">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="py-2  px-4 border-b">Interval</th>
                  <th className="py-2 px-4 border-b border-gray-200">Orders</th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Total Amount
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Total Earning
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Total Discount Amount
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Admin Commission
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <>
                    <tr key={index}>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.interval}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.orders}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalEarning}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalDiscountAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.adminCommission}
                      </td>
                    </tr>
                    <tr key={index}>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.interval}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.orders}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalEarning}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalDiscountAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.adminCommission}
                      </td>
                    </tr>
                    <tr key={index}>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.interval}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.orders}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalEarning}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalDiscountAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.adminCommission}
                      </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
