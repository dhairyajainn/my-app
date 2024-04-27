import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import '../style/home.css'
import data_product from '../data/data'
import new_collections from '../data/new_collections'
import Footer from '../components/Footer'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const details = useNavigate()
  
  const [popularWomen, setPopularWomen] = useState('')
  useEffect(()=>(
    setPopularWomen(data_product)
  ),[])

  const [newCollections, setNewCollections] = useState('');
  useEffect(()=>{
    setNewCollections(new_collections);
  },[]);

  function Subscribe() {
      alert("Subscribed")
  }
  return (
    <>
      <NavBar />
      <div className='banner'>
        <div className='text-area'>
          <p>NEW ARRIVALS ONLY</p>
          <div className='text-with-hi'>
            <h3>New</h3>
            <img src={require('../Assets/hand_icon.png')}></img>
          </div>
          <h3>Collection For Everyone</h3>
          <button>Latest Collection →</button>
        </div>
        <div className='hero'>
          <img src={require('../Assets/hero_image.png')}></img>
        </div>
      </div>

      <div className='popularWomens'>
        <h1>POPULAR IN WOMEN</h1>
        <div className='card-flex'>
        {
          popularWomen&&popularWomen.map(val=>(
            <div className='card-flex'>

            <div onClick={()=>details('/details', {state: val})} class="card">
              <img src={val.image}  alt=''/>
              <p>{val.name}</p>
              <p>$ {val.new_price} <del>$ {val.old_price}</del> </p>
              
          </div>
            </div>
          ))
        }
        </div>
      </div>

      <div className='bannerBottom'>
        <div className='text-area-bottom'>
          
          <div className='text-with-hi-bottom'>
            <h3>Exclusive</h3>
          </div>
          <h3>Offers For You</h3>
          <p>ONLY ON BEST SELLERS PRODUCT</p>
          <button>Check Now</button>
        </div>
        <div className='hero-bottom'>
          <img src={require('../Assets/exclusive_image.png')}></img>
        </div>
      </div>

      <div className='newCollections'>
        <h1>NEW COLLECTIONS</h1>
        <div className='newCollection-flex-card'>
          {
            newCollections&&newCollections.map(val=>(
              <div onClick={()=>details('details', {state: val})} class="card-new-collection">
                <img src={val.image} alt=''/>
                <p>{val.name}</p>
                <p>$ {val.new_price} <del>$ {val.old_price}</del> </p>
              </div>
            ))
          }
        </div>
      </div>

      <div className='getInfoBanner'>
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to our newsletter and stay updated.</p>
          <div className='input-field'>
            <input type='email' placeholder='Your email id' />
            <button type='button' onClick={Subscribe}>Subscribe</button>
          </div>
      </div>

      <Footer />
    </>
  )
}

export default Home