import React, { useState } from 'react'
import axios from "axios";

function AddItem () {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setdescription] = useState('');
  const [img, setImg] = useState('');
  const [category, setcategory] = useState('starters');
  const [status, setStatus] = useState(false);
  const [veg, setVeg] = useState(false);

  const [foodAdd, setFoodAdd] = useState(false);

  //Axios Configuration
  const addData = {

    method: "post",
    url: "http://localhost:9000/food/add",
    data: {
      restId:"1",
      name,
      price,
      description,
      img,
      category,
      status,
      veg
    },
  };

  const handleSave = (e) => {
    e.preventDefault();
    if(name === '' | price === '' |  description === ''| img === '') {
      alert("Fill the empty values!")
      return
    }
    axios(addData)
    .then(() => {
        setFoodAdd(true);
    })
    .catch((error) => {alert("Error adding food !");})
    }

  return (
    <div className="bg-gray-100">
      {/* Title */}
      <div class=" flex justify-center  text-5xl font-bold pt-5 pb-5 overline">
        Add Item
      </div>

      {/* Form */}
      <div className="mx-40 mt-6  md:col-span-2 md:mt-0 ">
        <form onSubmit={handleSave}>
            <div className="shadow sm:overflow-hidden  sm:rounded-md">
                  <div className=" space-y-6 bg-white  sm:p-6 ">

                      {/* Food Name */}
                      <div className="col-span-3 sm:col-span-2">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Food Name
                        </label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="name"
                            className="mt-1 block w-full p-4 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:py-1.5 sm:text-sm sm:leading-6"
                            placeholder="Food Name"
                            value={name} onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-3 sm:col-span-2">
                        <label  className="block text-sm font-medium leading-6 text-gray-900">
                          Price
                        </label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                          <input
                            type="number"
                            name="price"
                            className="mt-1 block w-full p-4 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:py-1.5 sm:text-sm sm:leading-6"
                            placeholder="Price"
                            value={price} onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="description"
                          rows={3}
                          className="mt-1 block w-full p-4 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:py-1.5 sm:text-sm sm:leading-6"
                          placeholder="Description"
                          value={description} onChange={(e) => setdescription(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Image */}
                    {/* <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">Food Image</label>
                      <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div> */}
                      {/* Image Name */}
                      <div className="col-span-3 sm:col-span-2">
                        <label  className="block text-sm font-medium leading-6 text-gray-900">
                          Image 
                        </label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="img"
                            className="mt-1 block w-full p-4 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:py-1.5 sm:text-sm sm:leading-6"
                            placeholder="Image Link"
                            value={img} onChange={(e) => setImg(e.target.value)}
                          />
                        </div>
                      </div>

                    {/* Category Name */}
                    <div>
                      <span class="ml-3 text-sm font-medium text-black">Category</span>
                          <label for="Category" class="sr-only">Category</label>
                          <select 
                          class="block py-2.5 px-0 w-full text-sm text-black- bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                          value={category} onChange={(e) => setcategory(e.target.value)}
                          >
                              <option selected value="startes">Starters</option>
                              <option value="maincourse">Maincourse</option>
                              <option value="beverage">Beverages</option>
                          </select>
                    </div>
                    
                    {/* Avaialibility Button */}
                        <div className="relative flex flex-col items-center justify-center ">
                        <div className="flex">
                            <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={status}
                                    readOnly
                                />
                                <div
                                    onClick={() => {
                                        setStatus(!status);
                                    }}
                                    className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                ></div>
                                <span className="ml-2 text-sm font-medium text-gray-900">
                                    Availability
                                </span>
                            </label>
                        </div>
                    </div>
                      

                    {/* Vegetarian Button */}
                    <div className="relative flex flex-col items-center justify-center ">
                        <div className="flex">
                            <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={veg}
                                    readOnly
                                />
                                <div
                                    onClick={() => {
                                        setVeg(!veg);
                                    }}
                                    className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                ></div>
                                <span className="ml-2 text-sm font-medium text-gray-900">
                                    Vegetarian
                                </span>
                            </label>
                        </div>
                    </div>

                  </div>
                  <div className="bg-gray-50 px-4 py-3 grid grid-cols-2  sm:px-6">
                    { foodAdd ? <div className='bg-green-500 w-4/5 text-white rounded-md font-semibold py-2'>Food Added!</div> : <div></div>  }
                    <button
                      type="submit"
                      className="flex col-start-2 w-4/5 justify-center rounded-md bg-mypink py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-mypink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Save
                    </button>
                  </div>
            </div>
          </form>
      </div>

</div>    
  )
}

export default AddItem