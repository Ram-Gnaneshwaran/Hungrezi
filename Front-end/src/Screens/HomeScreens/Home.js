import React from 'react';

//Import Link 
import { Link } from 'react-router-dom';

//Import Lottie
import Lottie from "lottie-react";
import UserAnimation from "../../Lottie/User.json";
import RestAnimation from "../../Lottie/Restaurant.json";
import AdminAnimation from "../../Lottie/Admin.json";

//Import Images

import Hungrezy from '../../Icons/Hungrezy re-P.png';

function Home() {
  return (

        
        // Grid
        <div class="grid grid-cols-3 ">

          {/* Logo */}
          <div class="absolute left-1/2 -ml-24 ...">
            <img src={Hungrezy} class="flex h-52 w-52 items-center" alt="Hungrezy" />
           </div>

          {/* User */}
          <div class="flex justify-center bg-[#80489C] pt-56 pb-56">
          <Link to="/User">
            <div class="m-10 rounded-lg bg-white p-20 text-center hover:shadow-2xl transition duration-200 ease-in-out">
              {/* <img class="mt-2 aspect-square" src={UserImg} /> */}
              <Lottie class="w-[150px] h-[150px]" animationData={UserAnimation} loop={true} />
              <div class="mt-10 text-lg font-bold">User</div>
            </div>
            </Link> 
          </div>

          {/* Restaurant */}
          <div class="flex justify-center bg-[#FF8FB1] pt-56 pb-56">
            <Link to="/Restaurant">
            <div class="m-10 rounded-lg bg-white p-20 text-center hover:shadow-2xl transition duration-200 ease-in-out">
              <Lottie class="w-[150px] h-[150px]" animationData={RestAnimation} loop={true} />
              <div class="mt-10 text-lg font-bold">Restaurant</div>
            </div>
            </Link>
          </div>

          {/* Admin */}
          <div class="flex justify-center bg-[#FCE2DB] pt-56 pb-56">
          <Link to="/Admin">
            <div class="m-10 rounded-lg bg-white p-20 text-center hover:shadow-2xl transition duration-200 ease-in-out">
              <Lottie class="w-[150px] h-[150px]" animationData={AdminAnimation} loop={true} />
              <div class="mt-10 text-lg font-bold">Admin</div>
            </div>
            </Link>
          </div>
        </div>

  )
}

export default Home