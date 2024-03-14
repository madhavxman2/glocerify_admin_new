import React from "react";

const TotalOrders = ({ ordersData }) => {
  console.log(ordersData)
  return (
    <div>
      <div className="overflow-x-auto shadow-md">
        <p className="border border-grey-100 border-2 text-center">Orders List</p>
        <table className="table-auto text-center w-[775px] border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Title</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Category</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300"> price</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {/* Check if totalOrdersData is an array before mapping */}
            {Array.isArray(ordersData) && ordersData.slice(0, 5).map((order, index) => (
              <tr key={index}>

                <td className="px-4 py-2 border border-gray-300">{(order.product.products_title).slice(0, 50)}...</td>
                <td className="px-4 py-2 border border-gray-300">{order.product.parent_category_name}</td>
                <td className="px-4 py-2 border border-gray-300">{order.order_price}</td>
                <td className="px-4 py-2 border border-gray-300">{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalOrders;
