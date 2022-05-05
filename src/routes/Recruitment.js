import React from 'react'
import Navbar from '../components/Navbar'
import Footernew from '../components/Footernew'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'

const Recruitment = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Recruitment' text='All the you need to know about recruitment below:' />
            <PricingCards />
            <Footernew />
        </div>
    )
}

export default Recruitment
