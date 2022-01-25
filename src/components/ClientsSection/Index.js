import React, { Component } from 'react'
// import CompanyNews from '../CompanyNews/Index'
// import LocationMap from '../LocationMap/Index'
import WhatsClientsSay from '../WhatsClientsSay/WhatsClientsSay'

export default class Index extends Component {
    render() {
        return (
            <>
              <div className="page-content client-section">
  <div className="container">
    <div className="row">
      {/* <CompanyNews/> */}
      <WhatsClientsSay/>
      {/* <LocationMap/> */}
    </div>{/* .row end */}
  </div>{/* .container end */}
</div>{/* .page-content end */}  
            </>
        )
    }
}
