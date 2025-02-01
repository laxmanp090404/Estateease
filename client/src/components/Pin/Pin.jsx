import React from 'react'
import "./pin.scss"
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
const Pin = ({item}) => {
    const position = [item.latitude,item.longitude]
    console.log("item in pin",item)
    console.log("position at item",position)
  return (
   <Marker position={position} >
         <Popup>
            <div className="popupcontainer">
                <img src={item.img} alt="" />
                <div className="textcontainer">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                    <span>{item.bedroom} bedroom</span>
                    <b>₹{item.price}</b>
                </div>

            </div>
         </Popup>
       </Marker>
  )
}

export default Pin