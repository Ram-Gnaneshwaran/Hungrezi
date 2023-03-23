import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem';


function RestaurantMenu() {

    const [foodItems, setFoodItems] = useState([]);

    //Axios Configuration
    const getFoodItems = {
        method: "get",
        url: "http://localhost:9000/food",
    };

    const loadData = () => {
        axios(getFoodItems)
            .then(result => setFoodItems(result.data))
            .catch(err => alert("Cannot Connect to Server | Error retrieving Data !"))
    }

    useEffect(() => {
        loadData()
    },[])

  return (
    <div class="bg-gray-100 min-h-screen">
      <div class=" flex justify-center  text-5xl font-bold pt-5 pb-5 overline">
        Menu
      </div>
      
      {/* Section Starting */}
    <section class="py-10 bg-gray-100">
      {/* Grid Layout */}
      <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {foodItems ? foodItems.map((food) => {
            return (
                <MenuItem 
                    Imgsrc={food.img}
                    title={food.name}
                    desc={food.description}
                    price= {food.price}
                    />
            )
        }) : <div>No Food Added! </div>
        }
        </div>
    </section>
      
    </div>
  )
}

export default RestaurantMenu