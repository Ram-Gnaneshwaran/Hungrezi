import React from 'react'
import ProductItem from './ProductItem'


function Menu() {
  return (
    <div class="bg-gray-100 min-h-screen">
      <div class=" flex justify-center  text-5xl font-bold pt-5 pb-5 overline">
        Menu
      </div>
      
      {/* Section Starting */}
    <section class="py-10 bg-gray-100">
      {/* Grid Layout */}
      <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        <ProductItem 
        Imgsrc="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2871&q=80"
        title="Naan"
        desc="With Chicken Gravy"
        price= {200}
        />
         <ProductItem 
        Imgsrc="https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        title="Biryani"
        desc="Chicken"
        price= {150}
        />
        <ProductItem 
        Imgsrc="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        title="Burger"
        desc="Chicken"
        price= {120}
        />
        <ProductItem 
        Imgsrc="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
        title="Sandwich"
        desc="Chicken"
        price= {75}
        />
        <ProductItem 
        Imgsrc="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        title="Noodles"
        desc="Chicken"
        price= {110}
        />
        <ProductItem 
        Imgsrc="https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2480&q=80"
        title="Meals"
        desc="Veg"
        price= {100}
        />
        <ProductItem 
        Imgsrc="https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhd2FybWF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
        title="Shawarma"
        desc="Chicken"
        price= {150}
        />
        <ProductItem 
        Imgsrc="https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        title="White Pasta"
        desc="Chicken"
        price= {120}
        />



        </div>
    </section>
      
    </div>
  )
}

export default Menu