import React, { Component } from 'react'
import Service1 from '../../AboveBeyondImages/service-offer-img/service-icon1.png'
import Service2 from '../../AboveBeyondImages/service-offer-img/service-icon2.png'
import Service3 from '../../AboveBeyondImages/service-offer-img/service-icon3.png'
import Service4 from '../../AboveBeyondImages/service-offer-img/service-icon4.png'

export default class GrideServices extends Component {
    render() {
        return (
            <>
               <div className="page-content">
    <div className="container">
      <div className="row">
        <div className="custom-heading02">
          <h2>Services we provide</h2>
          <p>THE THING THAT MAKES US DIFFERENT</p>
        </div>
      </div>{/* .row end */}
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="service-icon-center">
            <div className="icon-container">
            <img src={Service1} alt="checklist icon" />
            </div>
            <h4>General Sales Agent</h4>
            <p>
            We are a team of experienced and extremely skilled workers. Our sales focus is on finding optimal solutions for pricing and capacity. 

            </p>
          </div>{/* .service-icon-center end */}
        </div>{/* .col-md-3 end */}
        <div className="col-md-3 col-sm-6">
          <div className="service-icon-center">
            <div className="icon-container">
            <img src={Service2} alt="touch icon" />
            </div>
            <h4>Air Charter Brokers</h4>
            <p>
            We source the top highly skilled air charter brokers who take on the responsibility of finding exactly the right provider to ensure that you have a hassle free experience. 
  
            </p>
          </div>{/* .service-icon-center end */}
        </div>{/* .col-md-3 end */}
        <div className="col-md-3 col-sm-6">
          <div className="service-icon-center">
            <div className="icon-container">
            <img src={Service3} alt="forktruck icon" />
            </div>
            <h4>Specialized Commodity</h4>
            <p>
            Our knowledge of all the specialized requirement of handling and moving specialized cargo, means that your yielding cargo will received the best care.

            </p>
          </div>{/* .service-icon-center end */}
        </div>{/* .col-md-3 end */}
        <div className="col-md-3 col-sm-6">
          <div className="service-icon-center">
            <div className="icon-container">
            <img src={Service4} alt="touch icon" />
            </div>
            <h4>“Make It Happen” Philosophy</h4>
            <p>
            Our Philosophy is there is no such word as “Impossible”. Our leadership follows the make it happen philosophy concept. Our goal is to overcome challenges and succeed where others have failed.

            </p>
          </div>{/* .service-icon-center end */}
        </div>{/* .col-md-3 end */}
       
      </div>{/* .row end */}
      
    </div>{/* .container end */}
  </div>{/* .page-content end */}  
            </>
        )
    }
}
