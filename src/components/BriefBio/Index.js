import React, { Component } from 'react'
import Brief1 from '../Images/Brief1.svg'
import Brief2 from '../Images/Brief2.svg'
import Brief3 from '../Images/Brief3.svg'
import Brief4 from '../Images/Brief4.svg'
import Brief5 from '../Images/Brief5.svg'

export default class BriefBio extends Component {
    render() {
        return (
            <>
              <div className="page-content custom-bkg bkg-dark-blue column-img-bkg dark">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 col-md-offset  custom-col-padding-both">
        <div className="custom-heading">
          <h3>Brief Bio of Above & Beyond</h3>
        </div>{/* .custom-heading end */}
        <p>
        Established by  Ms. Dorji Lham in 2017, this company has completed 17 glorious years in the cargo management industry.

        </p>
        <ul className="service-list clearfix">
          <li>
            <div className="icon-container">
              <img className="svg-white icon-1" src={Brief1} alt="icon" />                                    
            </div>{/* .icon-container end */}
            <p>
            An Honest & Professional Air Cargo Services & Consulting Business
            </p>
          </li>
          <li>
            <div className="icon-container">
              <img className="svg-white twicon" src={Brief2} alt="icon" />                                    
            </div>{/* .icon-container end */}
            <p>
            17 Years of Cargo Management Experience
            </p>
          </li>
          <li>
            <div className="icon-container">
              <img className="svg-white icon-3" src={Brief3} alt="icon" />                                    
            </div>{/* .icon-container end */}
            <p>
            Specific Focus on the Professional Movement of Air  / Land Cargo
            </p>
          </li>
          <li>
            <div className="icon-container">
              <img className="svg-white icon-5" src={Brief4} alt="icon" />                                    
            </div>{/* .icon-container end */}
            <p>
            	In 2017, Ms. Dorji Lham decided to turn her efforts to developing a Superior Air Cargo Consultation, Brokerage and Sales Operation.

            </p>
          </li>
          <li>
            <div className="icon-container">
              <img className="svg-white trcicon" src={Brief5} alt="icon" />                                    
            </div>{/* .icon-container end */}
            <p>
            The combined expertise of a Cargo GSA and An Aviation Executive, offering a Larger, More Productive Network for our Clients.

            </p>
          </li>
        </ul>{/* .service-list end */}
      </div>{/* .col-md-6 end */}


      
      <div className="col-md-6 img-bkg01"  >
        <div>&nbsp;</div>
      </div>
    </div>{/* .row end */}
  </div>{/* .container end */}
</div>{/* .page-content.bkg-dark-blue end */}

            </>
        )
    }
}
