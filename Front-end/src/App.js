import './App.css';
import React from 'react';
// Import Screens

//Login Screens
import RestaurantLogin from './Screens/LoginScreens/RestaurantLogin';
import UserLogin from './Screens/LoginScreens/UserLogin';
import AdminLogin from './Screens/LoginScreens/AdminLogin';

//Register Screens
import UserRegister from './Screens/RegisterScreens/UserRegister';
import RestaurantRegister from './Screens/RegisterScreens/RestaurantRegister';
import AdminRegister from './Screens/RegisterScreens/AdminRegister';

//Home Screens
import Home from './Screens/HomeScreens/Home';
import UserRestaurantHome from './Screens/HomeScreens/UserRestaurantHome';
import RestaurantHome from './Screens/HomeScreens/RestaurantHome';
import AdminHome from './Screens/HomeScreens/AdminHome';
import UserHome from './Screens/HomeScreens/UserHome';

//Import React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';

//Import Landing Page
import LandingPage from './Screens/LandingPage/LandingPage';
import Reciept from './Screens/Final/Reciept';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='/Role' element={<Home></Home>}></Route>
          <Route path='/User' element={<UserLogin></UserLogin>}></Route>
          <Route path='/UserRegister' element={<UserRegister></UserRegister>}></Route>
          <Route path='/RestaurantRegister' element={<RestaurantRegister></RestaurantRegister>}></Route>
          <Route path='/AdminRegister' element={<AdminRegister></AdminRegister>}></Route>
          <Route path='/Restaurant' element={<RestaurantLogin></RestaurantLogin>}></Route>
          <Route path='/UserHome' element={<UserHome></UserHome>}></Route>
          <Route path='/UserRestaurantHome' element={<UserRestaurantHome></UserRestaurantHome>}></Route>
          <Route path='/Reciept' element={<Reciept></Reciept>}></Route>
          <Route path='/RestaurantHome' element={<RestaurantHome></RestaurantHome>}></Route>
          <Route path='/AdminHome' element={<AdminHome></AdminHome>}></Route>
          <Route path='/Admin' element={<AdminLogin></AdminLogin>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;