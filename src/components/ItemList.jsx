import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../assets/fonts/Montserrat-Regular.ttf'

export default function ItemList(props){
    return <Link to={props.link} class='text-gris_txt text-lg font-medium px-2.5 py-1 hover:text-yellow-500 w-fit'>{props.txt}</Link>
}