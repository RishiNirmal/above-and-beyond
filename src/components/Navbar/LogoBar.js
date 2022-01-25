import React, { Component } from 'react';
import Logo from '../../AboveBeyondImages/Logo/logo.png'
import {  Link } from "react-router-dom";
import GoToTop from '../GotoTop';

function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 0);
    // console.log('page to reload')
  }
export default class LogoBar extends Component {
    render() {
        return (
            <>
                <div className="navbar-header">
                <div className="logo">
                <Link to={`${process.env.PUBLIC_URL}/`} onClick={refreshPage}>
                    <img src={Logo} alt="Above & Beyond"/>
                    </Link>
                </div>{/* .logo end */}
              </div>{/* .navbar-header start */} 
              <GoToTop/>
            </>
        )
    }
}
