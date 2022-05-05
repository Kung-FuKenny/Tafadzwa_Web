import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/business.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Tafadzwa Consulting</h1>
                <p>TALENT ACQUISITION AND MANAGEMENT CONSULTING</p>
                <div>
                    <Link to='/training' className='btn'>More</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
