import React, { Component } from 'react'

export default class NewsLetter extends Component {
    render() {
        return (
            <>
          <ul className="col-md-3 col-sm-6 footer-widget-container clearfix">
          {/* .widget.widget_text */}
          <li className="widget widget_newsletterwidget">
            <div className="title">
              <h3>newsletter subscribe</h3>
            </div>
            <p>
              Subscribe to our newsletter and we will 
              inform you about newest projects and promotions.

            </p>
            <br />
            <form className="newsletter">
              <input className="email" type="email" placeholder="Your email..." />
              <input type="submit" className="submit" defaultValue />
            </form>
          </li>{/* .widget.widget_newsletterwidget end */}
        </ul>{/* .col-md-3.footer-widget-container end */}  
            </>
        )
    }
}
