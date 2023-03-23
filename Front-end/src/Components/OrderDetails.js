import React from 'react'


const OrderDetail = () => {
  return (
    <div>
      <h1>Orders and Status</h1>
      <div class="">
        <div class="block bg-transparent m-4 p-4 w-full overflow-x-auto">
          <table class=" text-[15px] ml-4 font-bold w-6/12">
            <thead class="text-white">
              <tr >
                <th class="p-2.5 mt-3 items-center rounded-md px-4 text-md py-3 bg-mypink py-3 ">Order ID</th>
                <th class="items-center rounded-md px-4 text-md px-3 bg-mypink py-3">Customer Name</th>
                <th class="items-center rounded-md px-4 text-md py-3 text-md py-3 bg-mypink py-3">Items</th>
                <th class="items-center rounded-md px-4 text-md py-3 text-md py-3 bg-mypink py-3">Total</th>
                <th class="items-center rounded-md px-4 text-md py-3 text-md py-3 bg-mypink py-3">Order Status</th>
              </tr>

            </thead>
            <tbody class='text-center'>
              <tr class='bg-white-300 hover:bg-pink-100 cursor-pointer duration-300'>
                <td class="text-md px-6 py-3">#10201</td>
                <td class="text-md px-6 py-3">Alex</td>
                <td class="text-md px-6 py-3"><ul><li>Sandwich</li><li>Mint lime juice</li></ul></td>
                <td class="text-md px-6 py-3">Rs.156</td>
                <td class="text-md px-6 py-3">Dummy</td>
              </tr>
              <tr class='bg-white-300 hover:bg-pink-100 cursor-pointer duration-300'>
                <td class="text-md px-6 py-3">#12038</td>
                <td class="text-md px-6 py-3">Carl</td>
                <td class="text-md px-6 py-3"><ul><li>S</li><li>Mint lime juice</li></ul></td>
                <td class="text-md px-6 py-3">Rs.245</td>
                <td class="text-md px-6 py-3">Dummy</td>
              </tr>
              <tr class='bg-white-300 hover:bg-pink-100 cursor-pointer duration-300'>
                <td class="text-md px-6 py-3">#14839</td>
                <td class="text-md px-6 py-3">Damon</td>
                <td class="text-md px-6 py-3"><ul><li>Biriyani</li><li>Pomogranate juice</li></ul></td>
                <td class="text-md px-6 py-3">Rs.348</td>
                <td class="text-md px-6 py-3">Dummy</td>
              </tr>
              <tr class='bg-white-300 hover:bg-pink-100 cursor-pointer duration-300'>
                <td class="text-md px-6 py-3">#13724</td>
                <td class="text-md px-6 py-3">Stefan</td>
                <td class="text-md px-6 py-3"><ul><li>Sandwich</li><li>Mint lime juice</li></ul></td>
                <td class="text-md px-6 py-3">Rs.225</td>
                <td class="text-md px-6 py-3">Dummy</td>
              </tr>
              <tr class='bg-white-300 hover:bg-pink-100 cursor-pointer duration-300'>
                <td class="text-md px-6 py-3">#12534</td>
                <td class="text-md px-6 py-3">Elena</td>
                <td class="text-md px-6 py-3"><ul><li>Sandwich</li><li>Mint lime juice</li></ul></td>
                <td class="text-md px-6 py-3">Dummy</td>
                <td class="text-md px-6 py-3">Dummy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default OrderDetail