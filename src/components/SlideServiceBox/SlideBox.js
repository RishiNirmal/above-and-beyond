import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import BoxImg1 from '../../AboveBeyondImages/box1.webp'
import BoxImg2 from '../../AboveBeyondImages/box2.webp'
import BoxImg3 from '../../AboveBeyondImages/box3.webp'


export default class SlideBox extends Component {
    render() {
        return (
            <>
           <div className="page-content parallax parallax01 mb-70">
  <div className="container">
    <div className="row services-negative-top">
      <div className="col-md-4 col-sm-4">
        <div className="service-feature-box">
          <div className="service-media">
            <img src={BoxImg1} alt="Trucking" />
           
          </div>{/* .service-media end */}
          <div className="service-body">
            <div className="custom-heading">
              <h4>Air Cargo Sales & Services</h4>
            </div>{/* .custom-heading end */}
            <p className='cnt-ab'>
            Are you looking for an air cargo service company that you can count on? Here at Above and Beyond, we are at your service with the most honest and professional air cargo services and consulting business. This is the most trusted and responsible company you will find. 
             </p>
            <p className="btnbox"> <Link to={`${process.env.PUBLIC_URL}/airline-cargo-sales-services`} className="read-more02 btn btn-big btn-yellow">
              <span>
                Read more
                &nbsp;&nbsp; <i className="fa fa-chevron-right" />
              </span>
            </Link>
            </p>
          </div>{/* .service-body end */}
        </div>{/* .service-feature-box-end */}
      </div>{/* .col-md-4 end */}
      <div className="col-md-4 col-sm-4">
        <div className="service-feature-box">
          <div className="service-media">
            <img src={BoxImg2} alt="Trucking" />
            </div>{/* .service-media end */}
          <div className="service-body">
            <div className="custom-heading">
              <h4>Warehouse & Specialized Handling Sourcing/Audit</h4>
            </div>{/* .custom-heading end */}
            <p className='cnt-ab'>
            Handling materials in a warehouse can be really difficult and messy, but there’s nothing to worry about when you are working with us. When we take responsibility for your products, we do it with utmost care and we don’t leave any task unfinished.

            </p>
            <p className="btnbox"><Link to={`${process.env.PUBLIC_URL}/warehousing`} className="read-more02 btn btn-big btn-yellow">
              <span>
                Read more
                &nbsp; <i className="fa fa-chevron-right" />
              </span>
            </Link></p>
          </div>{/* .service-body end */}
        </div>{/* .service-feature-box-end */}
      </div>{/* .col-md-4 end */}
      <div className="col-md-4 col-sm-4">
        <div className="service-feature-box">
          <div className="service-media">
            <img src={BoxImg3} alt="Trucking" />
           
          </div>{/* .service-media end */}
          <div className="service-body">
            <div className="custom-heading">
              <h4>Full Trucking Services End to End</h4>
            </div>{/* .custom-heading end */}
            <p className='cnt-ab'>
            We do not leave any task unfinished. One thing that we can say for sure, having 17 years of cargo experience, is that we provide specific focus on the professional movement of air cargo. 
            </p>
            <p className="btnbox"><Link to={`${process.env.PUBLIC_URL}/truck-provisioning-and-maintenance`} className="read-more02 btn btn-big btn-yellow">
              <span>
                Read more
                &nbsp; <i className="fa fa-chevron-right" />
              </span>
            </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
   </div>
</div>

            </>
        )
    }
}
