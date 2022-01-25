import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

export default class Header extends Component {
    render() {
        return (
            <>
            
  <div class="header-wrapper header-transparent">
  {/* .header.header-style01 start */}
  <header id="header" className="header-style01" >
    {/* .container start */}
    <div className="container">
      {/* .main-nav start */}
      <div className="main-nav">
        {/* .row start */}
        <div className="row-main">
          <div className="col-md-12">
            <Navbar/>
          </div>{/* .col-md-12 end */}
        </div>{/* .row end */}
      </div>{/* .main-nav end */}
    </div>{/* .container end */}
  </header>{/* .header.header-style01 */}
</div>
</>

        )
    }
}
