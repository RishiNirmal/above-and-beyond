import React, { Component } from 'react'
// import MapImage from 'https://dev.01s.in/above-beyond-images/AboveBeyondImages/Location/locations.jpg'

export default class LocationMap extends Component {
    render() {
        return (
            <>
             <div className="col-md-6 col-sm-12 clearfix">
        <div className="custom-heading">
          <h3>our locations</h3>
        </div>{/* .custom-heading end */}
        <img src={'https://dev.01s.in/above-and-beyond/assets/AboveBeyondImages/Location/locations.jpg'} alt="locations illustration" />
        <br />
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text 
        ever since the 1500s, when an unknown printer took a galley of type
        </p>
        <a href="/" className="read-more">
          <span>
            View all locations
            <i className="fa fa-chevron-right" />
          </span>
        </a>
      </div>{/* .col-md-4 end */}   
            </>
        )
    }
}
