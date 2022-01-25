import React, { Component } from 'react'
import SocialLinks from '../SocialLinks/Index'

export default class ContactFooter extends Component {
    render() {
        return (
            <>
              <ul className="col-md-3 col-sm-6 footer-widget-container">
          <li className="widget widget-text">
            <div className="title">
              <h3>contact us</h3>
            </div>
            <address>
           15 Nymark Place, Brampton,<br /> Ontario L6S 5T5.
             </address>
            <span className="text-big">
            <a href="tel:+16476189008">+1 647 618 9008</a>
            </span>
            <br />
            <a href="mailto:info@beyondaviation.ca">info@beyondaviation.ca</a>
            <br />
            <SocialLinks/>
          </li>{/* .widget.widget-text end */}
        </ul>{/* .col-md-3.footer-widget-container end */}  
            </>
        )
    }
}
