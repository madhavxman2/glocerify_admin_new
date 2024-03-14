import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProduct from './pages/AddProduct'
import SellerDashboard from './pages/SellerDashboard'
import Merchants from "./pages/Merchants";
import EditMerchants from './pages/EditMerchants'
import MerchantOnboarding from "./pages/MerchantOnboarding";
import SwitchMerchants from "./pages/SwitchMerchants";
import MerchantList from "./pages/MerchantList";
import BrandOrder from "./pages/BrandOrder";
import OrderPayout from "./pages/OrderPayout";
import PayoutSetting from './pages/PayoutSetting'
import DuePayout from './pages/DuePayout'
import CompletedPayout from './pages/CompletedPayout'
import CompletedPayoutOrderList from "./pages/completedPayoutOrderList";
import BrandCategory from "./pages/BrandCategory";
import BrandCustomer from "./pages/BrandCustomer";
import OperatingZone from "./pages/OperatingZone";
import MarketingAndPromotion from "./pages/MarketingAndPromotion";
import Coupons from './pages/Coupons'
import ReferAndEarn from './pages/ReferAndEarn'
import CommunicationCenter from './pages/CommunicationCenter'
// import LoyaltyProgram from "./pages/LoyaltyProgram";
import Verify from "./pages/Verify";
// import ConfigurePoints from './pages/ConfigurePoints'
// import LoyalityCoupons from './pages/LoyalityCoupons'
import ShippingAndRunners from "./pages/ShippingAndRunners";
// import ShippingCharges from './pages/VerifyDriver'
import VerifyDriver from "./pages/VerifyDriver";


import RunnerManagement from './pages/RunnerMangements'
import RunnerAllocationSetting from './pages/RunnerAllocationSetting'
import RunnerPayout from "./pages/RunnerPayout";
import Enquiries from "./pages/Enquiries";
import CustomersEnquiries from './pages/CustomersEnquiries'
import PartnersEnquiries from './pages/PartnersEnquires'
import Settings from "./pages/Settings";
import BrandInformation from "./pages/BrandInformation";
import BrandFeatures from './pages/BrandFeatures'
import QuickLinks from './pages/QuickLinks'
import Banners from './pages/Banners'
import OnlinePaymentSetting from './pages/OnlinePaymentSetting'
import WebSettings from "./pages/WebSettings";
import SocialLinks from './pages/SocialLinks'
import AboutUs from './pages/AboutUs'
import WebMenuSetting from "./pages/WebMenuSetting";
import WebThemeColor from "./pages/WebThemeColor";
import WebPageContent from "./pages/WebPageContent";
import Faq from "./pages/Faq";
import StaticPages from "./pages/StaticPages";
import SellerSettingsProfile from "./pages/SettingsPages/SellerSettingsProfile";
import SellerSettingsShop from "./pages/SettingsPages/SellerSettingsShop";
import SellerSettingsWallet from "./pages/SettingsPages/SellerSettingsWallet";



function App() {


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/runner-dashboard" element={<SellerDashboard />} />
          <Route path="/Merchants" element={<Merchants />} />
          <Route path="/edit-merchants" element={<EditMerchants />} />
          <Route path="/MerchantList" element={<MerchantList />} />
          <Route path="/MerchantOnboarding" element={<MerchantOnboarding />} />
          <Route path="/SwitchMerchants" element={<SwitchMerchants />} />
          <Route path="/brandorder" element={<BrandOrder />} />
          <Route path="/OrderPayout" element={<OrderPayout />} />
          <Route path="/PayoutSetting" element={<PayoutSetting />} />
          <Route path="/DuePayout" element={<DuePayout />} />
          <Route path="/CompletedPayout" element={<CompletedPayout />} />
          <Route path="/OrderList" element={<CompletedPayoutOrderList />} />
          <Route path="/BrandCategory" element={<BrandCategory />} />
          <Route path="/BrandCustomer" element={<BrandCustomer />} />
          <Route path="/OperatingZone" element={<OperatingZone />} />
          <Route
            path="/MarketingAndPromotion"
            element={<MarketingAndPromotion />}
          />
          <Route path="/Coupons" element={<Coupons />} />
          <Route path="/ReferAndEarn" element={<ReferAndEarn />} />
          <Route path="/CommunicationCenter" element={<CommunicationCenter />} />
          <Route path="/VerifyMerchent" element={<Verify />} />
          <Route path="/ShippingAndRunners" element={<ShippingAndRunners />} />
          {/* <Route path="/ShippingCharges" element={<ShippingCharges />} /> */}
          <Route path="/VerifyDriver" element={<VerifyDriver/>} />

          <Route path="/RunnerManagement" element={<RunnerManagement />} />
          <Route path="/RunnerAllocationSetting" element={<RunnerAllocationSetting />} />
          <Route path="/RunnerPayout" element={<RunnerPayout />} />
          <Route path="/Enquiries" element={<Enquiries />} />
          <Route path="/CustomersEnquiries" element={<CustomersEnquiries />} />
          <Route path="/PartnersEnquiries" element={<PartnersEnquiries />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/BrandInformation" element={<BrandInformation />} />
          <Route path="/BrandFeatures" element={<BrandFeatures />} />
          <Route path="/Banners" element={<Banners />} />
          <Route path="/QuickLinks" element={<QuickLinks />} />
          <Route path="/OnlinePaymentSetting" element={<OnlinePaymentSetting />} />
          <Route path="/WebSettings" element={<WebSettings />} />
          <Route path="/SocialLinks" element={<SocialLinks />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="WebMenuSetting" element={<WebMenuSetting />} />
          <Route path="WebThemeColor" element={<WebThemeColor />} />
          <Route path="WebPageContent" element={<WebPageContent />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="StaticPages" element={<StaticPages />} />
          <Route path="/sellersettingsprofile" element={<SellerSettingsProfile />} />
          <Route path="/sellersettingsshop" element={<SellerSettingsShop />} />
          <Route path="/sellersettingswallet" element={<SellerSettingsWallet />} />

        </Routes>

      </Layout>
    </BrowserRouter>
  );
}

export default App;
