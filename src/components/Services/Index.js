import React, { Component } from 'react'
import SeviceIcon1 from '../../AboveBeyondImages/service-offer-img/service-icon1.png'
import SeviceIcon2 from '../../AboveBeyondImages/service-offer-img/service-icon2.png'
import SeviceIcon3 from '../../AboveBeyondImages/service-offer-img/service-icon3.png'
import SeviceIcon4 from '../../AboveBeyondImages/service-offer-img/service-icon4.png'

export default class ServicesOffer extends Component {
    render() {
        return (
            <>
             <div className="page-content services-section">
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
            <img src={SeviceIcon1} alt="checklist icon" />
          </div>{/* .icon-container end */}
          <div className="service-details">
            <h3>General Sales Agent</h3>
            <p>
            We are a team of experienced and extremely skilled workers. Our sales focus is on finding optimal solutions for pricing and capacity. 
            </p>
          </div>{/* .service-details end */}
        </div>{/* .service-icon-left-boxed end */}
      </div>{/* .col-md-6 end */}
      <div className="col-md-6 col-sm-6">
        <div className="service-icon-left-boxed">
          <div className="icon-container animated triggerAnimation" data-animate="zoomIn">
            <img src={SeviceIcon2} alt="globe icon" />
          </div>{/* .icon-container end */}
          <div className="service-details">
            <h3>Logistics Sourcing & Coordination</h3>
            <p>
            This is the first and foremost step in moving any kind of shipment. Having our own trucking allows us to find the best logistics solution for your cargo.

            </p>
          </div>{/* .service-details end */}
        </div>{/* .service-icon-left-boxed end */}
      </div>{/* .col-md-6 end */}
    </div>{/* .row.mb-30 end */}
    <div className="row">
      <div className="col-md-6 col-sm-6 mb-30">
        <div className="service-icon-left-boxed">
          <div className="icon-container animated triggerAnimation" data-animate="zoomIn">
            <img src={SeviceIcon3} alt="forktruck icon" />
          </div>{/* .icon-container end */}
          <div className="service-details">
            <h3>Specialized Commodity Handling</h3>
            <p>
            Our knowledge of all the specialized requirement of handling and moving specialized cargo, means that your yielding cargo will received the best care.

            </p>
          </div>{/* .service-details end */}
        </div>{/* .service-icon-left-boxed end */}
      </div>{/* .col-md-6 end */}
      <div className="col-md-6 col-sm-6 mb-30">
        <div className="service-icon-left-boxed">
          <div className="icon-container animated triggerAnimation" data-animate="zoomIn">
            <img src={SeviceIcon4} alt="touch icon" />
          </div>{/* .icon-container end */}
          <div className="service-details">
            <h3>Air Charter Brokers</h3>
            <p>
            We source the top highly skilled air charter brokers who take on the responsibility of finding exactly the right provider to ensure that you have a hassle free experience. 

            </p>
          </div>{/* .service-details end */}
        </div>{/* .service-icon-left-boxed end */}
      </div>{/* .col-md-6 end */}
      <div className="col-md-6 col-sm-6">
        <div className="service-icon-left-boxed">
          <div className="icon-container animated triggerAnimation" data-animate="zoomIn">
            <img src={SeviceIcon1} alt="touch icon" />
          </div>{/* .icon-container end */}
          <div className="service-details">
            <h3>Government Agency Co-ordination</h3>
            <p>
            Co-ordination with government agencies is very important. When shipping your product from one region to another and especially International. Proper coordination can have positive effects on the cost, speed and reliability of the shipping process. Our company will use our contacts and knowledge to navigate the process efficiently. 

 

            </p>
          </div>{/* .service-details end */}
        </div>{/* .service-icon-left-boxed end */}
      </div>{/* .col-md-6 end */}
      <div className="col-md-6 col-sm-6">
        <div className="service-icon-left-boxed">
          <div className="icon-container animated triggerAnimation" data-animate="zoomIn">
            <img src={SeviceIcon2} alt="touch icon" />
          </div>{/* .icon-container end */}
          <div className="service-details">
            <h3>“Make It Happen” Philosophy</h3>
            <p>
            Our Philosophy is there is no such word as “Impossible”. Our leadership follows the make it happen philosophy concept. Our goal is to overcome challenges and succeed where others have failed.

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
