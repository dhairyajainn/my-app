import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Details from "../screens/Details";
import Shop from "../screens/Shop";
import Logout from "../screens/Logout";
import MensCollection from "../screens/MensCollection";
import Women from "../screens/Women";
import Kid from "../screens/Kid";
import AddToCart from "../screens/AddToCart";
import Payment from "../screens/Payment";
import LatestCollection from "../screens/LatestCollection";
import NetBanking from "../components/NetBanking";
import UPI from "../components/UPI";
import CashOnDelivery from "../components/CashOnDelivery";

function RouterNav() {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    setUserData(localStorage.getItem("user"));
  }, []);
  console.log(userData);

  const [userSignUpData, setUserSignUpData] = useState("");
  useEffect(() => {
    setUserSignUpData(localStorage.getItem("usersignup"));
  }, []);
  console.log(userSignUpData);
  return (
    <Routes>
      <Route path="/details" Component={Details} />
      <Route path="/shop" Component={Shop} />
      <Route path="/logout" Component={Logout} />
      <Route path="/mens" Component={MensCollection} />
      <Route path="/women" Component={Women} />
      <Route path="/kids" Component={Kid} />
      <Route path="/addtocart" Component={AddToCart} />
      <Route path="/payment" Component={Payment} />
      <Route path="/latestcollection" Component={LatestCollection} />
      <Route path="/payment/netbanking" Component={NetBanking} />
      <Route path="/payment/upi" Component={UPI} />
      <Route path="/payment/cashondelivery" Component={CashOnDelivery} />
      {userData !== null ? (
        <>
          <Route path="/" Component={Home} />
        </>
      ) : (
        <>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={SignUp} />
        </>
      )}
    </Routes>
  );
}

export default RouterNav;