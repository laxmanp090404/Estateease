import React from 'react'
import './home.scss'
import Searchbar from '../../components/searchbar/Searchbar'
const Home = () => {
  return (
    <section className='home'>
        <div className="textContainer">
          <div className="wrapper">
          <h1 className='title'>Get Your Dream Place</h1>
          <p>Your seamless solution for discovering, booking, and managing real estate effortlessly. 
            Whether you're looking for your next dream home, a commercial property, 
            or a vacation rental, Estateease simplifies every step.
             </p>
            
            <Searchbar/>
            <div className="testimonials">
              <div className="test">
                <h1>20+</h1>
                <h2>Years Of Experience</h2>
              </div>
              <div className="test">
                <h1>100+</h1>
                <h2>Awards Gained</h2>
              </div>
              <div className="test">
                <h1>1400+</h1>
                <h2>Estates Ready</h2>
              </div>
            
            </div>

                      </div>

        </div>
        <div className="imgContainer">
            <img alt='real estate vector' src='/bg.png'/>
        </div>
    </section>
  )
}

export default Home