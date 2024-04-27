import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { kids } from '../data/kid'
import { useNavigate } from 'react-router-dom'
import '../style/shop.css'

const Kid = () => {
    const kidDetails = useNavigate();
    const [kid, setKids] = useState('');
    useEffect(()=>{
        setKids(kids);
    },[])
  return (

    <div>
        <NavBar />
        <div className='card-container'>
            <div className='card-con'>
                {
                    kid&&kid.map(val=>(
                        <div onClick={()=>kidDetails('/details', {state: val})} class="card-new-collection">
                            <img src={val.image} alt=''/>
                            <p>{val.name}</p>
                            <p>$ {val.new_price} <del>$ {val.old_price}</del> </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Kid