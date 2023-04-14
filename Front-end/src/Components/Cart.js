import React, { useEffect, useState } from 'react'
import {useLocation, Link, useNavigate} from 'react-router-dom';
import CartItem from './CartItem'
import axios from 'axios';

function Cart(props) {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    //Axios Configuration
    const getCart = {
      method: "post",
      url: "http://localhost:9000/cart/",
      data: {
        user: props.user,
      },
    };

    var Total = 0;

    const handleCheckOut = (e) => {
      navigate('/Reciept', {state: Total});
      console.log("Checkout");
    }


    //Function to load data from backend

    const loadData = () => {
      axios(getCart)
          .then(result => {
            setCartItems(result.data)
          })
          .catch(err => console.log(err))
  }

  useEffect(() => {
    loadData()
},[])

  return (
    <div>
      <div class=" flex justify-center text-5xl font-bold m-5">
        Cart
      </div>
      <div class="h-screen bg-gray-100 pt-20">
    <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">


      {
      cartItems.cartItems ? cartItems.cartItems.map((products) => {

        Total += products.price * products.quantity
        // setTotal(newTotal);

            return (
                <CartItem 
                    product={products}
                    quantity={products.quantity}
                    price= {products.price}
                    />
            )

            
        }) : <div>Nothing in Cart! </div>

        
        
        }
      </div>
      {/* Sub Total */}
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">₹{Total}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Extra Charges</p>
          <p class="text-gray-700">₹0.00</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">₹{Total}</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button onClick={() => { alert("Order Placed!")}}class="mt-6 w-full rounded-md bg-mypurple py-1.5 font-medium text-blue-50 hover:bg-myindigo" >Place Order</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Cart