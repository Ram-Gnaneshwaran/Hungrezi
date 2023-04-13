import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";


function UserRegister() {
  //States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    //Navigate
    const navigate = useNavigate();

    //Axios Configuration
    const registerConfig = {
      method: "post",
      url: "http://localhost:8000/users/add",
      data: {
        username,
        password,
        role:"user"
      },
      };
      const loginConfiguration = {
        method: "post",
        url: "http://localhost:9000/users/login",
        data: {
          username,
          password,
        },
      };
    //HandleRegister
  const handleSignUp = (e) => {
    e.preventDefault();
    if(username == '' | password == '') {
      alert("Fill the empty values!")
      return
    }
    axios(registerConfig)
    .then(() => {
        axios(loginConfiguration)
        .then((result) => {
          navigate('/UserHome',{state:result.data});
          
      })
        .catch((error) => {alert("Error Logging In!");})
    })
    .catch((error) => {
      alert("User Already Exists. Please Login!")
      console.log(error);
    }
      
      )
    }

  return (
    <div>
      <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div class="w-50 flex max-w-md flex-col rounded-xl bg-white px-4 py-8 shadow-md sm:px-6 md:px-8 lg:px-10">
        <div class="self-center text-xl font-medium text-gray-800 sm:text-3xl">Join us Now</div>
        <div class="mt-4 self-center text-xl text-gray-800 sm:text-sm">Enter your credentials to get access to your account</div>

        <div class="mt-10">
          <form onSubmit={handleSignUp}>
            <div class="mb-5 flex flex-col">
              <label for="email" class="mb-1 text-lg tracking-wide text-black">Username:</label>
              <div class="relative">
                <div class="absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center text-gray-400">
                  <i class="fas fa-user text-blue-500"></i>
                </div>
                <input type="text" name="username" class="w-full rounded-2xl border border-gray-400 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none" placeholder="Enter Username" 
                value={username} onChange={(e) => setUsername(e.target.value) } />
              </div>
            </div>
            
            <div class="mb-6 flex flex-col">
              <label for="password" class="mb-1 text-lg tracking-wide text-black">Password:</label>
              <div class="relative">
                <div class="absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center text-gray-400">
                  <span>
                    <i class="fas fa-lock text-blue-500"></i>
                  </span>
                </div>
                <input id="password" type="password" name="password" class="w-full rounded-2xl border border-gray-400 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none" placeholder="Enter your password" value={password}  onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <div class="flex w-full">
              <button type="submit" class="mt-2 flex w-full items-center justify-center rounded-xl bg-mypurple py-2 text-sm text-white transition duration-150 ease-in hover:bg-black focus:outline-none sm:text-base">
                <span class="mr-2">Sign Up</span>
                <span>
                  <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-center">
        <button onClick={() => {navigate(-1)}} class="inline-flex items-center text-center text-xs font-medium text-gray-700">
          <span class="ml-2">You have an account? <a href="#" class="ml-2 text-xs font-semibold text-mypurple">Login here</a></span>
        </button>
      </div>
    </div>
    </div>
  )
}

export default UserRegister