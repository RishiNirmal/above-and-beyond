import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProvidingFirst extends Component {
    render() {
        return (
            <>
               <div className="page-content parallax parallax01 dark">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="call-to-action clearfix">
            <div className="text">
              <h2>Providing first class logistics services worldwide.</h2>
              <p>
              Logistics can be the lifeline of every business… It is very important to upgrade your logistics services game to a whole other level. We are a leading logistic company, providing you efficient services on time and on budget.  Our company believes in helping you get your packages to their destinations, not just on time but also hassle free. We believe in providing first class services to our clients and that is why we are one of the most trusted logistic company in our industry.
 
              </p>                              
            </div>{/* .text end */}
            <Link to={`${process.env.PUBLIC_URL}/contact-us`} className="btn btn-big">
              <span>get a quote</span>
            </Link>
          </div>{/* .call-to-action end */}
        </div>{/* .col-md-12 end */}
      </div>{/* .row end */}
    </div>{/* .container end */}
  </div>{/* .page-content.parallax end */}  
            </>
        )
    }
}
