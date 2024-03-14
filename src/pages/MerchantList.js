import React, { useState, useEffect } from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from "@mui/material";
import { FaEye } from "react-icons/fa";
import exportImg from "../assets/export.png";
import pencilIcon from "../assets/pencil.png";
import checkIcon from "../assets/check.png";
import { Link } from "react-router-dom";
import { TiExportOutline } from "react-icons/ti";
import { fetchAllSellerData } from "../Apis/api";

const MerchantList = () => {
  // State variables
  const [merchants, setMerchants] = useState([]);
  const [filteredMerchants, setFilteredMerchants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState("--select zone--");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Fetch merchants data
  useEffect(() => {
    const fetchMerchants = async () => {
      try {
        const sellers = await fetchAllSellerData();
        setMerchants(sellers.sellers); // Initialize filteredMerchants with all merchants
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMerchants();
  }, []);

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterMerchants(e.target.value, selectedZone);
  };

  // Handle zone filter change
  const handleZoneChange = (e) => {
    setSelectedZone(e.target.value);
    filterMerchants(searchQuery, e.target.value);
  };

  // Filter merchants based on search query and zone
  const filterMerchants = (query, zone) => {
    const filtered = merchants.filter((merchant) => {
      const nameMatch = merchant.store.toLowerCase().includes(query.toLowerCase());
      const emailMatch = merchant.email.toLowerCase().includes(query.toLowerCase());
      const numberMatch = merchant.contactNumber.toLowerCase().includes(query.toLowerCase());
      const zoneMatch = zone === "--select zone--" || merchant.operatingZone === zone;
      return nameMatch || emailMatch || numberMatch || zoneMatch;
    });
    setFilteredMerchants(filtered);
  };

  // Handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMerchants.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="merchant">
      {/* Inputs Field */}
      <div className="inputs">
        {/* Inputs on left side */}
        <div className="inputs-left">
          <select name="table-view" id="table-view" className="border">
            <option>Range</option>
            <option>20</option>
            <option>30</option>
          </select>
          <Button href="#text-buttons" color="error" className="gap-2" style={{ fontWeight: 'bold' }}>
            <TiExportOutline className="text-3xl" /> Export Data
          </Button>
        </div>

        {/* Inputs on right side */}
        <div className="inputs-right">
          <select name="select-zone border border-gray-500" id="select-zone" value={selectedZone} onChange={handleZoneChange} className="border">
            <option>--select zone--</option>
            <option>Phase-2</option>
            <option>Phase-3</option>
            {/* Add more zone options as needed */}
          </select>
          <input
            type="text"
            name="personal-info"
            placeholder="Name or Email or Number"
            className="search-box"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="border mr-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded" onClick={() => console.log("Go clicked")}>Go</button>
          <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded" onClick={() => console.log("Reset clicked")}>Reset</button>
        </div>
      </div>

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ color: 'grey' }}>
              <TableCell style={{ color: 'red' }}>Name</TableCell>
              <TableCell style={{ color: 'red' }}>Email</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Aadhar</TableCell>
              <TableCell >Pan Card</TableCell>
              <TableCell>Verified</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {merchants.map((data, index) => (
              <TableRow
                key={data.id}

              >
                <TableCell>{data.OwnerName}</TableCell>
                <TableCell>{data.OwnerEmail}</TableCell>
                <TableCell>{data.OwnerMobile}</TableCell>
                <TableCell>{data.OwnerDOB}</TableCell>
                <TableCell>{data.OwnerAddress}</TableCell>
                <TableCell >**** **** **** {((data?.Aadhar).toString() || "**** ***** **** ****")?.slice(11, 15)}</TableCell>
                <TableCell>****{(data.PanCard).slice(5, 9)}</TableCell>
                <TableCell style={{ display: 'flex' }}>

                  {(data.Verified).toString()}

                  {/* <Link to="/MerchantOnboarding">
                    <img src={pencilIcon} alt="Edit" style={{ cursor: "pointer", marginRight: "5px" }} />
                  </Link> */}
                  {/* <img src={checkIcon} alt="Right Tick" style={{ cursor: "pointer" }} /> */}

                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      {/* Pagination */}
      <div className="pagination">
        {/* Implement pagination buttons */}
      </div>
    </div>
  );
};

export default MerchantList;
