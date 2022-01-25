import React, { Component } from 'react'
import OtherServicesBox from '../OtherServicesBox'
import ProvidingFirstService from '../ProvidingFirstService'
import PageTransition from 'react-router-page-transition';
import { Link } from "react-router-dom"

function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 0);
  // console.log('page to reload')
}

export default class AirlineCargoSalesAndFacilitation extends Component {
  render() {
    return (
      <>
        <PageTransition>
          <div id="services-pages">
            <div className="page-title-style01 page-title-negative-top pt-bkg02">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1>Services - Airline Cargo Sales And Facilitation</h1>
                    <div className="breadcrumb-container">
                      <ul className="breadcrumb clearfix">
                        <li>You are here:</li>
                        <li>
                          <Link to={`${process.env.PUBLIC_URL}/`} onClick={refreshPage}>Home</Link>
                        </li>
                        <li>
                          <Link to={`${process.env.PUBLIC_URL}/airline-cargo-sales-and-facilitation`}>Services</Link>
                        </li>
                        <li>
                          <Link to={`${process.env.PUBLIC_URL}/airline-cargo-sales-and-facilitation`}>Airline Cargo Sales and Facilitation</Link>
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
                      <h2>AIRLINE CARGO SALES AND FACILITATION</h2>
                    </div>{/* .custom-heading end */}
                    <p>
                    By acting as your GSA, above and beyond can improve not only volume of sales but also the yield from cargo sales. As a seasoned GSA we know the ins and outs of navigating through complex facilitation and regulatory hurdles.


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
        </PageTransition>

      </>
    )
  }
}
