import React, { Component } from 'react'

export default class WhatsClientsSay extends Component {
    render() {
        return (
            <>
             <div className="col-md-12 col-sm-12">
               {/* custom-heading class change */}
        <div className=" custom-heading02">
          <h3>what clients say</h3>
        </div>{/* .custom-heading end */}
        <div className="carousel-container">
          <div id="testimonial-carousel" className="owl-carousel owl-carousel-navigation">
            <div className="owl-item">
              <div className="testimonial">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type.
                </p>
                <div className="testimonial-author">
                  <p>
                    TRAVIS COPLAND, <br />
                    Transport &amp; Logistics Solutions
                  </p>
                </div>{/* .testimonial-author end */}
              </div>{/* .testimonial end */}
            </div>{/* .owl-item end */}
            <div className="owl-item">
              <div className="testimonial">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type.
                </p>
                <div className="testimonial-author">
                  <p>
                    ADRIANOSP, <br />
                    Themeforest member
                  </p>
                </div>{/* .testimonial-author end */}
              </div>{/* .testimonial end */}
            </div>{/* .owl-item end */}
            <div className="owl-item">
              <div className="testimonial">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type..
                </p>
                <div className="testimonial-author">
                  <p>
                    DIGITALMARKETINGASSOCIATES, <br />
                    Themeforest member
                  </p>
                </div>{/* .testimonial-author end */}
              </div>{/* .testimonial end */}
            </div>{/* .owl-item end */}
          </div>{/* #testimonial-carousel end */}
        </div>{/* .carousel-container end */}
      </div>{/* .col-md-4 end */}

            </>
        )
    }
}
