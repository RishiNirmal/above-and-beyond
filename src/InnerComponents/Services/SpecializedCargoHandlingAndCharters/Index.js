import React, { Component } from 'react'
import OtherServicesBox from '../OtherServicesBox'
import ProvidingFirstService from '../ProvidingFirstService'
import {  Link } from "react-router-dom";

function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 0);
  // console.log('page to reload')
}

export default class SpecializedCargoHandlingAndCharters extends Component {
    render() {
        return (
            <>
<div id="services-pages">
  <div className="page-title-style01 page-title-negative-top pt-bkg05">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Services - Specialized Cargo Handling and Charters</h1>
          <div className="breadcrumb-container">
            <ul className="breadcrumb clearfix">
              <li>You are here:</li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/`} onClick={refreshPage}>Home</Link>
              </li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/cargo-handling-and-charters`}>Services</Link>
              </li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/cargo-handling-and-charters`}>Specialized Cargo Handling and Charters</Link>
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
            <h2>Specialized Cargo Handling and Charters</h2>
          </div>{/* .custom-heading end */}
          <p><strong>
          Specialized cargos require specialized handling. Our Warehouse partners have the ability to provide these specialized facilities such as, coolers, temperature monitoring, vaults, specialized storage capabilities.
</strong>
          </p>
         
          <p>
          We source the top highly skilled air charter brokers who take on the responsibility of finding exactly the right provider to ensure that you have a hassle free experience. 
          </p>   
                            
        </div>
        {/* <div className="col-md-6 animated triggerAnimation" data-animate="zoomIn">
          <img src="https://dev.01s.in/above-and-beyond/assets/img/pics/warehouse.jpg" alt="" />
        </div> */}
      </div>{/* .row end */}
    </div>{/* .container end */}
  </div>{/* .page-content end */}  
 <ProvidingFirstService/>
  <OtherServicesBox/>
</div>

            </>
        )
    }
}
