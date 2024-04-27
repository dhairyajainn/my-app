import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import '../style/shop.css';
import { all_product } from '../data/all_product';

import { useNavigate } from 'react-router-dom';
const Shop = () => {
    
    const shop = useNavigate();
    const [allProduct, setAllproduct] = useState('');
    useEffect(()=>{
        setAllproduct(all_product)
    },[])
  return (
<>
    <div>
        <NavBar />
        <div className='card-container'>
            <div className='card-con'>
                {
                    allProduct&&allProduct.map(val=>(
                        <div onClick={()=>shop('/details', {state: val})} class="card-new-collection">
                            <img src={val.image} alt=''/>
                            <p>{val.name}</p>
                            <p>$ {val.new_price} <del>$ {val.old_price}</del> </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
        
</>

  )
}

export default Shop