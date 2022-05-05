import React from 'react'
import Footernew from '../components/Footernew'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Faq from '../components/contact/Contact'
import '../components/contact/Contact.css'
import '../components/contact/Question.css'


const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Contact' text='More information below on how to reach us ' />
            <Faq/>
            <Footernew/>
        </div>
    )
}

export default Contact
