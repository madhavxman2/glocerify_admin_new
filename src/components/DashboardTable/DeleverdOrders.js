import React from "react";

const DeliveredOrders = ({ deliveryBoy }) => {
  return (
    <div>
      <div className="overflow-x-auto shadow-md">
        <p className="border border-grey-100 border-2 text-center">Runners List</p>
        <table className="table-auto text-center w-[775px] border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Name</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Email</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Mobile</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Earnings</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(deliveryBoy) &&
              deliveryBoy.map((delivered, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    {delivered.firstName} {delivered.lastName}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">{delivered.email}</td>
                  <td className="px-4 py-2 border border-gray-300">{delivered.mobile}</td>
                  <td className="px-4 py-2 border border-gray-300">{"₹" + delivered.earnings}</td>
                  <td className="px-4 py-2 border border-gray-300">{delivered.shift_status.toString()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveredOrders;
