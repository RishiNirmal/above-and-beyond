import React, { Component } from 'react'
import BriefBio from '../../components/BriefBio/Index';
import ServicesOffer from '../../components/Services/Index';
import Expertise from '../../components/BriefBio/Expertise';
import ResultsForCustomers from '../../components/ResultsForCustomers/Index';
import MsDrojiLham from '../../components/MsDrojiLham/Index';
import MasterSlider from '../../components/SliderBar/MasterSlider';
import SlideBox from '../../components/SlideServiceBox/SlideBox';
import ClientSection from "../../components/ClientsSection/Index";


export default class Home extends Component {

    render() {
        return (
            <>
            <MasterSlider/>
            <SlideBox/>
            <MsDrojiLham/>
            <ServicesOffer/>
            <BriefBio/>
            <Expertise/>
            {/* <ClientSection/> */}
            <ResultsForCustomers/>           
            </>
        )
    }
}
