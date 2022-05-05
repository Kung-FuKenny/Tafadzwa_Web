import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'
import Pod1 from '../assets/pod1.jpg'
import Moon1 from '../assets/moon1.jpg'
import Pod2 from '../assets/pod2.jpg'
import Moon2 from '../assets/moon2.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>History</h1>
                <p>Tafadzwa Consulting was sucessfully established in 2004 to bring together professionals dedicated to share common values of making a remarkable difference in the industry, offering all elements of our services into creating robust solution.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='s_left'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod1} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='s_right'>
                <h1>Our Vision</h1>
                <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
                <h1>Our Mission</h1>
                <p>To build long-term partnerships based on trust and integrity and through business ethics that will result in greater profits for both parties. By facilitating the development of sustainable organisations that have sound business and financial principles, we become a trusted advisor.</p>
            </div>
            <div className='t_left'>
                <h1>Our Values</h1>
                <p>Our Values are to consistently deliver the best quality service, working in partnership with our clients and developing sustainable value-adding long-term relationships through integrity and professionalism.</p>
                <h1>Our Value Proposition</h1>
                <p>Our services weave into each other to create a total robust solution, from assisting organisations in developing their organizational strategies, operational, unit and departmental strategies to ensuring the timely Implementation of those strategies. Internal audit assures that business processes have all controls needed, and are working effectively. Internal audit will also identify risks associated with these processes. In additional it will identify risks associated with operations, employees, legislation compliance and governance. The risk management processes will enable quantification of risks, identification of risk owners, creation of sub-tasks to mitigate the risks and identification of risk mitigation strategies.</p>
                {/* <Link to='/contact'><button className='btn'>Contact</button></Link> */}
            </div>
            <div className='t_right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon2} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod2} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Training
