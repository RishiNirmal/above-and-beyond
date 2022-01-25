import React, { Component } from 'react';
import Img1 from '../../AboveBeyondImages/Airline-Cargo-Sales-and-Facilitation.webp'
import Img2 from '../../AboveBeyondImages/AIR-CARGO-Perishales.webp'
import Img3 from '../../AboveBeyondImages/End-to-end-Truck-Provisioning--Maintenance.webp'
import Img4 from '../../AboveBeyondImages/Fleet-Parking--Yard-Management.webp'
import Img5 from '../../AboveBeyondImages/Specialized-Cargo-Handling-and-Charters.webp'
import Img6 from '../../AboveBeyondImages/Trucking--Logistics.webp'
import Img7 from '../../AboveBeyondImages/Warehousing-(Dry-Goods--Specialized-Cargo).webp'
import YellowLine from '../../AboveBeyondImages/slider-line.jpg'
import BlankImg from '../../AboveBeyondImages/blank.gif'
// style={{margin: "0px", visibility: "visible", opacity: "1", width: "1349px"}}
export default class MasterSlider extends Component {
    render() {
        return (
            <>
              <div id="masterslider" className="master-slider ms-skin-default mb-0" >
  {/* first slide */} 
  <div className="ms-slide">
    {/* slide background */}
    <img src={Img1} data-src={Img1} alt="Airline Cargo Sales and Facilitation" />  
    <img className="ms-layer" src={BlankImg} data-src={YellowLine} alt="" style={{left: 0, top: 310}} data-type="image" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={0} />
    <h2 className="ms-layer pi-caption01" style={{left: 0, top: 340}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={300}>
    airline cargo
    </h2>
    <h2 className="ms-layer pi-caption01" style={{left: 0, top: 400}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={600}>
    sales and
    </h2>
    <h2 className="ms-layer pi-caption01" style={{left: 0, top: 460}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={900}>
    facilitation
    </h2>
  </div>{/* .ms-slide end */}
  {/* slide 02 start */}
  <div className="ms-slide">
    {/* slide background */}
    <img src={Img2} data-src={Img2} alt="AIR Cargo Perishales" /> 
    <h2 className="ms-layer pi-caption01" style={{left: 273, top: 390}} data-type="text" data-effect="top(short)" data-duration={300} data-hide-effect="fade" data-delay={0}>
    air cargo perishales
    </h2>
    <img className="ms-layer" src={BlankImg} data-src={YellowLine} alt="" style={{left: 540, top: 450}} data-type="image" data-effect="bottom(short)" data-duration={300} data-hide-effect="fade" data-delay={300} />
    
  </div>{/* .ms-slide end */}
  {/* slide 03 start */}
  <div className="ms-slide">
{/* slide background */}
<img src={Img3} data-src={Img3} alt="End to end Truck Provisioning & Maintenance" />  
<img className="ms-layer" src={BlankImg} data-src={YellowLine} alt="" style={{left: 0, top: 310}} data-type="image" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={0} />
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 340}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={300}>
End to end Truck
</h2>
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 400}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={600}>
Provisioning &
</h2>
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 460}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={900}>
Maintenance
</h2>
</div>{/* .ms-slide slide03 end */}
  {/* slide 04 start */}
  <div className="ms-slide">
{/* slide background */}
<img src={Img4} data-src={Img4} alt="Fleet Parking & Yard-Management" />  
<img className="ms-layer" src={BlankImg} data-src={YellowLine} alt="" style={{left: 0, top: 310}} data-type="image" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={0} />
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 340}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={300}>
Fleet Parking & 
</h2>
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 400}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={600}>
Yard-Management
</h2>

</div>{/* .ms-slide slide04 end */}
   {/* slide 05 start */}
   <div className="ms-slide">
{/* slide background */}
<img src={Img5} data-src={Img5} alt="Specialized Cargo Handling and Charters" />  
<img className="ms-layer" src={BlankImg} data-src={YellowLine} alt="" style={{left: 0, top: 310}} data-type="image" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={0} />
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 340}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={300}>
Specialized Cargo  
</h2>
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 400}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={600}>
Handling and
</h2>
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 460}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={900}>
Charters 
</h2>
</div>{/* .ms-slide slide04 end */}
   {/* slide 06 start */}
   <div className="ms-slide">
    {/* slide background */}
    <img src={Img6} data-src={Img6} alt="Trucking & Logistics" /> 
    <h2 className="ms-layer pi-caption01" style={{left: 273, top: 390}} data-type="text" data-effect="top(short)" data-duration={300} data-hide-effect="fade" data-delay={0}>
    Trucking & Logistics
    </h2>
    <img className="ms-layer" src={BlankImg} data-src={YellowLine} alt="" style={{left: 540, top: 450}} data-type="image" data-effect="bottom(short)" data-duration={300} data-hide-effect="fade" data-delay={300} />
   
  </div>{/* .ms-slide slide04 end */}
   {/* slide 07 start */}
   <div className="ms-slide">
{/* slide background */}
<img src={Img7} data-src={Img7} alt="Specialized Cargo Handling and Charters" />  
<img className="ms-layer" src={BlankImg} data-src={YellowLine} alt="" style={{left: 0, top: 310}} data-type="image" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={0} />
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 340}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={300}>
Warehousing    
</h2>
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 400}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={600}>
(Dry Goods &
</h2>
<h2 className="ms-layer pi-caption01" style={{left: 0, top: 460}} data-type="text" data-effect="left(short)" data-duration={300} data-hide-effect="fade" data-delay={900}>
Specialized Cargo)
</h2>
</div>{/* .ms-slide slide04 end */}
</div>{/* #masterslider end */}
            </>
        )
    }
}
