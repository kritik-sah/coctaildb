import React from 'react'
import { HiBeaker } from "react-icons/hi2";
import SearchBar from './SearchBar';
import Language from './Language';
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full bg-slate-50 ">
        <div className="px-4 h-20 flex justify-between items-center">
            <Link to="/">
            <div className="flex items-center ">
                <HiBeaker className="h-8 w-8 md:h-12 md:w-12 rotate-12 text-teal-700 mr-2"/>
                <h2 className="text-xl md:text-3xl text-stone-800 font-bold"> Coctail Studio</h2>
            </div>
            </Link>
            <div className="flex items-center justify-end">
                <SearchBar />
                <Language />
            </div>
        </div>
    </header>
  )
}

export default Navbar