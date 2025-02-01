import React from 'react'
import './Map.scss'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer} from 'react-leaflet'
import Pin from '../Pin/Pin'
const Map = ({items}) => {
   
  const position = [51.505, -0.09]

  return (
    <MapContainer center={position} zoom={7} scrollWheelZoom={true} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      items.map((item)=>(
        <Pin key={item.id} item={item} />
      ))
    }
  </MapContainer>
  )
}

export default Map