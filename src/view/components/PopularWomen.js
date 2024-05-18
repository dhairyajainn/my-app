import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import data_product from "../data/data";

const PopularWomen = () => {
  const details = useNavigate();

  const [popularWomen, setPopularWomen] = useState("");
  useEffect(() => setPopularWomen(data_product), []);
  return (
    <div className="popularWomens">
      <h1>POPULAR IN WOMEN</h1>
      <div className="card-flex">
        {popularWomen &&
          popularWomen.map((val) => (
            <div className="card-flex">
              <div
                onClick={() => details("/details", { state: val })}
                class="card"
              >
                <img src={val.image} alt="" />
                <p>{val.name}</p>
                <p>
                  $ {val.new_price} <del>$ {val.old_price}</del>{" "}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularWomen;
