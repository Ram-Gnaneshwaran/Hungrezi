import React from 'react'

import EditImg from '../Icons/Edit.svg'

function MenuItem(props) {
  return (
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
          <a href="#">
            {/* Product Image */}
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img class="h-[150px] w-full object-cover"src={props.Imgsrc} alt="Hotel Photo" />
            </div>

            <div class="mt-1 p-2">
                {/* Product Title */}
              <h2 class="text-slate-700 font-bold">{props.title}</h2>
                {/* Product Desc */}
              <p class="mt-1 text-sm text-slate-400">{props.desc}</p>

              <div class="mt-3 flex items-end justify-between">
                {/* Product Price */}
                  <p class="text-lg font-bold text-black">₹{props.price}</p>

                {/* Add to Cart Button */}
                    <div class="flex items-center space-x-1.5 rounded-lg bg-black px-4 py-1.5 text-white duration-100 hover:bg-gray-800">
                        <img src={EditImg} />
                        <button class="text-sm">Edit</button>
                </div>
              </div>
            </div>
          </a>
        </article>
  )
}

export default MenuItem