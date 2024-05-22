import React from "react";

const GetInfoBanner = () => {
  function Subscribe() {
    alert("Subscribed");
  }
  return (
    <div className="getInfoBanner">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div className="input-field">
        <input type="email" placeholder="Your email id" required/>
        <button type="button" onClick={Subscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default GetInfoBanner;
