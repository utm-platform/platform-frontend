import '../index.css';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import UserSelectList from '../components/UserSelectList';
import Avatar from '../img/default-avatar.png';

const Teachers = () => {
    return (
        <main>
            <div className='flex flex-row bg-neutral-100 w-screen h-full'>
                <SideBar />
                <div className='bg-green_blue w-full h-fit pl-[15em]'>
                    <Header />
                    <div className='justify-evenly flex flex-row pb-8 pt-5 flex-wrap p-5'>
                        <div class="w-full px-10 flex">
                            <h1 class="text-4xl font-bold text-blanco_txt mr-10">Teacher's info</h1>
                            <UserSelectList default_plchldr="Select a teacher..."></UserSelectList>
                        </div>
                    </div>
                    <div class="bg-white mx-[4em] mb-6 relative rounded-3xl p-7 drop-shadow-lg flex items-center">
                        <img src={Avatar} className='w-20 h-20 rounded-full' />
                        <div class="pl-8 flex-1">
                            <p class="font-bold">First name:</p><p>a</p> <br />
                            <p class="font-bold">Email:</p><p>a</p>
                        </div>
                        <div class="pl-8 flex-1">
                            <p class="font-bold">Last name:</p><p>a</p> <br />
                            <p class="font-bold">Password:</p><p>a</p>
                        </div>
                    </div>
                    <div className='bg-blanco_txt p-5 h-fit flex justify-evenly'>
                        <div class="w-max bg-white mx-[2em] relative rounded-3xl p-7 drop-shadow-lg flex-1">
                            <h2 class="font-bold">Group assigned</h2> <br />
                            
                            <table class="w-full">
                                <tr class="text-gris_oscuro">
                                    <th>Groups</th>
                                    <th>Average</th>
                                    <th>Details</th>
                                </tr>
                                <tr class="text-center">
                                    <td class="py-2">4T1M</td>
                                    <td class="py-2">B2</td>
                                    <td class="py-2">
                                        <button class="bg-green_blue px-8 rounded-3xl text-white">See</button>
                                    </td>
                                </tr>
                                <tr class="text-center">
                                    <td class="py-2">4T2M</td>
                                    <td class="py-2">B1</td>
                                    <td class="py-2">
                                        <button class="bg-green_blue px-8 rounded-3xl text-white">See</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="w-max bg-white mx-[2em] relative rounded-3xl p-7 drop-shadow-lg flex-1">
                            <h2 class="font-bold">English Level</h2> <br />

                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Teachers;