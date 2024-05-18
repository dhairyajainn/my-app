import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import new_collections from "../data/new_collections";

const NewCollection = () => {
  const details = useNavigate();
  const [newCollections, setNewCollections] = useState("");
  useEffect(() => {
    setNewCollections(new_collections);
  }, []);
  return (
    <div className="newCollections">
      <h1>NEW COLLECTIONS</h1>
      <div className="newCollection-flex-card">
        {newCollections &&
          newCollections.map((val) => (
            <div
              onClick={() => details("details", { state: val })}
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
  );
};

export default NewCollection;
