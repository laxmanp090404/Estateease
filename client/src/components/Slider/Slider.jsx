import React from 'react'
import './Slider.scss'
const Slider = ({images}) => {
  return (
    <div className='slider'>
      <div className="fullslider">
        <div className="arrow">
          <img src="/arrow.png" alt="" />
        </div>
        <div className="imgcontainer">
          <img src={images[0]} alt="mainimage" />
        </div>
        <div className="arrow">
          <img src="/arrow.png" className='right' alt="" />
        </div>
          <div className="close">X</div>
      </div>
      <div className="bigimage">
        <img src={images[0]} alt="mainimage" />
      </div>
      <div className="smallimages">
        {images.slice(1).map((image,index)=>(
          <img src={image} alt="smallimage" key={index} />
        ))}
      </div>
    </div>
  )
}

export default Slider