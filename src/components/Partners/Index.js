import React, { Component } from 'react'
import Partner1 from '../Images/client01.png'
import Partner2 from '../Images/client02.png'
import Partner3 from '../Images/client03.png'
import Partner4 from '../Images/client04.png'
import Partner5 from '../Images/client05.png'
import Partner6 from '../Images/client06.png'

export default class Partners extends Component {
    render() {
        return (
            <>
               <div className="page-content custom-bkg bkg-grey">
               <div className=" custom-heading02">
          <h3>Our Clients</h3>
        </div>{/* .custom-heading end */}
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="carousel-container">
          {/* <div id="client-carousel" className="owl-carousel owl-carousel-navigation">
            <div className="owl-item"><img src={Partner1} alt="" /></div>
            <div className="owl-item"><img src={Partner2} alt="" /></div>
            <div className="owl-item"><img src={Partner3} alt="" /></div>
            <div className="owl-item"><img src={Partner4} alt="" /></div>
            <div className="owl-item"><img src={Partner5} alt="" /></div>
            <div className="owl-item"><img src={Partner6} alt="" /></div>
          </div> */}
          {/* .owl-carousel.owl-carousel-navigation end */}
        </div>{/* .carousel-container end */}
      </div>{/* .col-md-12 end */}
    </div>{/* .row end */}
  </div>{/* .container end */}
</div>{/* .page-content end */}

            </>
        )
    }
}
