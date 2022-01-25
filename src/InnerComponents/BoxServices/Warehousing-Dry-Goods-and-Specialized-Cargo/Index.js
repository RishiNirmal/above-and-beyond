import React, { Component } from 'react'
import OtherServicesBox from '../OtherServicesBox'
import ProvidingFirstService from '../ProvidingFirstService'
import { Link } from "react-router-dom";

function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 0);
  // console.log('page to reload')
}

export default class WarehousingDryGoodsAndSpecializedCargo2 extends Component {
  render() {
    return (
      <>
        <div id="services-pages">
          <div className="page-title-style01 page-title-negative-top pt-bkg03">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Services - Warehousing (Dry Goods & Specialized Cargo)</h1>
                  <div className="breadcrumb-container">
                    <ul className="breadcrumb clearfix">
                      <li>You are here:</li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/`} onClick={refreshPage}>Home</Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/warehousing`}>Services</Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/warehousing`}>Warehousing (Dry Goods & Specialized Cargo)</Link>
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
                    <h2>WAREHOUSING (DRY GOODS & SPECIALIZED CARGO)</h2>
                  </div>{/* .custom-heading end */}
                  <p>
                    <h6><strong>MANY CARGOS ARE UNIQUE AND NEEDS SPECILIZED CARE. </strong></h6>
                    Our available specialized cargo warehouse enables us to ship those packages hassle free. The basic benefits that we provide with our specialized cargo warehouse are; monitored storage, quality control and reducing all risk bearing factors.

                  </p>
                  <p>Storage can be the basic function of any warehouse, but we don’t stop there.
                    Many warehouses are not able to provide immediate storage to surplus Inventories. We are ready store your surplus inventories anytime and/or in case of emergencies.
                    Our expert warehouse management team takes care of your goods and safeguards them against any possible risk. </p>

                  <p>Another benefit of our specialized warehouse is that our warehouse provides facilities like packing, processing and grading of goods. We will pack your goods as per your stringent requirement before shipping them.
                  </p>
                  <p>In short, we will protect your goods until they are dispatched to the customers they are supposed to reach.
                  </p>
                  <p>We also provide the benefit of having temperature control storage. Your perishable, pharmaceutical and other temperature sensitive cargos are monitored and looked after with the special touch that they require.
                  </p>
                  <p>An important element of first class warehousing is the proper resourcing and training of our personnel. Giving them the proper tools to work safely and efficiently and matching that with appropriate training and procedures, ensures that your cargo will be handled only the best of care.
                  </p>


                </div>

              </div>{/* .row end */}
            </div>{/* .container end */}
          </div>{/* .page-content end */}
          <ProvidingFirstService />
          <OtherServicesBox />
        </div>

      </>
    )
  }
}
