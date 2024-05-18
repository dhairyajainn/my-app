import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { men } from "../data/Mens";
import "../style/shop.css";
import { useNavigate } from "react-router-dom";

const MensCollection = () => {
  const mensDetails = useNavigate();
  const [mens, setMens] = useState("");
  useEffect(() => {
    setMens(men);
  }, []);
  return (
    <div>
      <NavBar />
      <div className="card-container">
        <div className="card-con">
          {mens &&
            mens.map((val) => (
              <div
                onClick={() => mensDetails("/details", { state: val })}
                class="card-new-collection"
              >
                <img src={val.image} alt="" />
                <p>{val.name}</p>
                <p>
                  $ {val.new_price} <del>$ {val.old_price}</del>{" "}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MensCollection;
