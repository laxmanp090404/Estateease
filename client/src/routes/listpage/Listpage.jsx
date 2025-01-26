import React from 'react'
import { listData } from '../../lib/dummydata'
import "./Listpage.scss"
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
const Listpage = () => {
  const data   = listData
  return (
    <div className='listpage'>
      <div className="listcontainer">
        <div className="wrapper">
          <Filter/>
          {
            data.map((item)=>(
              <Card key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
      <div className="mapcontainer">Map</div>
    </div>
  )
}

export default Listpage