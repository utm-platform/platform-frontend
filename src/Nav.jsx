import logo from './img/UTMatamorosBIS-BLANCO.png';
import Avatar from './img/default-avatar.png';
import React from 'react';
import './index.css';


export default function Navbar(){
    return <nav class=" px-2 sm:px-4 py-2.5 rounded bg-azul">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex items-center">
          <img src={logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      </a>
      <div class="hidden w-full md:block md:w-auto " id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 items-center ">
          <li>
            <h1 href="#" class="block py-2 pr-4 pl-3 text-white md:p-0 dark:text-white" aria-current="page">Deyla Hernandez Mata</h1>
          </li>
          <li>
          <img src={Avatar} class="w-10 h-10 rounded-full" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
}