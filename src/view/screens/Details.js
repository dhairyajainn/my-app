import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import '../style/detail.css'
import NavBar from '../components/NavBar'
import { addToCartData } from '../data/addtocart'
import { useNavigate } from 'react-router-dom'

const Details = () => {
    const addToCartNavigate = useNavigate();
    const loc = useLocation();
    const [productDetails, setProductDetails] = useState('')
    useEffect(()=>{
        setProductDetails(loc.state)
    },[])

    const [img, setImg] = useState('');
    function imageChange(img) {
        setImg(img)
    }

    function addToCart() {
        console.log('added');
        addToCartData.push(productDetails);
        addToCartNavigate('/addtocart', {state: productDetails})
    }
  return (
    <div>
        <NavBar />
        <div className='detail'>
            <div className='small-image-container'>
                {
                    
                        productDetails&&productDetails.smallImage.map(img=>(
                            <div onClick={()=>imageChange(img)}>
                                <img src={img} style={{width:100, height: 100, marginTop: '20px' }} fluid />
                            </div>
                        ))
                    
                }
                {/* <img src={productDetails.image} alt=''/>
                <img src={productDetails.image} alt=''/>
                <img src={productDetails.image} alt=''/> */}
            </div>
            <div className='main-img'>
                <img src={img?img:productDetails.image} alt=''/>
            </div>
            <div className='desc'>
                <h1>{productDetails.name}</h1>
                <img src={require('../Assets/star_icon.png')} alt=''/>
                <img src={require('../Assets/star_icon.png')} alt=''/>
                <img src={require('../Assets/star_icon.png')} alt=''/>
                <img src={require('../Assets/star_icon.png')} alt=''/>
                <img src={require('../Assets/star_dull_icon.png')} alt=''/>
                <sapn className='review'>(122)</sapn>

                <p className='price'>
                    <del>${productDetails.old_price}</del>
                    <span>${productDetails.new_price}</span>
                </p>

                <div className='cloth-desc'>
                    <p>
                        Introducing a luxurious blend of cashmere and silk, this versatile accessory exudes elegance and comfort. With its timeless design and unmatched softness, it effortlessly elevates any ensemble.
                    </p>
                </div>
                
                <div className='size'>
                    <h3>Select Size</h3>
                    <button>S</button>
                    <button>M</button>
                    <button>X</button>
                    <button>XL</button>
                    <button>XXL</button>
                </div>
                <button className='add-to-cart' onClick={addToCart}>ADD TO CART</button>
                <p className='category'><b>Category: </b> {productDetails.gender} </p>
                <p className='category'><b>Tags: </b> Modern, Latest </p>
            </div>
        </div>
    </div>
  )
}

export default Details