import React from 'react';
import Card from 'react-bootstrap/Card'
import '../cards/Cards.css'
import img_a from '../../assets/focus/a.jpg'
import img_b from '../../assets/focus/b.jpg'
import img_c from '../../assets/focus/c.jpg'
import img_d from '../../assets/focus/d.jpg'
import img_e from '../../assets/focus/e.jpg'
import img_f from '../../assets/focus/f.jpg'
import img_g from '../../assets/focus/g.jpg'
import img_h from '../../assets/focus/h.jpg'
import img_i from '../../assets/focus/i.jpg'
import { BsFillBookmarkStarFill } from "react-icons/bs";



const Cards = () => {
    return (
        <div className="focus" data-aos="fade-up">
            <h1>Our Industry Focus</h1>
            <h5>We serve these various industries with great knowledge and expertise.</h5>
            <div className="focus-grid">
                {/* First Grid */}
                <Card style={{ width: '18rem' }} data-aos="fade-left">
                {/* <img src={img_a} width="180px" height="auto"/>  */}
                    <Card.Img variant="top" src={img_a} width="250px" height="auto" />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text style={{ color: '#332e62' }}>
                            Medical Aid and Healthcare Funding
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                {/* 2nd Grid */}
                <Card style={{ width: '18rem' }} data-aos="fade-left">
                <Card.Img variant="top" src={img_b} width="250px" height="auto" />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text style={{ color: '#332e62' }}>
                            Financial Services
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                {/* 3rd Grid */}
                <Card style={{ width: '18rem' }} data-aos="fade-left">
                <Card.Img variant="top" src={img_c} width="250px" height="auto" />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text style={{ color: '#332e62' }}>
                            Parastatals and Public Sectors
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                {/* 4th Grid */}
                <Card style={{ width: '18rem' }} data-aos="fade-right">
                <Card.Img variant="top" src={img_d} width="250px" height="auto" />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text style={{ color: '#332e62' }}>
                            Manufacturing
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                {/* 5th Grid */}
                <Card style={{ width: '18rem' }} data-aos="fade-right">
                <Card.Img variant="top" src={img_e} width="250px" height="auto" />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text style={{ color: '#332e62' }}>
                            Transport & Logistics
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                {/* 6th Grid */}
                <Card style={{ width: '18rem' }} data-aos="fade-right">
                <Card.Img variant="top" src={img_f} width="250px" height="auto" />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text style={{ color: '#332e62' }}>
                            Information Technology
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                {/* 7th Grid */}
                <Card style={{ width: '18rem' }} data-aos="fade-up">
                <Card.Img variant="top" src={img_g} width="250px" height="auto" />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text style={{ color: '#332e62' }}>
                            Telecommunication
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                {/* 8th Grid */}
                <Card style={{ width: '18rem' }} data-aos="fade-up">
                <Card.Img variant="top" src={img_h} width="250px" height="auto" />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text style={{ color: '#332e62' }}>
                            Mining and Engineering
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                {/* 9th Grid */}
                <Card style={{ width: '18rem' }} data-aos="fade-up">
                <Card.Img variant="top" src={img_i} width="250px" height="auto" />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text style={{ color: '#332e62' }}>
                            Construction
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Cards;