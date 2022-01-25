import React, { Component } from 'react'
import GrideServices from './GrideServices'
import ProvidingFirst from './ProvidingFirst'
import { Link } from "react-router-dom";

function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 0);
  // console.log('page to reload')
}

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <div id='aboutUs'>
          {/* .page-title start */}
          <div className="page-title-style01 page-title-negative-top pt-bkg02" >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>ABOVE & BEYOND - ABOUT US</h1>
                  <div className="breadcrumb-container">
                    <ul className="breadcrumb clearfix">
                      <li>You are here:</li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/`} onClick={refreshPage}>Home</Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/about-us`}>About Us</Link>
                      </li>
                    </ul>{/* .breadcrumb end */}
                  </div>{/* .breadcrumb-container end */}
                </div>{/* .col-md-12 end */}
              </div>{/* .row end */}
            </div>{/* .container end */}
          </div>{/* .page-title-style01.page-title-negative-top end */}
          <div className="container">
            <div className="">

              <div className="custom-heading">
                <h2>ABOVE & BEYONd’s  corporate HISTORY</h2>
              </div>
              <p>
                Established by Ms. Dorji Lham in 2017, this company has completed 17 glorious years in the cargo management industry. Ms. Dorji Lham decided to turn her efforts into development of a superior air cargo consultation brokerage and sales operation. </p>
                <p>Our company focuses specifically on the professional movement of cargo, which ensures the safety of your package journey. Being a CIFFA life member and coming from an extensive GSA background, it was a smooth transition for her. No wonder she is called a perishables ‘Guru’ of airline and trucking business. Her way of working has helped her achieve this success in a very short period of time.</p>

             

              <p>
                She believes in satisfying her client’s demands while maintaining the quality and safety of the packages simultaneously. This has helped her create a professional and reliable image within the industry.

              </p>
              <p>
                The best part of this company is that we believe in a ‘make it happen' philosophy, which is why there is nothing termed 'impossible' in our dictionary. From air cargo sales and services - to warehouse and specialized handling sourcing and full trucking services from end to end, we make it all happen in a manner which maintains the safety of your cargo throughout. We have workers who are proficient in specialized commodity handling. No product is too complex for highly trained team. Having General Sales Agent experience helps greatly when shipping packages between countries. Our experience ensures that your cargo does not face any unnecessary impediments.
              </p>
              <p>Our General Sales Agent also makes sure your package reaches its destination on time without having to face any unnecessary hassles. We make sure we provide this valuable service in a very cost effective manner. We are a complete package, providing our expertise at each and every step of the process till your packages reaches your destination.
              </p>
              <p>Our history in government agency coordination means there will be fewer hassles getting permits and all required documentations.
              </p>
              <p>We believe in maintaining a one to one relationship with our customers to avoid any sort of miscommunication. Having a one to one relationship with the customer helps a great deal because this way we get to know the needs of our customer thoroughly. Work only according to our customers' needs and demands which has made us the most trusted industry Guru.
              </p>
              <p>Maintaining a professional and reliable image in this industry is really difficult but our improved service quality has made it possible while giving higher yields and returns. If you go through the reviews our customers have given, you will get to know only one thing and that is satisfaction.
              </p>
              <p>Customer satisfaction is something that we always aim for. We believe our biggest profit lies in our customers being satisfied with our work and this has led us to the top position in this industry. Every kind of service related to shipping business we have achieved a top notch position in this industry. We have every sort of service related to shipping, you name it and we have it.
              </p>
              <p>From terrific air cargo sales and services to having a general sales agent or even maintaining logistic sourcing and coordination along with specialised commodity handling, we have it all.
              </p>
              <p>So if you are planning to work with us, just leave it all on us and relax. We have it all covered for you and we will be there with you at every step till your package reaches its destination safely and also in time. If you go through the reviews we received from our customers, you will get to know we never disappoint our customers regarding anything.
              </p>
              <br />

            </div>{/* .col-md-9 end */}
          </div>


          <ProvidingFirst />
          <br /><br /><br />
          <GrideServices />
        </div>

      </>
    )
  }
}
