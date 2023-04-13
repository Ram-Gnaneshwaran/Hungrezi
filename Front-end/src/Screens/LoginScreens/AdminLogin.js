import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Lottie from "lottie-react";
import AdminAnimation from "../../Lottie/Admin.json";

import axios from "axios";


function AdminLogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Navigate
  const navigate = useNavigate();

  //Axios Configuration
  const loginConfiguration = {
    method: "post",
    url: "http://localhost:9000/users/login",
    data: {
      username,
      password,
    },
  };

  //HandleSignIn
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username == '' | password == '') {
      alert("Fill the empty values!")
      return
    }
    axios(loginConfiguration)
    .then((result) => {
      if (result.data.role == 'admin') {
        navigate('/AdminHome',{state:result.data});
      }
      else {
        alert("You don't have permission to access this part of the site!");
      }
      
  })
    .catch((error) => {alert("Invalid Credentials!");})
  }


  return (
   <div class="relative flex min-h-screen">
  <div class="flex min-w-0 flex-auto flex-col items-center bg-white sm:flex-row sm:justify-center md:items-start md:justify-start">
    <div class="relative hidden h-full flex-auto items-center justify-center overflow-hidden bg-purple-900 bg-cover bg-no-repeat p-10 text-white sm:w-1/2 md:flex xl:w-3/5">
      <div class="bg-mypeach absolute inset-0 z-0"></div>
      <div class="z-10 w-full max-w-md">
      <Lottie class="w-[500px] h-[500px]" animationData={AdminAnimation} loop={true} />
        <div class="mb-6 font-bold leading-tight sm:text-4xl xl:text-5xl text-black">Admin.</div>
        <div class="xl:text-md font-normal text-black sm:text-sm">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</div>
      </div>
    </div>
    <div class="w-full bg-white p-8 sm:w-auto sm:rounded-lg md:flex md:h-full md:items-center md:justify-center md:rounded-none md:p-10 lg:p-14 xl:w-2/5">
      <div class="w-full max-w-md space-y-8">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-bold text-gray-900">Welcome Back!</h2>
          <p class="mt-2 text-sm text-gray-500">Please sign in to your account</p>
        </div>
        <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div class="relative">
            <label class="ml-3 text-sm font-bold tracking-wide text-gray-700">Username</label>
            <input class="w-full rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none" type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value) }  />
          </div>
          <div class="mt-8 content-center">
            <label class="ml-3 text-sm font-bold tracking-wide text-gray-700"> Password </label>
            <input class="w-full content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-indigo-500 focus:outline-none" type="password" placeholder="Enter your password" value={password}  onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <div>
            <button type="submit" class="bg-mypeach flex w-full cursor-pointer justify-center rounded-lg bg-gradient-to-r p-4 font-semibold tracking-wide text-black hover:text-white shadow-lg transition duration-500 ease-in hover:bg-black hover:bg-gradient-to-l">Sign in</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default AdminLogin