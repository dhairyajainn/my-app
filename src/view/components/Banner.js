import React from 'react'

const Banner = () => {
  return (
    <div className="banner">
        <div className="text-area">
          <p>NEW ARRIVALS ONLY</p>
          <div className="text-with-hi">
            <h3>New</h3>
            <img src={require("../Assets/hand_icon.png")} alt=""></img>
          </div>
          <h3>Collection For Everyone</h3>
          <button>Latest Collection →</button>
        </div>
        <div className="hero">
          <img src={require("../Assets/hero_image.png")} alt=""></img>
        </div>
      </div>
  )
}

export default Banner