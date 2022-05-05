import { StylesProvider } from '@material-ui/core'
import React from 'react'
import Footernew from '../components/Footernew'
import Navbar from '../components/Navbar'
// import Slider from '../components/Navbar'
import Video from '../components/Video'
import Slider from '../components/sliders/Slider'
import HeroImage from '../components/HeroImage'

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <Video />  */}
            <Slider />
            <Footernew/>
        </div>
    )
}

export default Home
