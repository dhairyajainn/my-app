import React from "react";
import { Link } from "react-router-dom";
import "../style/payment.css";
import NavBar from "../components/NavBar";

const NetBanking = () => {
  return (
    <div>
      <NavBar />
      <div id="payment-main">
        <div className="payment-container">
          <h3>Payment</h3>
          <ul className="payment-list">
            <Link to={"/payment/netbanking"} className="payment-links">
              Net Banking
            </Link>
            <Link to={"/payment/upi"} className="payment-links">
              UPI
            </Link>
            <Link to={"/payment/cashondelivery"} className="payment-links">
              Cash On Delivery
            </Link>
          </ul>
        <div className="netbanking">
          <form>
            <input placeholder="Card holder name"></input>
            <input placeholder="Card Number"></input>
            <input placeholder="Exp Date"></input>
          </form>
          <button>Place order</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NetBanking;
