import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../style/addtocart.css'

const AddToCart = () => {
    const loc = useLocation();
    console.log(loc.state)
    const payment = useNavigate()

    const [qty, setQty] = useState(1);
    const [rate, setRate] = useState('');
    const [productDetails, setProductDetails] = useState('');

    function qtyAdd() {
      setQty(qty + 1);
    }
    function qtySub() {
      if(qty>1 )
      setQty(qty - 1);
    }
    useEffect(()=>{
      setProductDetails(loc.state)
    },[]);

    function paymentGet() {
      if(localStorage.getItem('user') !== null) {
        payment('/payment')
      } else {
        payment('/login')
      }
    }
    function deleteItem() {

    }
  return (
  <>
        <h1>Add to cart</h1>
      <div className='cart'>
          <div className='det'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </div>
        <div id='cart-in'>
          <div className='pro-img'>
            <img src={productDetails.image} width={200} height={200}/>
            <p>{productDetails.name}</p>
          </div>
          <div className='prod-detail'>
            <p>Rs. {productDetails.new_price}</p>
          </div>
          <div className='add'>
            <button onClick={qtySub}>-</button>
            <p>{qty}</p>
            <button onClick={qtyAdd}>+</button>
          </div>
            <svg onClick={deleteItem} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
              <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
            </svg>
      </div>
          <div className='last'> 
            {/* <p>{productDetails.name}</p> */}
            <span>Estimated total Rs. {productDetails.new_price * qty}</span>
            <p>Taxes, discounts and shipping calculated at checkout.</p>
            <button onClick={paymentGet}>{'Checkout'}</button>
          </div>
        </div>
    </>
  )
}

export default AddToCart