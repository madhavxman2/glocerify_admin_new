import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Pagination
} from "@mui/material";
import { getAllproducts } from '../Apis/api';

const AddProduct = () => {

  const [page, setPage] = useState(1);
  const rowsPerPage = (2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [showModal, setShowModal] = useState(false);
  const [showData, setShowData] = useState(false);
  const [productApi, setProductApi] = useState([]);
  const [product, setProduct] = useState({
    productTitle: '',
    productDescription: '',
    brand: '',
    productPrimaryImage: '',
    productMultipleImage: [],
    productMultipleVideos: [],
    tags: '',
    parentCategory: '',
    subCategory: '',
    variantsWeight: '',
    variantsUnitType: ''
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product added:', product);
    setProduct({
      productTitle: '',
      productDescription: '',
      brand: '',
      productPrimaryImage: '',
      productMultipleImage: [],
      productMultipleVideos: [],
      tags: '',
      parentCategory: '',
      subCategory: '',
      variantsWeight: '',
      variantsUnitType: ''
    });
  };

  const fetchProducts = async () => {
    try {
      const res = await getAllproducts();
      setProductApi(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showProductData = () => {
    setShowData(true);
  };

  return (
    <div className='grid grid-cols-2 gap-4'>
      <button onClick={toggleModal} className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[200px] font-bold rounded">
        Add Product
      </button>
      <button onClick={showProductData} className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[200px] font-bold rounded">
        Show Products
      </button>
      {showData && (
        <div>
          <TableContainer component={Paper} sx={{ width: '80vw' }}>
            <Table sx={{ minWidth: 650, width: '100vw' }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: 'red' }}>Title</TableCell>
                  <TableCell style={{ color: 'red' }}>Description</TableCell>
                  <TableCell style={{ color: 'red' }}>Brand</TableCell>
                  <TableCell style={{ color: 'red' }}>Primary Image</TableCell>
                  <TableCell style={{ color: 'red' }}>Product Multiple Image</TableCell>
                  <TableCell style={{ color: 'red' }}>Product Multiple Video</TableCell>
                  <TableCell style={{ color: 'red' }}>Tags</TableCell>
                  <TableCell style={{ color: 'red' }}>Category</TableCell>
                  <TableCell style={{ color: 'red' }}>Sub-Category</TableCell>
                  <TableCell style={{ color: 'red' }}>Variants Weight</TableCell>
                  <TableCell style={{ color: 'red' }}>Variants Unit Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? productApi.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                  : productApi
                ).map((data, index) => (
                  <TableRow style={{ textAlign: 'center' }} key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell>{data.products_title}</TableCell>
                    <TableCell>{data.products_description}</TableCell>
                    <TableCell>{data.brand}</TableCell>
                    <TableCell>{data.product_primary_image_url}</TableCell>
                    <TableCell>{data.product_images_url}</TableCell>
                    <TableCell>{data.product_videos_url}</TableCell>
                    <TableCell>{data.tags}</TableCell>
                    <TableCell>{data.parent_category_name}</TableCell>
                    <TableCell>{data.sub_category_name}</TableCell>
                    <TableCell>{data.variants1_weight}:</TableCell>
                    <TableCell>{data.variants1_unit_type}:</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            count={Math.ceil(productApi.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </div>
      )}
    </div>
  );
};

export default AddProduct;
