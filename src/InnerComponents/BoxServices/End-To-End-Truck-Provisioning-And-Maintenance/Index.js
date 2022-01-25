import React, { Component } from 'react'
import OtherServicesBox from '../OtherServicesBox'
import ProvidingFirstService from '../ProvidingFirstService'
import { Link } from "react-router-dom";

function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 0);
  // console.log('page to reload')
}

export default class EndToEndTruckProvisioningAndMaintenance2 extends Component {
  render() {
    return (
      <>
        <div id="services-pages">
          <div className="page-title-style01 page-title-negative-top pt-bkg07">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Services - End to End Truck Provisioning & Maintenance</h1>
                  <div className="breadcrumb-container">
                    <ul className="breadcrumb clearfix">
                      <li>You are here:</li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/`} onClick={refreshPage}>Home</Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/truck-provisioning-and-maintenance`}>Services</Link>

                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/truck-provisioning-and-maintenance`}>End to end Truck Provisioning & Maintenance</Link>
                      </li>
                    </ul>{/* .breadcrumb end */}
                  </div>{/* .breadcrumb-container end */}
                </div>{/* .col-md-12 end */}
              </div>{/* .row end */}
            </div>{/* .container end */}
          </div>{/* .page-title-style01.page-title-negative-top end */}
          <div className="page-content">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="custom-heading">
                    <h2>change END TO END TRUCK PROVISIONING & MAINTENANCE </h2>
                  </div>{/* .custom-heading end */}
                  <p>One of the benefits of working with above and beyond is our end to end control of the trucking process. If it involves trucking and first mile / last mile then it is something we excel at. Our logistics includes, cross border, national long haul, Local and expedited local. <strong>We have all regulatory approvals including CT-PAT, PIP, FAST as well as validated carrier’s status.</strong> </p>
                  <p>
                  Our trucks and trailers are equipped with the latest technology enabling tracking and oversight of the fleet at all times. In support of this highly sophisticated trucking program, we have learned that controlling and providing our own maintenance can improve reliability greatly. As such, we have a fully equipped maintenance shop to care for our fleet.

                  </p>


                </div>
                {/* <div className="col-md-6 animated triggerAnimation" data-animate="zoomIn">
          <img src="https://dev.01s.in/above-and-beyond/assets/img/pics/warehouse.jpg" alt="" />
        </div> */}
              </div>{/* .row end */}
            </div>{/* .container end */}
          </div>{/* .page-content end */}
          <ProvidingFirstService />
          <OtherServicesBox />
        </div>

      </>
    )
  }
}
