import React, { Component } from 'react';
import CompanyImg1 from '../Images/blog/latest01.jpg';
import CompanyImg2 from '../Images/blog/latest02.jpg';

export default class CompanyNews extends Component {
    render() {
        return (
            <>
               <div className="col-md-4 col-sm-6">
        <div className="custom-heading">
          <h3>company news</h3>
        </div>{/* .custom-heading end */}
        <ul className="pi-latest-posts clearfix">
          <li>
            <div className="post-media">
              <img src={CompanyImg1} alt="" />
            </div>{/* .post-media end */}
            <div className="post-details">
              <div className="post-date">
                <p>
                  <i className="fa fa-calendar" />
                  MAY 15, 2015
                </p>
              </div>
              <a href="/">
                <h4>
                  Trucking - Company of the Year 2014
                </h4>
              </a>
              <a href="/" className="read-more">
                <span>
                  Read more
                  <i className="fa fa-chevron-right" />
                </span>
              </a>
            </div>{/* .post-details end */}
          </li>
          <li>
            <div className="post-media">
              <img src={CompanyImg2} alt="" />
            </div>{/* .post-media end */}
            <div className="post-details">
              <div className="post-date">
                <p>
                  <i className="fa fa-calendar" />
                  MAY 15, 2015
                </p>
              </div>
              <a href="/">
                <h4>
                  First quartal 2015 revenue report released
                </h4>
              </a>
              <a href="/" className="read-more">
                <span>
                  Read more
                  <i className="fa fa-chevron-right" />
                </span>
              </a>
            </div>{/* .post-details end */}
          </li>
        </ul>{/* .pi-latest-posts end */}
      </div>{/* .col-md-4 end */} 
            </>
        )
    }
}
