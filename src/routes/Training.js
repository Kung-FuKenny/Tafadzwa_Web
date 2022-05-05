import React from 'react'
import Footernew from '../components/Footernew'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'
import Features from '../components/features/Features'
import Cards  from   '../components/cards/Cards'
import Count  from   '../components/table/CountUp'
// import Faq from '../components/faq/More'
import MultiItemCarousel from '../components/partners/MultiItemCarousel'
// import 'react-count-animation/dist/count.min.css'

const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='About Us' text=' Performance and productivity for our clients' />
            <TrainingSection />
            <Features/>
            {/* <Faq /> */}
            <Cards />
            <MultiItemCarousel />
            {/* <Count /> */}
            <Footernew />
        </div>
    )
}

export default Training
