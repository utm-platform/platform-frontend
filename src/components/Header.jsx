import React from "react";
import Avatar from '../img/default-avatar.png';
import searchIcon from '../img/search.png';
import {FaSearch as Icon_Search} from "react-icons/fa";

export default function Header() {
    return (
        <div className='flex flex-row justify-between p-2 mx-10 mt-2'>
            <div class="relative">
                {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon_Search class="text-white text-lg" />
                </div>
                <input type="search" id="search" class="block w-full p-4 pl-10 text-lg text-blanco_txt rounded-lg bg-transparent border-transparent placeholder:text-blanco_txt focus:text-blanco_txt placeholder:text-lg placeholder:font-normal focus:ring-transparent focus:text-lg focus:font-normal font-normal ring-transparent focus:ring-offset-0 focus:outline-white" placeholder="Search" required/> */}
                <div class="relative mb-6">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon_Search class="text-white"></Icon_Search>
                </div>
                <input type="text" id="input-group-1" class="bg-transparent border-none text-white text-sm rounded-lg focus:ring-white focus:border-white block w-full pl-10 p-2.5 placeholder-gray-300" placeholder="Search" />
                </div>
            </div>
            

            <div class="flex items-center">
                <img src={Avatar} className='w-14 h-14 rounded-full' />
            </div>
        </div>
    )
}