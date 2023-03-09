import React from 'react'
import image from '../images/card-1.jpg'
function Marque() {
  return (
    <div className="section-1">
    <marquee width="100%" direction="right" height="100px">
      <span className="top-bar">
        <img src={image} alt="" />
        <a href="" target="_blank">
          <p style={{ color: "orange" }}>Read More...</p>
        </a>
      </span>
    </marquee>
      
  </div>
  )
}

export default Marque