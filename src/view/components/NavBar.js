import React from "react";
import "../style/navbar.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const redirect = useNavigate();

  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={require("../Assets/logo.png")} alt=""></img>
        {/* <span>Ligma</span> */}
        <span>EcoLuxe</span>
      </div>

        <ul className="nav-menu">
          <li onClick={() => redirect("/")}>Home</li>
          <li onClick={() => redirect("/shop")}>Shop</li>
          <li onClick={() => redirect("/mens")}>Men</li>
          <li onClick={() => redirect("/women")}>Women</li>
          <li onClick={() => redirect("/kids")}>Kids</li>
        </ul>
        <div className="nav-login-cart">
          {user ? (
            <div>
              <button type="button" onClick={() => redirect("/logout")}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button type="button" onClick={() => redirect("/login")}>
                Login
              </button>
            </div>
          )}
          <img
            src={require("../Assets/cart_icon.png")}
            alt=""
            onClick={() => redirect("/addtocart")}
          ></img>

      </div>
    </div>
  );
};

export default NavBar;
