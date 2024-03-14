import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillPieChart } from "react-icons/ai";
import { FaChrome, FaUsers, FaPlaceOfWorship, FaCalendarAlt, FaProductHunt } from "react-icons/fa";
import { ImFloppyDisk, ImClock } from "react-icons/im";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GiGreekTemple } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { RiShoppingCartFill } from "react-icons/ri";
import { BiCoinStack } from "react-icons/bi";

const SidebarMenu = React.memo(({ open }) => {
  const location = useLocation();

  // Define menu items with their titles, paths, icons, and optional dropdown options
  const menus = useMemo(
    () => [
      { title: "Dashboard", path: "/dashboard", src: <AiFillPieChart /> },
      { title: "Add Product", path: "/addProduct", src: <FaProductHunt /> },
      {
        title: "Merchants",
        path: "/Merchants",
        src: <GiGreekTemple />,
        dropdownOptions: ["MerchantList", "VerifyMerchent", "SwitchMerchants"],
      },
      // { title: "Brand Orders", path: "/BrandOrder", src: <FaPlaceOfWorship /> },
      // {
      //   title: "Order Payout",
      //   path: "/DuePayout",
      //   src: <RiShoppingCartFill />,
      //   // dropdownOptions: ["DuePayout", "CompletedPayout"],
      // },
      // {
      //   title: "Brand Categories",
      //   path: "/BrandCategory",
      //   src: <BiCoinStack />,
      // },
      // {
      //   title: "Brand Customers",
      //   path: "/BrandCustomer",
      //   src: <FaUsers />,
      // },
      {
        title: "Operating Zone",
        path: "/OperatingZone",
        src: <ImClock />,
      },
      // {
      //   title: "Marketing & Promotion",
      //   path: "/MarketingAndPromotion",
      //   src: <HiOutlineSpeakerphone />,
      //   dropdownOptions: ["Coupons", "ReferAndEarn", "CommunicationCenter"],
      // },
      // {
      //   title: "Verify Seller",
      //   path: "/Verify",
      //   src: <ImFloppyDisk />,

      // },
      {
        title: "Shipping & Runners",
        path: "/ShippingAndRunners",
        src: <FaCalendarAlt />,
        dropdownOptions: ["VerifyDriver", "RunnerManagement"],
        // dropdownOptions: ["RunnerManagement"],
      },
      // {
      // title: "Runner Payout",
      // path: "/RunnerPayout",
      // src: <RiShoppingCartFill />,
      // dropdownOptions: ["PayoutSetting", "DuePayout", "CompletedPayout"],
      // dropdownOptions: ["PayoutSetting"],
      // },
      // {
      //   title: "Enquiries",
      //   path: "/Enquiries",
      //   src: <FaCalendarAlt />,
      //   dropdownOptions: ["CustomersEnquiries", "Partnersenquiries"],
      // },
      // {
      //   title: "Settings",
      //   path: "/Settings",
      //   src: <IoIosSettings />,
      //   dropdownOptions: ["BrandInformation","BrandFeatures", "QuickLinks", "Banners", "OnlinePaymentSetting"],
      // },
      {
          title: "Settings",
          path: "/Settings",
          src: <IoIosSettings />
      }
      // {
      //   title: "Web Settings",
      //   path: "/WebSettings",
      //   src: <FaChrome />,
      //   dropdownOptions: ["SocialLinks", "AboutUs", "WebMenuSetting", "WebThemeColor", "WebPageContent", "Banners", "Faq", "StaticPages"],
      // },
    ],
    []
  );

  useEffect(() => {
    if (!open) setOpenDropdowns(Array(menus.length).fill(false));
  }, [open, menus.length])
  // State to keep track of which dropdowns are open
  const [openDropdowns, setOpenDropdowns] = useState(Array(menus.length).fill(false));

  // Function to toggle dropdown visibility for a specific index
  const toggleDropdown = (index) => {
    const updatedDropdowns = [...openDropdowns];
    updatedDropdowns[index] = !updatedDropdowns[index];
    setOpenDropdowns(updatedDropdowns);
  };

  return (
    <ul>
      {/* Map through the menu items and render them */}
      {menus.map((menu, index) => (
        <div key={index}>
          {/* Check if the menu item has dropdown options */}
          {menu.dropdownOptions ? (
            <>
              {/* Render the dropdown toggle button */}
              <li
                className={`flex items-center gap-x-6 p-3 rounded-lg cursor-pointer text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black
                    ${menu.gap ? "mt-9" : "mt-2"} ${location.pathname === menu.path && "bg-gray-200 dark:bg-gray-700"
                  }`}
                onClick={() => toggleDropdown(index)}
              >
                <span className="text-2xl">{menu.src}</span>
                {/* Conditionally render title based on the open prop */}
                {open && <span className="text-1xl">{menu.title}</span>}
              </li>
              {/* Render the dropdown options if the dropdown is visible */}
              {openDropdowns[index] && (
                <ul>
                  {menu.dropdownOptions.map((option, optionIndex) => (
                    <Link to={`/${option}`} key={optionIndex}>
                      <li
                        className={`flex items-center gap-x-6 p-3 rounded-lg cursor-pointer text-white hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700`}
                      >
                        <span>{option}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </>
          ) : (
            // Render a regular menu item with a link
            <Link to={menu.path}>
              <li
                className={`flex items-center gap-x-6 p-3 rounded-lg cursor-pointer text-white 
                hover:text-black 
                hover:bg-gray-200 dark:hover:bg-gray-700
                    ${menu.gap ? "mt-9" : "mt-2"} ${location.pathname === menu.path && "bg-gray-200 dark:bg-gray-700 text-black"
                  }`}
              >
                <span className="text-2xl">{menu.src}</span>
                {/* Conditionally render title based on the open prop */}
                {open && <span className="text-1xl">{menu.title}</span>}
              </li>
            </Link>
          )}
        </div>
      ))}
    </ul>
  );
});

export default SidebarMenu;
