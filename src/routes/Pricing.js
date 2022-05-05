import React from 'react'
import Navbar from '../components/Navbar'
import Footernew from '../components/Footernew'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Careers' text='Take a look at some of the career opportunities available below:' />
            <PricingCards />
            <Footernew />
        </div>
    )
}

export default Pricing
