import React from 'react'
import './SinglePage.scss'
import Slider from '../../components/Slider/Slider'
import { singlePostData, userData } from '../../lib/dummydata'
import Map from '../../components/Map/Map'
const SinglePage = () => {
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">₹ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listvertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featuretext">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featuretext">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featuretext">
                <span>Property Fees</span>
                <p>Must have 3x the rent in totalhousehold income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listhorizontal">
          <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featuretext">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featuretext">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featuretext">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location </p>
          <div className="mapcontainer">
           <Map items={[singlePostData]}/>
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
          Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
          Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage