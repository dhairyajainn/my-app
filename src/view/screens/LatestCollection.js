import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import { latestCollection } from "../data/latestCollection";
import { useNavigate } from "react-router-dom";

const LatestCollection = () => {
  const latestCollectionDetail = useNavigate();
  const [latest, setLatest] = useState('')
  useEffect(()=>{
    setLatest(latestCollection)
  },[])
  return (
    <div>
      <NavBar />
      <div className="card-container">
        <div className="card-con">
          {latest &&
            latest.map((val) => (
              <div
                onClick={() => latestCollectionDetail("/details", { state: val })}
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

export default LatestCollection;
