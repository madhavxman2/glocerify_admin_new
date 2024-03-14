import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Paper,
} from "@mui/material";

// icons
import { IoMdAddCircle } from "react-icons/io";
import { TiExport } from "react-icons/ti";
import { GoSearch } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { FaBan , FaProductHunt } from "react-icons/fa";


// const Modal=(props)=>{
//   <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50 ">
//           <div className="bg-white rounded-lg shadow-md w-[500px] p-6 overflow-y-auto">
//             <div className="flex justify-between border-b pb-4 mb-4">
//               <h3 className="text-xl text-gray-400 font-semibold " >Add Category</h3>
//               <button onClick={toggleModal} className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center">
//                 <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M2.707 3.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 111.414 1.414L11.414 10l6.293 6.293a1 1 0 01-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="brandCategory" className="block mb-1 font-semibold">Title <span style={{color:'red'}}>*</span></label>
//                 <input type="text" id="brandCategory" name="brandCategory" onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500" />
//               </div>
//               <p>Image <span style={{color:'red'}}>*</span></p>
//               <div className="flex items-center justify-center h-[180px] border border-gray-300 rounded">
//                 <label htmlFor="imageUrl" className="block mb-1 font-semibold"><img src="https://icon-library.com/images/add-icon-png/add-icon-png-0.jpg" alt="add-icon" className="w-[60px] text-gray-400" style={{cursor:'pointer'}}/></label>
//                 <input type="file" id="imageUrl" name="imageUrl" 
//                 onChange={handleFileChange} className="w-full h-[160px] px-4 py-2 hidden appearance-none"></input>
//               </div>

//               <button type="submit" className="w-[100px] bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600 mr-10">Add</button>
//               <button type="reset" className="w-[100px] border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white focus:outline-none focus:bg-orange-500">Clear</button>
//             </form>
//           </div>
//         </div>
// }


const BrandCategory = () => {
  const [brandCategories, setBrandCategories] = useState([]);

  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [category, setCategory] = useState({
    brandCategory: '',
    imageUrl: null
  })

  const [allCategory, setAllCategory] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory(prevCategory => ({
      ...prevCategory,
      [name]: value
    }));
  };
  useEffect(() => {
    fetchBrandCategory();
  }, []);

  const fetchBrandCategory = () => {
    axios.get('http://localhost:4000/brandCategories')
      .then(response => {
        const category = response.data.map(item => ({
          category: item.brandCategory,
        }));
        setBrandCategories(response.data);
        setAllCategory(category);
      })
      .catch(error => {
        console.error('Error fetching due payouts:', error);
      });
  };
  // Inside the handleFileChange function
  const handleFileChange = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    try {
      const response = await axios.post('http://localhost:4000/upload', formData);
      // Check if the response includes the imageUrl property
      console.log('Response from upload:', response);

      // Update state with the received imageUrl
      if (response.data.imageUrl) {
        setCategory({
          ...category,
          imageUrl: response.data.imageUrl
        });
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/brandCategories', category);
      console.log('Category added:', response.data);
      // Clear form data after successful submission
      setCategory({
        brandCategory: '',
        imageUrl: null
      });
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };


  const handleSelectAllClick = (event) => {
    const newSelected = event.target.checked
      ? brandCategories.map((item) => item.brandId)
      : [];
    setSelected(newSelected);
  };

  const handleClick = (event, brandId) => {
    const selectedIndex = selected.indexOf(brandId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, brandId];
    } else {
      newSelected = selected.filter((id) => id !== brandId);
    }

    setSelected(newSelected);
  };

  const isSelected = (brandId) => selected.length > 0 && selected.includes(brandId);



  return (
    <div className="container mx-auto py-8">

      <div className="flex gap-4 items-center mb-4">
        <button className="flex aligns-center text-orange-500 p-1 w-[70px] font-bold" onClick={toggleModal}>
          <IoMdAddCircle className="text-2xl" />  Add
        </button>
        <button className="flex aligns-center text-orange-500 p-1 w-[200px] font-bold">
          <TiExport className="text-2xl" />  Import/Export Data
        </button>
        <div className="relative w-64 h-10 border border-gray-400 rounded p-2 ">
          <GoSearch className="absolute top-2 left-1 text-2xl text-gray-400" />
          <input type="text" className="absolute top-1 left-8 p-1 focus:outline-none text-gray-500" placeholder="search ..." />
        </div>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded">
          Go
        </button>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded">
          Reset
        </button>
      </div>
      {showModal && (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50 ">
          <div className="bg-white rounded-lg shadow-md w-[500px] p-6 overflow-y-auto">
            <div className="flex justify-between border-b pb-4 mb-4">
              <h3 className="text-xl text-gray-400 font-semibold " >Add Category</h3>
              <button onClick={toggleModal} className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.707 3.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 111.414 1.414L11.414 10l6.293 6.293a1 1 0 01-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="brandCategory" className="block mb-1 font-semibold">Title <span style={{ color: 'red' }}>*</span></label>
                <input type="text" id="brandCategory" name="brandCategory" onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500" />
              </div>
              <p>Image <span style={{ color: 'red' }}>*</span></p>
              <div className="flex items-center justify-center h-[180px] border border-gray-300 rounded">
                <label htmlFor="imageUrl" className="block mb-1 font-semibold"><img src="https://icon-library.com/images/add-icon-png/add-icon-png-0.jpg" alt="add-icon" className="w-[60px] text-gray-400" style={{ cursor: 'pointer' }} /></label>
                <input type="file" id="imageUrl" name="imageUrl"
                  onChange={handleFileChange} className="w-full h-[160px] px-4 py-2 hidden appearance-none"></input>
              </div>

              <button type="submit" className="w-[100px] bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600 mr-10">Add</button>
              <button type="reset" className="w-[100px] border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white focus:outline-none focus:bg-orange-500">Clear</button>
            </form>

          </div>
        </div>
      )}

      <div className="mt-[40px]">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < brandCategories.length
                    }
                    checked={selected.length === brandCategories.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell style={{ color: "gray" }}>IMAGE</TableCell>
                <TableCell style={{ color: "red" }}>CATEGORY</TableCell>
                <TableCell>SORT</TableCell>
                <TableCell>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {brandCategories.map((data, index) => (
                <TableRow
                  key={data.brandId}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected(data.brandId)}
                      onChange={(event) => handleClick(event, data.brandId)}
                    />
                  </TableCell>
                  <TableCell><img src={data.imageUrl} alt="food item" className="w-[100px] h-[100px] rounded-full" /></TableCell>
                  <TableCell style={{ color: 'gray' }}>
                    <select className="rounded-full border border-gray-400">
                      <option></option>
                      {allCategory.map((item, index) => (
                        <option key={index} value={item.category}>{item.category}</option>
                      ))}
                    </select>

                    <span className="ml-3">{data.brandCategory}
                    </span>
                    <button className="flex aligns-center  mt-2 text-blue-300 p-1 font-bold" onClick={toggleModal}>
                      +  SUB CATEGORY
                    </button>
                  </TableCell>
                  <TableCell>{data.sort}</TableCell>
                  <TableCell>
                    <div className="flex text-2xl text-gray-500 gap-6">
                        <GrEdit/> <span className="text-gray-200">|</span>
                        <RiDeleteBin6Line/> <span className="text-gray-200">|</span>
                        <IoMdCheckmark/> <span className="text-gray-200">|</span>
                        <FaProductHunt/>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>Total Selected: {selected.length}</div>
      </div>
    </div>
  );
};

export default BrandCategory;
