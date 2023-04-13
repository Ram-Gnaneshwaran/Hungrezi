import React from "react";
 
function AddRest() {
  return (
    <div class="bg-gray-100 ">
      <div class=" flex justify-center  text-3xl font-bold pt-5 pb-5 overline">
        Add Restaurant
      </div>
    <div>
        <div>
        <div >
        {/* className="md:grid md:grid-cols-3 md:gap-6" */}
          <div className="mt- md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="s5hadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                    {/* <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                      Restaurant Name
                    </label>
                     <div className="mt-2 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                          placeholder="Restaurant name"
                        />
                      </div> */}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-bond leading-6 text-gray-900">
                      Restaurant Name
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="Enter Restaurant Name"
                        defaultValue={''}
                      />
                    </div>
                  </div>


                  <div>
                    <label htmlFor="description" className="block text-sm font-bond leading-6 text-gray-900">
                      Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="Description"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  {/* <div>
                    <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                      Category
                      < size='20'></BiChevrondown>
                    </label>
                    <div className="mt-2">
                     <ul className='bg-white mt-2'>
                        <li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Sample</li><li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Beverages</li>
                        <li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Sample</li><li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Snacks</li>
                        <li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Sample</li><li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Breakfast</li>
                        <li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Sample</li><li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Indian Breads</li>
                        <li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Sample</li><li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Gravy</li>
                        <li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Sample</li><li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Starters</li>
                        <li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Sample</li><li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Main Course</li>
                        <li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Sample</li><li className='p-2 text-sm hover:bg-grey-600 hover:text-white'>Dessert</li>
                     </ul>
                    </div>
                  </div>  */}


                  
                  <div>
                    <label className="block text-sm font-bond leading-6 text-gray-900">Restaurant  Image</label>
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
                            className="relative cursor-pointer rounded-md bg-white font-bold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      
</div>
</div>    
  )
}

export default AddRest
