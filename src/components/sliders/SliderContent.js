import React from "react";
import { Link } from 'react-router-dom'

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
<Link to='/training' className='btn'>More</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
          {/* <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3> */}
        </div>
      ))}
    </section>
  );
}

export default SliderContent;