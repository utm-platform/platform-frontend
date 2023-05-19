import '../index.css';
import SideBar from '../components/SideBar';
import Header from '../components/Header';

const Teachers = () => {
    return (
        <main>
            <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-scroll'>
                <SideBar />
                <div className='bg-green_blue w-full h-fit'>
                    <Header/>
                </div>
            </div>
        </main>
    )
}

export default Teachers;