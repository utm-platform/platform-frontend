import '../index.css';
import { Route, Routes, Link } from 'react-router-dom';
import ItemList from '../components/ItemList';
import Logo from '../img/UTMatamorosBIS-color.png';
import Avatar from '../img/default-avatar.png';
import searchIcon from '../img/search.png';
import IconTest from '../img/teacherIcon.png';

import SideBar from '../components/SideBar';
import WhiteBox from '../components/WhiteBox';
import Header from '../components/Header';

const Dashboard = () => {
    return (
        <main>
            <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-scroll'>
                <SideBar />
                <div className=' bg-green_blue w-full h-fit'>
                    <Header />
                    <div className='justify-evenly flex flex-row pb-16 pt-10 flex-wrap p-5'>
                        <WhiteBox txt='Teachers' />
                        <WhiteBox txt='Groups' />
                        <WhiteBox txt='Students' />
                    </div>
                    <div className='bg-blanco_txt p-5 h-fit flex flex-row justify-evenly'>
                        <div className='bg-blanco_txt w-2/5 h-32 rounded-xl shadow-xl p-2'>
                            <h3 className='text-gris_oscuro font-bold text-xl'>English Level by Carrer</h3>
                            <div>
                                Grafica
                            </div>
                        </div>
                        <div className='bg-blanco_txt w-2/6 h-32 rounded-xl shadow-xl p-2'>
                            <h3 className='text-gris_oscuro font-bold text-xl'>English Level</h3>
                            <div>
                                Grafica
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Dashboard;