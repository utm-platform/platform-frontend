import '../index.css';
import EN from '../img/languages/EN.png';
import FR from '../img/languages/FR.png';
import { Route, Routes, Link } from 'react-router-dom';
const Index = () => {

    return (
        <main>
          <div class="container relative overflow-hidden rounded-lg place-content-center mx-auto my-4 bg-azul">
            <div class="container">
              <h1 class="text-5xl text-center font-extrabold dark:text-white my-2">UTMm</h1>
              <div class="rounded-lg m-4 bg-verde">
                <h6 class="text-lg text-center font-semibold dark:text-white p-2">Elige el tipo de examen a presentar</h6>
              </div>
            </div>
            <div class="container h-56 md:h-96  bg-azul">
              <div class="container mx-15 ">
                <div class="grid grid-cols-2 gap-4 place-items-center">
                  <Link to="/grammar"><img src={EN} class="py-5 h-96 rounded-full" /></Link>
                  <Link to="/play"><img src={FR} class="py-5 h-96 rounded-full" /></Link>
                </div>
              </div>  
            </div>
          </div>
        </main>
    )
}

export default Index
