import React, { useState, useEffect } from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import CircularProgress from '@mui/material/CircularProgress';
import { TiExportOutline } from 'react-icons/ti';
import { Stack, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ApproveShop,ApproveDriver, fetchAllSellerData, getAllDeliveryBoy } from '../Apis/api';

const VerifyDriver = () => {
  const [Driverdata, setDriverData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState({ id: "", isverified: false });

  useEffect(() => {
    fetchDriver();
  }, []);

  const fetchDriver = async () => {
    const res = await getAllDeliveryBoy()
    console.log(res)
    if (res.data.success) {
      setLoading(false)
    }
    else {
      return <h3>Some error Occured</h3>
    }
    setDriverData(res.data.deliveryboys)
  }



  const handleOpenModal = (id, isverified) => {
    setSelectedDriver({ id, isverified });
    setOpenModal(true);
  };

  console.log(selectedDriver)
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleApprove = async () => {
    // Logic to handle approval for selectedOrderId
    console.log("Approved:", selectedDriver);
    setOpenModal(false);
    const res = await ApproveDriver(selectedDriver.id)
    console.log(res)
  };

  const handleReject = () => {
    // Logic to handle rejection for selectedOrderId
    console.log("Rejected:", selectedDriver);
    setOpenModal(false);
  };

  const downloadExcel = () => {

    let filename = "newfile";
    const table = document.getElementById('table'); // Assuming your table has an id "table"
    const rows = table.querySelectorAll('tr');
    const csv = [];
    for (let i = 0; i < rows.length; i++) {
      const row = [], cols = rows[i].querySelectorAll('td, th');
      for (let j = 0; j < cols.length; j++) {
        row.push(cols[j].innerText);
      }
      csv.push(row.join(','));
    }
    const csvContent = csv.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${filename}.csv`;
    link.click();

  };

console.log(Driverdata)

  return (
    <div className="container mx-auto py-8">
      {loading ? (
        <div className="flex items-center justify-center">
          <CircularProgress />
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        <>
          <Stack direction="row" spacing={4} style={{ padding: '5px' }}>
            <Button onClick={downloadExcel} color="error" className="gap-2" style={{ fontWeight: 'bold' }}>
              <TiExportOutline className="text-3xl" /> Export Data
            </Button>
            <Button href="#text-buttons" color="error" className="gap-2" style={{ fontWeight: 'bold', marginLeft: 'auto' }}>
              <TiExportOutline className="text-3xl" /> Previous Export Data
            </Button>
          </Stack>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" id='table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>DOB</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Aadhar</TableCell>
                  <TableCell>Pan Card</TableCell>
                  <TableCell>Verified</TableCell>

                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Driverdata?.filter((val, index) => { return !val.Verified })?.map((row, key) => (
                  <TableRow key={key}>
                    <TableCell>{row.firstName + " "+ row.lastName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.mobile}</TableCell>
                    <TableCell>{row.dob}</TableCell>
                    <TableCell>{row?.address.address_line_1 + " " + row.address.state}</TableCell>
                    <TableCell>{row.Aadhar}</TableCell>
                    <TableCell>{row.PanCard}</TableCell>
                    <TableCell>{(row.isVerified).toString()}</TableCell>

                    <TableCell style={{ display: 'flex', flexDirection: 'row' }}>
                      <span style={{ paddingLeft: "5px" }}>
                        <button onClick={() => handleOpenModal(row.email, row.isVerified)} style={{ cursor: "pointer" }}>View</button>
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Modal open={openModal} onClose={handleCloseModal}>
            <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center align-middle">
              <Box className="flex justify-end">
                <IconButton onClick={handleCloseModal} className="absolute top-0 right-0">
                  <CloseIcon />
                </IconButton>
              </Box>
              {selectedDriver.isverified === false ? <>
                <h2 id="modal-title" className="text-xl font-semibold mb-4">Approve or Reject?</h2>
                <div className="flex justify-between">
                  <Button variant="contained" color="primary" onClick={handleApprove} className="mr-2">Approve</Button>
                  <Button variant="contained" color="error" onClick={handleReject}>Reject</Button>
                </div>
              </> : <> 
              {/* <h2>Status</h2> */}
              <Button variant="contained" color="success" className="mr-2">Verified</Button> </>}
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
};

export default VerifyDriver;