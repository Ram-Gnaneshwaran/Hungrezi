import React from 'react'

function CartItem(props) {
  return (
    <div class="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        {/* Product image */}
    <img src={props.Imgsrc} alt="product-image" class="w-full rounded-lg sm:w-40" />
    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
      <div class="mt-5 sm:mt-0">
        {/* Product Title */}
        <h2 class="text-lg font-bold text-gray-900">{props.title}</h2>
        <p class="mt-1 text-xs text-gray-700">{props.desc}</p>
      </div>
      <div class="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
        <div class="flex items-center border-gray-100">
          <span class="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
          <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={props.quantity} min="1" />
          <span class="cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
        </div>
        <div class="flex items-center space-x-4">
            {/* Product Price */}
          <p class="text-sm">₹{props.price}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem