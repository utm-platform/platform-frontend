import React from 'react';
import '../assets/fonts/Montserrat-Regular.ttf'

export default function box(props){
    return (
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl sm:w-72">
            <div class="text-white flex items-center absolute rounded-full px2 shadow-xl bg-pink-500 left-4 -top-6">
                <div class="bg-yellow-600 p-1.5 rounded-lg">
                    {props.icon}
                </div>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2 text-gris_oscuro">{props.txt}</p>
                <h2 className='text-7xl font-bold text-gris_oscuro'>40</h2>
            </div>
        </div>
    )
}