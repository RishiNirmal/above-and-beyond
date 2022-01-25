import React, { Component } from 'react'
import ImgIndustrySectors1 from "../Images/svg/pi-cargo-box-2.svg";
import ImgIndustrySectors2 from "../Images/svg/pi-mark-energy.svg";
import ImgIndustrySectors3 from "../Images/svg/pi-food-beverage.svg";
import ImgIndustrySectors4 from "../Images/svg/pi-cargo-retail.svg";
import ImgIndustrySectorsBig from "../Images/svg/pi-truck-8.svg";

export default class IndustrySectorsCoverage extends Component {
    render() {
        return (
            <>
              <div className="page-content custom-bkg bkg-dark-blue column-img-bkg dark mb-70">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 col-md-offset-2 custom-col-padding-both">
        <div className="custom-heading">
          <h3>INDUSTRY SECTORS COVERAGE</h3>
        </div>{/* .custom-heading end */}
        <p>
          We cover different industry sectors, from food and 
          beverage, chemical, retail, durable goods and more. 
          Check the full list.
        </p>
        <ul className="service-list clearfix">
          <li>
            <div className="icon-container">
              <img className="svg-white" src={ImgIndustrySectors1} alt="icon" />                                    
            </div>{/* .icon-container end */}
            <p>
              Consumer Packaged Goods
            </p>
          </li>
          <li>
            <div className="icon-container">
              <img className="svg-white" src={ImgIndustrySectors2} alt="icon" />                                    
            </div>{/* .icon-container end */}
            <p>
              Chemical Goods
            </p>
          </li>
          <li>
            <div className="icon-container">
              <img className="svg-white" src={ImgIndustrySectors3} alt="icon" />                                    
            </div>{/* .icon-container end */}
            <p>
              Food and Beverage
            </p>
          </li>
          <li>
            <div className="icon-container">
              <img className="svg-white" src={ImgIndustrySectors4} alt="icon" />                                    
            </div>{/* .icon-container end */}
            <p>
              Retail Goods
            </p>
          </li>
          <li>
            <div className="icon-container">
              <img className="svg-white" src={ImgIndustrySectorsBig} alt="icon" />                                    
            </div>{/* .icon-container end */}
            <p>
              Energy, Oil and Gas
            </p>
          </li>
        </ul>{/* .service-list end */}
      </div>{/* .col-md-6 end */}
      <div className="col-md-6 img-bkg01">
        <div>&nbsp;</div>
      </div>
    </div>{/* .row end */}
  </div>{/* .container end */}
</div>{/* .page-content.bkg-dark-blue end */}

            </>
        )
    }
}
