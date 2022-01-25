import React from 'react'
import Header from './components/Header/Header';
import Partners from './components/Partners/Index';
import Footer from './components/Footer/Index';
export default function Layout(props) {
    return (
       <>
        <Header/>
        {props.children}
        {/* <Partners/> */}
        <Footer/>
       </>
    )
}
