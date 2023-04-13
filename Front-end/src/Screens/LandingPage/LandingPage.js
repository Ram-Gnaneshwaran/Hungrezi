import React from 'react';
import { Link } from 'react-router-dom';
import Hungrezy from '../../Icons/Hungrezy re-P.png';
import Disp1 from '../../Icons/Group 6.png';
function LandingPage(){
    return(
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-mypurple py-6 sm:py-12">
  <div class="flex bg-mypurple px-20 pt-10 pb-24  sm:mx-20 sm:rounded-lg sm:px-1">
    <div class=" sm:mx-20  ">
      <img src={Hungrezy} class="flex h-52 w-52 items-center" alt="Hungrezy" />
      <section class="text-rose-200 body-font">
  <div class="container mx-auto flex px-0 py-2 md:flex-row flex-col items-center">
    <div class="space-y-6 py-8 text-base leading-7 text-white">
             <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">No need to wait. Just Order & pick your food</h1>
      <ul class="space-y-4">
                <li class="flex items-center">
                  <svg class="ml-8 h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    Choose your
                    <code class="text-sm font-bold ml-1">Restaurant</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="ml-8 h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    Order your food &
                    <code class="text-sm font-bold ml-1">Pay online</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="ml-8 h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">Show the bill & take your food !</p>
                </li>
              </ul>
              <p class="mt-6 text-lg font-bold leading-8 text-rose-200">The Best Foods & Restaurants Under One Roof.</p>
      <Link to="/Role">
      <div class="flex pt-6 justify-center">
        <button class="inline-flex text-purple-800 bg-rose-200 border-0 py-2 px-6 focus:outline-none hover:bg-rose-300 rounded text-lg">Go To App<span class="pl-4"aria-hidden="true">⫸</span></button>
      </div>
      </Link>
    </div>
    <div class="lg:max-w-lg lg:w-full">
      <img class="object-cover object-center rounded" alt="hero" src={Disp1}/>
    </div>
  </div>
</section>
    </div>
  </div>
      </div>
    
    )
}
export default LandingPage