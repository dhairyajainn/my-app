import React, { useEffect, useState } from 'react'
import '../style/shop.css'
import NavBar from '../components/NavBar'
import { women } from '../data/women'
import { useNavigate } from 'react-router-dom'
const Women = () => {
    const womenDetails = useNavigate()
    const [womens, setWomen] = useState('');
    useEffect(()=>{
        setWomen(women)
    },[])
  return (
    <div>
        <NavBar />
        <div className='card-container'>
            <div className='card-con'>
                {
                    womens&&womens.map(val=>(
                        <div onClick={()=>womenDetails('/details', {state: val})} class="card-new-collection">
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

export default Women