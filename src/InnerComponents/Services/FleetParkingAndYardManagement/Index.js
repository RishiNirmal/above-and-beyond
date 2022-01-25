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

export default class FleetParkingAndYardManagement extends Component {
  render() {
    return (
      <>
        <div id="services-pages">
          <div className="page-title-style01 page-title-negative-top pt-bkg08">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Services - Fleet Parking & Yard Management</h1>
                  <div className="breadcrumb-container">
                    <ul className="breadcrumb clearfix">
                      <li>You are here:</li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/`} onClick={refreshPage}>Home</Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/fleet-parking-and-yard-management`}>Services</Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/fleet-parking-and-yard-management`}>Fleet Parking & Yard Management</Link>
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
                    <h2>Fleet Parking & Yard Management</h2>
                  </div>{/* .custom-heading end */}
                  <p>
                  Fleet parking and Yard management is all about having a safe and controlled environment, where tractors and trailers can be monitored and tracked to ensure reliable logistics operation. 

                  </p>

                  <p>
                  Internal and external audits demand that we maintain maximum control and accurate records with regards to our fleet parking and yard management.


                  </p>
                  <p>Our trucking service providers employ the latest technology to ensure we always know where our products are located. These technologies can satisfy in both regulatory (as in the case of e-logs) and non regulatory ( as in the case of Geo tracking) 
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
