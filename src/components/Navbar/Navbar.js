import React, { Component } from 'react'
// import Searchbar from '../Searchbar/Searchbar'
import LogoBar from './LogoBar'
import ResponsiveMenu from './ResponsiveMenu'
import WebMenu from './WebMenu'

export default class Navbar extends Component {
    render() {
        return (
            <>
          <nav className="navbar navbar-default nav-left" role="navigation">
              {/* .navbar-header start */}
             <LogoBar/>
              {/* MAIN NAVIGATION */}
              <div className="collapse navbar-collapse">
                <WebMenu/>
                {/* RESPONSIVE MENU */}
                <ResponsiveMenu/>
                {/* #search start */}
               {/* <Searchbar/> */}
              </div>{/* MAIN NAVIGATION END */}
            </nav>{/* .navbar.navbar-default end */}
            </>
        )
    }
}
