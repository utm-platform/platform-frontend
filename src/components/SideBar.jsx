import React from "react";
import Logo from '../img/utm_logo_color.svg';
import ItemList from "./ItemList";

export default function SideBar() {
    return (
        <div className="bg-blanco_txt fixed h-full flex flex-col drop-shadow-2xl shadow-black">
            <div className="flex flex-col px-6 pt-2">
                <img src={Logo} className='w-[200px] p-2.5' />
                <hr className="bg-gris_txt h-0.5 mx-2 mb-2" />
                <ItemList txt='Dashboard' link='/dashboard'/>
                <ItemList txt='Teachers' link='/teachers'/>
                <ItemList txt='Groups' link='#'/>
                <ItemList txt='Students' link='#'/>
            </div>
        </div>
    )
}