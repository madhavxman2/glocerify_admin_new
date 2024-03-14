import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
// import { dashboardItems } from '../data';
import { IoMdCart } from "react-icons/io";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { RiCoupon2Fill } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GiRunningNinja } from "react-icons/gi";
import DashboardCard from '../components/DashboardCard';
import TotalOrders from '../components/DashboardTable/TotalOrders';
import DeleverdOrder from '../components/DashboardTable/DeleverdOrders';
import TotalCoustomer from '../components/DashboardTable/TotalCoustomer';
import TotalStore from '../components/DashboardTable/TotalStore';
import useDataWithAPI from '../data';
import { fetchAllSellerData, getAllDeliveryBoy, getAllOrders, getAllUsers } from '../Apis/api';
// import useDataWithAPI from '../data'



const Dashboard = () => {
    const data = useDataWithAPI();
    console.log(data)
    const [totalOrdersData, setTotalOrdersData] = useState([]);
    const [deleverdOrderData, setDeleverdOrderData] = useState([]);
    const [totalCoustomer, setTotalCoustomer] = useState([]);
    const [totalStore, setTotalStore] = useState([]);
    const [productData, setproductData] = useState([]);
    const [sellerData, setsellerData] = useState([]);
    const [DeliveryBoyData, setDeliveryBoyData] = useState([]);

    const fetch = async () => {
        const sellers = await fetchAllSellerData();
        const orders = await getAllOrders();
        const users = await getAllUsers();
        const deliveryBoys = await getAllDeliveryBoy();
        console.log(deliveryBoys.data.deliveryboys)
        setDeliveryBoyData(deliveryBoys.data.deliveryboys)
        setTotalCoustomer(users.data.data)
        setTotalOrdersData(orders.data.orders)
        console.log(sellers);
        setsellerData(sellers.sellers);
    }

    useEffect(() => {
        fetch();
    }, [])

    return (<
        Container maxWidth="xxl" >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2" >  {
            data.map((item, index) => (
                <div key={index}
                    className="col-span-1 p-4" >
                    <DashboardCard item={item} />
                </div>
            ))
        }
        </div>
        <div className="grid grid-cols-2 gap-4" >
            <TotalOrders ordersData={totalOrdersData} />

            <DeleverdOrder deliveryBoy={DeliveryBoyData} />

            <TotalCoustomer Coustomer={totalCoustomer} />
            <TotalStore Store={sellerData} />
        </div>
    </Container>
    );
};

export default Dashboard;