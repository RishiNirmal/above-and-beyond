import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm"

function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 500);
  // console.log('page to reload')
}


export default class ContactUs extends Component {
    render() {
        return (
            <>
             <div id="contactUs">
  {/* .page-title start */}
  <div className="page-title-style01 page-title-negative-top pt-bkg08">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Contact us</h1>
          <div className="breadcrumb-container">
            <ul className="breadcrumb clearfix">
              <li>You are here:</li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}`}  onClick={refreshPage}>Home</Link>
              </li>
              <li>
              <Link  to={`${process.env.PUBLIC_URL}/contact-us`}>Contact Us</Link>
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
        <div className="col-md-6">
          <div className="custom-heading">
            <h3>your inquiry</h3>
          </div>{/* .custom-heading.left end */}
          <p>
          You can contact us at <a href="tel:+16476189008">+1 647 618 9008</a> anytime you want to talk to us.</p>
<p>Our hours of operations follow the business and is always subject to customer requirements. We would be more than happy to help you take your business to the next level. Alternately you can reach us by completing the info below:
 
          </p>
          <br />
          {/* .contact form start */}
         <ContactForm/>
        </div>{/* .col-md-6 end */}
        <div className="col-md-6">
          <div className="custom-heading">
            <h3>Company Headquarters </h3>
          </div>{/* .custom-heading end */}
          <div id="map" >
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.1738765212713!2d-79.76091708499119!3d43.727714655627885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1614426304dd%3A0x7cd959eeb0cc69f1!2s15%20Nymark%20Pl%2C%20Brampton%2C%20ON%20L6S%205T5%2C%20Canada!5e0!3m2!1sen!2sin!4v1640583069566!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />


              </div>
          <div className="custom-heading">

            <h4>company information</h4>
          </div>{/* .custom-heading end */}
          <address>
          15 Nymark Place, Brampton,<br />Ontario L6S 5T5.
          </address>
          <span className="text-big colored">
          <a href="tel:+16476189008">+1 647 618 9008</a>
          </span>
          <br />
          <a href="mailto:info@beyondaviation.ca">info@beyondaviation.ca</a>
        </div>{/* .col-md-6 end */}
      </div>{/* .row end */}
    </div>{/* .container end */}
  </div>{/* .page-content end */}
</div>
 
            </>
        )
    }
}
