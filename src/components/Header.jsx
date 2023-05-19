import React from "react";
import Avatar from '../img/default-avatar.png';
import searchIcon from '../img/search.png';

export default function Header() {
    return (
        <div className='flex flex-row justify-between p-2'>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" src={searchIcon}></img>
                </div>
                <input type="search" id="search" class="block w-full p-4 pl-10 text-lg text-blanco_txt rounded-lg bg-transparent border-transparent placeholder:text-blanco_txt focus:text-blanco_txt placeholder:text-lg placeholder:font-normal focus:ring-transparent focus:text-lg focus:font-normal font-normal ring-transparent focus:ring-offset-0" placeholder="Search" required/>
            </div>

            <div>
                <img src={Avatar} className='w-14 h-14 rounded-full mr-14' />
            </div>
        </div>
    )
}