import React from "react";
import Logo from '../img/UTMatamorosBIS-color.png';
import ItemList from "./ItemList";

export default function SideBar() {
    return (
        <div className="bg-blanco_txt flex flex-col w-52 shadow-2xl shadow-black">
            <div className="flex flex-col">
                <img src={Logo} className='w-fit p-2.5' />
                <hr className="bg-gris_txt h-0.5 mx-2 mb-2" />
                <ItemList txt='Dashboard' link='/dashboard'/>
                <ItemList txt='Teachers' link='#'/>
                <ItemList txt='Groups' link='#'/>
                <ItemList txt='Students' link='#'/>
            </div>
        </div>
    )
}