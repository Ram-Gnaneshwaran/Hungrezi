import React from 'react'


const OrderDetail = () => {
  return (
    <div class="bg-gray-100 min-h-screen">
      <div class=" flex justify-center  text-5xl font-bold pt-5 pb-5 overline">
        Orders
      </div>
        <div class="block bg-transparent mr-4 p-4 w-full ">
          <table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Name
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Order ID
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Products
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Quantity
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Status
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-start">
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Ram Gnaneshwaran
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">666938</p>
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<li class="text-gray-900 whitespace-no-wrap">
										Biryani
									</li>
                  <li class="text-gray-900 whitespace-no-wrap">
										Burger
									</li>
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										1
									</p>
                  <p class="text-gray-900 whitespace-no-wrap">
										1
									</p>
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">Active</span>
									</span>
								</td>
							</tr>
              <tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-start">
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Barani
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">789654</p>
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<li class="text-gray-900 whitespace-no-wrap">
										Sandwich
									</li>
                  
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										3
									</p>
                  
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">Active</span>
									</span>
								</td>
							</tr>
              <tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-start">
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Sree Lekha
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">123789</p>
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<li class="text-gray-900 whitespace-no-wrap">
										Naan Combo
									</li>
                  
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										1
									</p>
                  
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
									<span class="relative">Done</span>
									</span>
								</td>
							</tr>
              <tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-start">
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													Akshitha
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">867547</p>
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<li class="text-gray-900 whitespace-no-wrap">
										Veg Noodles
									</li>
                  
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										1
									</p>
                 
								</td>
								<td class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
									<span class="relative">Pending</span>
									</span>
								</td>
							</tr>
							
						</tbody>
					</table>
        </div>

    </div>

  )
}

export default OrderDetail