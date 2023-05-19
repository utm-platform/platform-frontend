import logo from './img/UTMatamorosBIS-color.png';
import Avatar from './img/default-avatar.png';
import React from 'react';
import './index.css';
import ItemList from './components/ItemList';

export default function TopNav(){
    return <nav class=" px-2 sm:px-4 py-2.5 rounded bg-gray-100">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <ul className=' flex flex-row'>
            <li>
              <a href="#" class="">
                  <img src={logo} class="mx-2 h-6 sm:h-9" alt="UTM Logo" />
              </a>
              <hr className='h-0.5 bg-gris_txt'/>
            </li>
            <li><ItemList txt={'Dashboard'}/></li>
            <li><ItemList txt={'Teachers'}/></li>
            <li><ItemList txt={'Groups'}/></li>
            <li><ItemList txt={'Students'}/></li>
        </ul>
      <div class="hidden w-full md:block md:w-auto " id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 items-center ">
          <li>
            <h1 href="#" class="block py-2 pr-4 pl-3 text-gray-600 md:p-0 dark:text-gray-500" aria-current="page">Deyla Hernandez Mata</h1>
          </li>
          <li>
          <img src={Avatar} class="w-10 h-10 rounded-full" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
}