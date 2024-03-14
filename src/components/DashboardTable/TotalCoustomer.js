import React from "react";

const TotalCoustomer = ({ Coustomer }) => {
  console.log(Coustomer)
  return (
    <div>
      <div className="overflow-x-auto shadow-md">
        <p className="border border-grey-100 border-2 text-center">Customers List</p>
        <table className="table-auto text-center w-[775px] border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Username</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Email</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Name</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">Mobile</th>

            </tr>
          </thead>
          <tbody>
            {/* Check if totalOrdersData is an array before mapping */}
            {Array.isArray(Coustomer) && Coustomer.slice(0, 5).map((totalCoustomer, index) => (
              <tr key={index}>
                {/* Assuming each order object has properties: name, age, email */}
                <td className="px-4 py-2 border border-gray-300">{totalCoustomer.username}</td>
                <td className="px-4 py-2 border border-gray-300">{totalCoustomer.email}</td>
                <td className="px-4 py-2 border border-gray-300">{totalCoustomer.firstName + " " + totalCoustomer.lastName}</td>
                <td className="px-4 py-2 border border-gray-300">{totalCoustomer.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalCoustomer;
