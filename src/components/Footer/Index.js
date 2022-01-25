import React, { Component } from 'react'
import FooterLogo from './FooterLogo'
import ContactFooter from './Contact'
import CopyRightReserve from './CopyRightReserve'
import IndustrySolution from './IndustrySolution'
import QuikLinks from './QuikLinks'
import ScrollBar from './ScrollBar'

export default class Footer extends Component {
    render() {
        return (
            <>
<div id="footer-wrapper" className="footer-dark">
  <footer id="footer">
    <div className="container">
      <div className="row">
        <FooterLogo/>
       <QuikLinks/>
       <IndustrySolution/>
        <ContactFooter/>
      </div>{/* .row end */}
    </div>{/* .container end */}
  </footer>{/* #footer end */}
 <CopyRightReserve/>
  <ScrollBar/>
</div>{/* #footer-wrapper end */}
 
            </>
        )
    }
}
