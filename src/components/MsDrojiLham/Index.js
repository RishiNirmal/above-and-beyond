import React, { Component } from 'react';
import MsDrojilham from '../../AboveBeyondImages/mr-droji-lham.webp'

export default class MsDrojiLham extends Component {
    render() {
        return (
            <>
            <div className="page-content custom-bkg bkg-dark-alice column-img-bkg dark abut-sect">
  <div className="container-fluid">
    <div className="row">
    <div className="col-md-6 col-sm-6 custom-col-padding-both1"  >
          <img className="droji-image" src={MsDrojilham} alt="icon" />
      </div>
      <div className="col-md-6  col-sm-6 custom-col-padding-both">
        <div className="custom-heading">
          <h3>Ms. Dorji Lham / ‘Above & Beyond’</h3>
        </div>{/* .custom-heading end */}
        <p>
        Let us give you a quick tour into our company. Founded by Ms. Dorji Lham in 2017, this company has completed 17 glorious years in the cargo management industry. 
        </p>
        <ul className="service-list clearfix">
          <li>
            <div className="icon-container">
            <i class="fa fa-arrow-right"></i> 
            </div>{/* .icon-container end */}
            <p>
            17 Years in Air Cargo
            </p>
          </li>
          <li>
            <div className="icon-container">
            <i class="fa fa-arrow-right"></i> 
            </div>{/* .icon-container end */}
            <p>
            CIFFA Life Member
            </p>
          </li>
          <li>
            <div className="icon-container">
            <i class="fa fa-arrow-right"></i> 
            </div>{/* .icon-container end */}
            <p>
            Extensive GSA Background
            </p>
          </li>
          <li>
            <div className="icon-container">
            <i class="fa fa-arrow-right"></i> 
            </div>{/* .icon-container end */}
            <p>
            Perishables ‘Guru’

            </p>
          </li>
          <li>
            <div className="icon-container">
            <i class="fa fa-arrow-right"></i> 
            </div>{/* .icon-container end */}
            <p>
            Airline & Trucking Network
            </p>
          </li>
        </ul>{/* .service-list end */}
      </div>{/* .col-md-6 end */}
    
    </div>{/* .row end */}
  </div>{/* .container end */}
</div>{/* .page-content.bkg-dark-blue end */}
            </>
        )
    }
}
