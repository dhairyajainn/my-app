import React from 'react'
import { Link } from "react-router-dom";
import "../style/payment.css";
import NavBar from "../components/NavBar";

const UPI = () => {
  return (
    <div>
      <NavBar />
      <div id="payment-main">
        <div className="payment-container">
          <h3>Payment</h3>
          <ul className="payment-list">
            <Link to={'/payment/netbanking'} className="payment-links">Net Banking</Link>
            <Link to={'/payment/upi'} className="payment-links">UPI</Link>
            <Link to={'/payment/cashondelivery'} className="payment-links">Cash On Delivery</Link>
          </ul>
          <div className='upi'>
            <img src={require('../Assets/upi-icon.png')} alt='payment-upi-logo'/>
            <img src={require('../Assets/paytm-icon.png')} alt='payment-upi-logo'/>
            <img src={require('../Assets/google-pay-icon.png')} alt='payment-upi-logo'/>
          </div>
          <div className='upi-form'>
            <form>
              <input placeholder='Enter your name'></input>
              <input placeholder='Enter your UPI Id'></input>
              <input placeholder='Confirm your UPI Id'></input>
            </form>
            <button>Place order</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default UPI