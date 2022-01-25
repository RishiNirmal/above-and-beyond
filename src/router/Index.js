import React, { Component } from 'react'
import {   
    Routes ,
    Route,
  } from "react-router-dom";

import Home from '../InnerComponents/Home/Index'
import AboutUs from '../InnerComponents/AboutUs/Index'
import AirCargoSalesServices from '../InnerComponents/Services/Specialized-Air-Cargo/Index';
import AirlineCargoSalesAndFacilitation from '../InnerComponents/Services/Airline-Cargo-Sales-And-Facilitation/Index';
import WarehousingDryGoodsAndSpecializedCargo from '../InnerComponents/Services/Warehousing-Dry-Goods-and-Specialized-Cargo/Index';
import Perishables from '../InnerComponents/Services/Perishables/Index';
import SpecializedCargoHandlingAndCharters from '../InnerComponents/Services/SpecializedCargoHandlingAndCharters/Index';
import TruckingAndLogistics from '../InnerComponents/Services/TruckingAndLogistics/Index';
import EndToEndTruckProvisioningAndMaintenance from '../InnerComponents/Services/End-To-End-Truck-Provisioning-And-Maintenance/Index';
import FleetParkingAndYardManagement from '../InnerComponents/Services/FleetParkingAndYardManagement/Index';
import ContactUs from '../InnerComponents/ContactUs/Index';
import Blog from '../InnerComponents/Blog/Index';
// Three Box Links
import AirlineCargoSalesAndFacilitation2 from '../InnerComponents/BoxServices/Airline-Cargo-Sales-And-Facilitation/Index'
// import WarehousingDryGoodsAndSpecializedCargo2 from '../InnerComponents/BoxServices/Warehousing-Dry-Goods-and-Specialized-Cargo/Index'
// import EndToEndTruckProvisioningAndMaintenance2 from '../InnerComponents/BoxServices/End-To-End-Truck-Provisioning-And-Maintenance/Index'
// End
function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 0);
    // console.log('page to reload')
  }

export default class Index extends Component {
    render() {
        return (
            <>
            <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} exact element={<Home />}  onClick={refreshPage}/>
            <Route path={`${process.env.PUBLIC_URL}/about-us`} element={<AboutUs />} />
            <Route path={`${process.env.PUBLIC_URL}/specialized-air-cargo`} element={<AirCargoSalesServices />} />
            <Route path={`${process.env.PUBLIC_URL}/airline-cargo-sales-and-facilitation`} element={<AirlineCargoSalesAndFacilitation />} />
            <Route path={`${process.env.PUBLIC_URL}/warehousing`} element={<WarehousingDryGoodsAndSpecializedCargo />} />
            <Route path={`${process.env.PUBLIC_URL}/Perishables`} element={<Perishables />} />
            <Route path={`${process.env.PUBLIC_URL}/cargo-handling-and-charters`}  element={<SpecializedCargoHandlingAndCharters />} />
            <Route path={`${process.env.PUBLIC_URL}/trucking-and-logistics`} element={<TruckingAndLogistics />} />
            <Route path={`${process.env.PUBLIC_URL}/truck-provisioning-and-maintenance`} element={<EndToEndTruckProvisioningAndMaintenance />} />
            <Route path={`${process.env.PUBLIC_URL}/fleet-parking-and-yard-management`}  element={<FleetParkingAndYardManagement />} />
            <Route path={`${process.env.PUBLIC_URL}/contact-us`}  element={<ContactUs />} />
            <Route path={`${process.env.PUBLIC_URL}/blog`} element={<Blog />} />
            {/* Three box link */}
            <Route path={`${process.env.PUBLIC_URL}/airline-cargo-sales-services`} element={<AirlineCargoSalesAndFacilitation2 />} />
            {/* <Route path={`${process.env.PUBLIC_URL}/warehousing-specialized`} element={<WarehousingDryGoodsAndSpecializedCargo2 />} /> */}
            {/* <Route path={`${process.env.PUBLIC_URL}/end-to-end-truck-provisioning-and-maintenance`} element={<EndToEndTruckProvisioningAndMaintenance2 />} /> */}
        </Routes>
        </>
        )
    }
}
