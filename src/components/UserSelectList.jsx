import {AiFillCaretDown as DownArrow} from "react-icons/ai";
import Avatar from '../img/default-avatar.png';

export default function UserSelectList(props) {
    return (

        <div class="w-2/4 relative">
            <button type="button" class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
            <span class="flex items-center">
                <img src={Avatar} alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                <span class="ml-3 block truncate">{props.default_plchldr}</span>
            </span>
            <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <DownArrow class="mr-2"></DownArrow>
            </span>
            </button>

            <ul class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm hidden">

                {/*  */}

            </ul>
        </div>
    )
}

