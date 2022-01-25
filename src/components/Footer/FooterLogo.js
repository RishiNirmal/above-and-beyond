import React, { Component } from 'react';
import Logo from '../../AboveBeyondImages/Logo/logo2.png'

export default class FooterLogo extends Component {
    render() {
        return (
            <>
            <ul className="col-md-3 col-sm-6 footer-widget-container clearfix">
            {/* .widget.widget_text */}
            <li className="widget widget_newsletterwidget">
              <div className="title">
                {/* <h3>our location</h3> */}
              </div>
              <img src={Logo} alt="LOGO illustration" />
              {/* <img src={MapImage} alt="locations illustration" /> */}
              <br />
              <p>
              Let us give you a quick tour into our company. Founded by Ms. Dorji Lham in 2017, this company has completed 17 glorious years in the cargo management industry.
  
              </p>
             
            </li>{/* .widget.widget_newsletterwidget end */}
          </ul>{/* .col-md-3.footer-widget-container end */}  
              </>
        )
    }
}
