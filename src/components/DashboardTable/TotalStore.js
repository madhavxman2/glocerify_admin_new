import React from "react";

const TotalStore = (Store) => {

  console.log(Store.Store)
  return (
    <div>
      <div className="overflow-x-auto shadow-md">
        <p className="border border-grey-100 border-2 text-center">Merchants List</p>
        <table className="table-auto text-center w-[100%] border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">NAME</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">EMAIL</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">NUMBER</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">AADHAR</th>
              <th className="px-4 py-2 bg-gray-100 border border-gray-300">PAN</th>
            </tr>
          </thead>
          <tbody>

            {Array.isArray(Store.Store) && Store.Store.map((store, index) => (
              <tr key={index}>

                <td className="px-4 py-2 border border-gray-300">{store.OwnerName}</td>
                <td className="px-4 py-2 border border-gray-300">{store.OwnerEmail}</td>
                <td className="px-4 py-2 border border-gray-300">{store.OwnerMobile}</td>
                <td className="px-4 py-2 border border-gray-300">{store.Aadhar}</td>
                <td className="px-4 py-2 border border-gray-300">{store.PanCard}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalStore;
