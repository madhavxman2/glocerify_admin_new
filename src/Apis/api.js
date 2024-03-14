import axios from "axios";
export const BASE_URl = 'http://localhost:8080/api'

export const fetchAllSellerData = async () => {
    try {
        const response = await fetch(`${BASE_URl}/sellers`);
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


export const ApproveShop = async (id) => {
    const data = {
        "email": id,
        "approved": true

    }
    console.log(data)
    try {
        const response = await axios.post(`${BASE_URl}/approveseller`, data);

        await fetchAllSellerData()
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


export const ApproveDriver = async (id) => {
    const data = {
        "email": id,
        "approved": true

    }
    console.log(data)
    try {
        const response = await axios.post(`${BASE_URl}/approvedeliveryboy`, data);

        // await fetchAllSellerData()
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const getAllproducts = async () => {


    try {
        const response = await axios.get(`${BASE_URl}/products`);

        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const getAllOrders = async () => {


    try {
        const response = await axios.get(`${BASE_URl}/getallorders`);
        console.log(response);
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const getAllUsers = async () => {


    try {
        const response = await axios.get(`${BASE_URl}/users`);
        console.log(response);
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const getAllShops = async () => {


    try {
        const response = await axios.get(`${BASE_URl}/shops`);
        console.log(response);
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const getShopById = async (id) => {


    try {
        const response = await axios.get(`${BASE_URl}/shop?shopID=${id}`);
        console.log(response);
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const getAllDeliveryBoy = async () => {


    try {
        const response = await axios.get(`${BASE_URl}/deliveryboys`);
        console.log(response);
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
