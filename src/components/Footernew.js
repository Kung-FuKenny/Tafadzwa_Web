import React from 'react'
import '../components/Footernew.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footernew = () => {
    return (
        <div className='footer'>
           	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Tafadzwa Consulting</h4>
  	 			<ul>
  	 				<li><a href="/training">About Us</a></li>
  	 				<li><a href="/recruitment">Recruitment</a></li>
  	 				<li><a href="/pricing">Career</a></li>
  	 				<li><a href="/contact">Contact</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li>Ground Floor, Twickenham Building,</li>
  	 				<li>The Campus, Cnr Main & Sloane Street</li>
  	 				<li>Bryanston, Johannesburg, 2021</li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Contact</h4>
  	 			<ul>
  	 				<li><a href="#">Tel: +27 11 438 4300</a></li>
  	 				<li><a href="#">Email: reception@tafadzwa.co.za</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
                   <a href="https://www.facebook.com/Tafadzwa-Consulting-530892300334863/?_rdr"><FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                   <a href="https://twitter.com/tafadzwaconsult"><FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                   <a href="https://za.linkedin.com/in/tafadzwa-consulting-5628bb65"><FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
        </div>
    )
}

export default Footernew;
