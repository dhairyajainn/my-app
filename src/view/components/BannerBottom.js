import React from "react";

const BannerBottom = () => {
  return (
    <div className="bannerBottom">
      <div className="text-area-bottom">
        <div className="text-with-hi-bottom">
          <h3>Exclusive</h3>
        </div>
        <h3>Offers For You</h3>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="hero-bottom">
        <img src={require("../Assets/exclusive_image.png")}></img>
      </div>
    </div>
  );
};

export default BannerBottom;
