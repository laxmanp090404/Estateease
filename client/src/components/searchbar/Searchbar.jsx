import React, { useState } from 'react'
import "./searchbar.scss"
const Searchbar = () => {
    const types = ["buy","rent"]    
    const [query,setQuery] = useState({
        type:"buy",
        location:"",
        minprice:0,
        maxprice:0,
    })

    const switchType = (newtype)=>{
        setQuery({...query,type:newtype})
    }

  return (
<div className="searchbar">
        <div className="types">
            {
                types.map((type,index)=>(
                    <button key={index} 
                    onClick={()=>switchType(type)}
                    className={query.type === type ?"active":""}>
                        {type}
                    </button>
                ))
            }
          </div>
        <form action="">
        
            <input type="text" name="location" id="" placeholder='City Location' />
            <input type="number" name="minPrice" min={0} max={100000} id="" placeholder='Minimum Price' />
            <input type="number" name="maxPrice" min={0} max={100000} id="" placeholder='Maximum Price' />
            <button><img src="/search.png" alt="" /></button>
        </form>
</div>
)
}

export default Searchbar