import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoToTop from '../../components/GotoTop';
import BoxImg1 from '../../AboveBeyondImages/box1.webp'
import BoxImg2 from '../../AboveBeyondImages/box2.webp'
import BoxImg3 from '../../AboveBeyondImages/box3.webp'

export default class OtherServicesBox extends Component {
    render() {
     
        return (
            <>
               <div className="page-content">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="custom-heading02">
            <h2>Other services</h2>
            <p>above & beyond logistics services</p>
          </div>
        </div>{/* .col-md-12 end */}
      </div>{/* .row end */}
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <div className="service-feature-box">
            <div className="service-media">
            <img src={BoxImg1} alt="AIR CARGO SALES & SERVICES" />
              {/* <a href="overland-transportation.html" className="read-more02">
                <span>
                  Read more
                  <i className="fa fa-chevron-right" />
                </span>
              </a> */}
            </div>{/* .service-media end */}
            <div className="service-body">
              <div className="custom-heading">
                <h4>AIR CARGO SALES & SERVICES</h4>
              </div>{/* .custom-heading end */}
              <p className='cnt-ab'>
              Are you looking for an air cargo service company that you can count on? Here at Above and Beyond, we are at your service with the most honest and professional air cargo services and consulting business. This is the most trusted and responsible company you will find.
              </p>
             <p className="btnbox"> <Link to={`${process.env.PUBLIC_URL}/airline-cargo-sales-and-facilitation`}  className="read-more02 btn btn-big btn-yellow">
              <span>
                Read more
                &nbsp; <i className="fa fa-chevron-right" />
              </span>
            </Link>
            </p>
            </div>{/* .service-body end */}
          </div>{/* .service-feature-box-end */}
        </div>{/* .col-md-4 end */}
        <div className="col-md-4 col-sm-4">
          <div className="service-feature-box">
            <div className="service-media">
            <img src={BoxImg2} alt="WAREHOUSE & SPECIALIZED HANDLING SOURCING/AUDIT" />
              {/* <a href="large-projects.html" className="read-more02">
                <span>
                  Read more
                  <i className="fa fa-chevron-right" />
                </span>
              </a> */}
            </div>{/* .service-media end */}
            <div className="service-body">
              <div className="custom-heading">
                <h4>WAREHOUSE & SPECIALIZED HANDLING SOURCING/AUDIT</h4>
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
            <img src={BoxImg3} alt="FULL TRUCKING SERVICES END TO END" />
              {/* <a href="air-freight.html" className="read-more02">
                <span>
                  Read more
                  <i className="fa fa-chevron-right" />
                </span>
              </a> */}
            </div>{/* .service-media end */}
            <div className="service-body">
              <div className="custom-heading">
                <h4>FULL TRUCKING SERVICES END TO END</h4>
              </div>{/* .custom-heading end */}
              <p className='cnt-ab'>
              We do not leave any task unfinished. One thing that we can say for sure, having 17 years of cargo experience, is that we provide specific focus on the professional movement of air cargo.
              </p>
             <p className="btnbox"><Link to={`${process.env.PUBLIC_URL}/truck-provisioning-and-maintenance`}  className="read-more02 btn btn-big btn-yellow">
              <span>
                Read more
                &nbsp; <i className="fa fa-chevron-right" />
              </span>
            </Link></p>
            </div>{/* .service-body end */}
          </div>{/* .service-feature-box-end */}
        </div>{/* .col-md-4 end */}
      </div>{/* .row end */}
    </div>{/* .container end */}
  </div>{/* .page-content end */} 
  <GoToTop/>
            </>
        )
    }
}
