import React from 'react'
import { listData } from '../../lib/dummydata'
import "./Listpage.scss"
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import Map from '../../components/Map/Map'
const Listpage = () => {
  const data   = listData
  {console.log("data at listpage","\n",data)}
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
      <div className="mapcontainer"><Map items={data}/></div>
    </div>
  )
}

export default Listpage