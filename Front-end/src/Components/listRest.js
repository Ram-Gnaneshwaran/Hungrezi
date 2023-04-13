import React, { useState } from "react";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([
    { name: "Arasan", description: "A popular restaurant serving traditional cuisine.", image: "https://source.unsplash.com/random/400x200/?food" },
    { name: "Darling", description: "A trendy restaurant serving fusion cuisine.", image: "https://source.unsplash.com/random/400x200/?restaurant" }
  ]);

  const handleDelete = (index) => {
    const newRestaurants = [...restaurants];
    newRestaurants.splice(index, 1);
    setRestaurants(newRestaurants);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center text-3xl font-bold pt-5 pb-5 overline">
        EDIT RESTAURANTS
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">{restaurant.name}</h2>
            <img
              className="w-full h-32 object-cover rounded-md mb-2"
              src={restaurant.image}
              alt={`${restaurant.name} Restaurant`}
            />
            <p className="text-gray-700">{restaurant.description}</p>
            <button onClick={() => handleDelete(index)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
