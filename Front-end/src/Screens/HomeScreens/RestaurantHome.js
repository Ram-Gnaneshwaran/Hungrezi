import React, { useEffect, useState } from 'react';
import {useLocation, Link, useNavigate} from 'react-router-dom';

import SearchImg from '../../Icons/Search.svg';
import MenuImg from '../../Icons/Menu-b.svg';
import OrderImg from '../../Icons/Order-b.svg';
import LogoutImg from '../../Icons/Logout.svg';

import { Routes, Route } from 'react-router-dom';
import Cart from '../../Components/Cart';
import RestaurantMenu from '../../Components/RestaurantMenu';


function RestaurantHome() {

  const [option, setoption] = useState(1);
  //Navigate
  const navigate = useNavigate();

  const handleMenu = () => {
    setoption(1);
  }
  const handleOrder = () => {
    setoption(2);
  }

  const handleLogout = (e) => {
    navigate('/Role');
  }
  
  const content = () => {
    switch(option) {
      case 1: return <RestaurantMenu></RestaurantMenu>
      case 2: return <Cart></Cart>
      // default: return <div>Error</div>
    }
  }
  
  return (
    <div>

      <div class="ml-[300px]">
          {/* Content */}
          {
            content()
          }
      </div>
      
      {/* Side Bar */}
    <div
      class="sidebar fixed top-0 bottom-0 lg:left-0 p-6 w-[300px] overflow-y-auto text-center bg-white shadow-lg"
    >
      {/* Restaurant Logo */}
      <div class="text-black text-xl">
        <div class="p-2.5 mt-1 flex items-center">
          <h1 class="font-bold text-black text-3xl ml-3">Arasan</h1>
        </div>
        <div class="my-2 bg-gray-600 h-[1px]"></div>
      </div>

      {/* Search Bar */}
      <div
        class="mt-5 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-black text-white"
      >
        <img class="aspect-square" src={SearchImg} />
        <input
          type="text"
          placeholder="Search"
          class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>

      {/* Menu Button */}
      
      <button
        class="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-mypurple text-black hover:text-white "
        onClick={handleMenu}
      >
        <img class="aspect-square " src={MenuImg} />
        <span class="text-[15px] ml-4 font-bold">Menu</span>
      </button>
      

      {/* Cart Button */}
      
      <button
        class="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-mypurple text-black hover:text-white"
        onClick={handleOrder}
      >
        <img class="aspect-square " src={OrderImg} />
        <span class="text-[15px] ml-4 font-bold">Cart</span>
      </button>

      {/* Divider */}
      <div class="my-4 bg-gray-600 h-[1px]"></div>
      
      {/* Logout Button */}
      <button
        class="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypurple text-black hover:text-white"
        onClick={handleLogout}
      >
        <img class="aspect-square " src={LogoutImg} />
        <span class="text-[15px] ml-4 font-bold">Logout</span>
      </button>
      
    </div>
      </div>
      
  )
}

export default RestaurantHome;