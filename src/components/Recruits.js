import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'
import jpg1 from '../assets/img1.jpeg'
import jpg2 from '../assets/img2.jpg'
import jpg3 from '../assets/img3.jpg'


const btnClick = () => {
    console.log('Im here')
    window.open('https://forms.gle/KEgQLDYjfyMrg9kJ6')
  }
  
  const btnClick2 = () => {
    console.log('Im here')
    window.open('https://forms.gle/pesBoWJzQn3oSGgd6https://docs.google.com/forms/d/e/1FAIpQLSf3-PfsUPiQYH6oXGRR_gVhXbB45q4tZtES7wWSGfC7sG9G5A/viewform?usp=sf_link')
  }

  const btnClick3 = () => {
    console.log('Im here')
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe0DZgM-XdydXo_yf_Gezy8nYRKiEcu0PAdvbxLdhMJOftcMw/viewform?usp=sf_link')
  }


const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3> Organizational Development Specialist </h3>
                    <span className='bar'></span>
                    <img src={jpg1} className='img1' alt='' />
                    <p> Candididate must be accountable for the development and implementation of tactical work plans and the formulation of associated Organisational Development practices. This is to contribute towards overall organizational effectiveness in the Human Capital context.</p>
                    <p>Contract Type: Permanent</p>
                    <p>Closing Date: 31 March 2022</p>
                    {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
                    <button btnClass={"btn"} onClick={btnClick.bind(this)} >
                Apply Now
              </button>
                </div>
                <div className='card'>
                    <h3> Deputy Director: Employee Relations </h3>
                    <span className='bar'></span>
                    <img src={jpg2} className='img2' alt='' />
                    <p> Manage ethics. Facilitate grievance cases, appeals and investigations. Liaise and
maintain relations with internal and external stakeholders, including other government
departments. Develop policy and reviews. Raise awareness and hold workshops.
Provide internal controls and support.</p>
                    <p>Contract Type: Permanent</p>
                    <p>Closing Date: 31 March 2022</p>
                    {/* <Link to='/contact' className='btn'>Apply</Link> */}
                    <button btnClass={"btn"} onClick={btnClick2.bind(this)} >
                Apply Now
              </button>
                </div>
                <div className='card'>
                    <h3> Skills Development Specialist </h3>
                    <span className='bar'></span>
                    <img src={jpg3} className='img3' alt='' />
                    <p> You will be responsible for effectively and efficiently
designing, implementing and monitoring the learning and development strategy with
a purpose of developing and equipping employees to perform at optimal levels. Managing
the training department to fulfil overall organizational development.</p>
                    <p>Contract Type: Permanent</p>
                    <p>Closing Date: 31 March 2022</p>
                    {/* <Link to='/contact' className='btn'>Apply</Link> */}
                    <button btnClass={"btn"} onClick={btnClick3.bind(this)} >
                Apply Now
              </button>
                </div>
            </div>
        </div>
    )
}

export default Pricing
