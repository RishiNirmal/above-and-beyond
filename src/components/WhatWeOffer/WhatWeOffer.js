import React, { Component } from 'react'
import ImgWeOffer1 from "../Images/svg/pi-checklist-2.svg";
import ImgWeOffer2 from "../Images/svg/pi-globe-5.svg";
import ImgWeOffer3 from "../Images/svg/pi-forklift-truck-5.svg";
import ImgWeOffer4 from "../Images/svg/pi-touch-desktop.svg";

export default class WhatWeOffer extends Component {
    render() {
        return (
            <>
             <div className="page-content">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="custom-heading02">
          <h2>Service Offerings</h2>
          <p>
          Above & Beyond For Our Customers
          </p>
        </div>{/* .custom-heading02 end */}
      </div>{/* .col-md-12 end */}
    </div>{/* .row end */}
    <div className="row mb-30">
      <div className="col-md-6 col-sm-6">
        <div className="service-icon-left-boxed">
          <div className="icon-container animated triggerAnimation" data-animate="zoomIn">
            <img src={ImgWeOffer1} alt="checklist icon" />
          </div>{/* .icon-container end */}
          <div className="service-details">
            <h3>Air Cargo Sales & Services</h3>
            <p>
              Need custom logistic service? We got it 
              covered. From overland, air, rail and sea 
              transportation. Fast, safe and accurate 
              shipment provided all over the globe.
            </p>
          </div>{/* .service-details end */}
        </div>{/* .service-icon-left-boxed end */}
      </div>{/* .col-md-6 end */}
      <div className="col-md-6 col-sm-6">
        <div className="service-icon-left-boxed">
          <div className="icon-container animated triggerAnimation" data-animate="zoomIn">
            <img src={ImgWeOffer2} alt="globe icon" />
          </div>{/* .icon-container end */}
          <div className="service-details">
            <h3>General Sales Agent</h3>
            <p>
              Trucking company offers the best logistics 
              services using all mens of supply chain. Use
              our overland, ocean and air freight solutions
              for shipment of your goods.
            </p>
          </div>{/* .service-details end */}
        </div>{/* .service-icon-left-boxed end */}
      </div>{/* .col-md-6 end */}
    </div>{/* .row.mb-30 end */}
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div className="service-icon-left-boxed">
          <div className="icon-container animated triggerAnimation" data-animate="zoomIn">
            <img src={ImgWeOffer3} alt="forktruck icon" />
          </div>{/* .icon-container end */}
          <div className="service-details">
            <h3>Warehouse & Specialized</h3>
            <p>
              Trucking offers intelligent warehouse solution. 
              Lower your storage and good maintenance by 
              using our modern and intelligent warehouses. 
              You can see all locations on location page.
            </p>
          </div>{/* .service-details end */}
        </div>{/* .service-icon-left-boxed end */}
      </div>{/* .col-md-6 end */}
      <div className="col-md-6 col-sm-6">
        <div className="service-icon-left-boxed">
          <div className="icon-container animated triggerAnimation" data-animate="zoomIn">
            <img src={ImgWeOffer4} alt="touch icon" />
          </div>{/* .icon-container end */}
          <div className="service-details">
            <h3>“Make It Happen” Philosophy</h3>
            <p>
              Don't know what mean of transportation 
              would be right for you, or you need someone 
              for full supply chain management? Please contact 
              us. Our team of professionals will be happy to help.
            </p>
          </div>{/* .service-details end */}
        </div>{/* .service-icon-left-boxed end */}
      </div>{/* .col-md-6 end */}
    </div>{/* .row.mb-30 end */}
  </div>{/* .container end */}
</div>{/* .page-content end */}
 
            </>
        )
    }
}
