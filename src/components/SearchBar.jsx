import React, { useState } from 'react'
import { HiMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import {
    Routes,
    Route,
    Link,
    useNavigate,
  } from 'react-router-dom';
import {toast } from 'react-toastify';

const SearchBar = () => {
    const [searchDrawer, setSearchDrawer] = useState(false);

    const toggleSearchDrawer = () =>{
        setSearchDrawer(current => !current)
    }

  return (
    <div className="flex items-center ">

        <div onClick={toggleSearchDrawer} className="p-2 hover:bg-slate-200 transition-all ease-in duration-150 cursor-pointer rounded-full">
            <HiMagnifyingGlass className="h-5 w-5"/>
        </div>

        {searchDrawer && <SearchDrawer toggle={toggleSearchDrawer}/> } 

        
    </div>
  )
}

const SearchDrawer = (props) => {
    const [search, setSerch] = useState("");
    
    const navigate = useNavigate();
    const searchDrinks= () =>{
        if(search !== ""){
            console.log(`/search/${search}`)
            navigate(`/search/${search}`)
            props.toggle()
            
        }else{
            toast.error("Enter text to search");
        }
    }

    return (
        <div className="fixed flex items-center justify-center z-50 top-0 left-0 w-screen h-screen bg-teal-700">
            <div className="absolute top-4 right-4 flex items-center justify-end m-5">
                <div onClick={props.toggle} className="flex items-center justify-center h-7 w-7 hover:bg-slate-200 transition-all ease-in duration-150 cursor-pointer rounded-full">
                    <HiOutlineXMark className="h-5 w-5"/>
                </div>
            </div>

            <div className="search-wraper p-2">
                <input type="text" value={search} onChange={(e)=>setSerch(e.target.value)} className="serch-input" placeholder="Search"/>
                <button onClick={searchDrinks} className="p-2 hover:bg-slate-200 transition-all ease-in duration-150 cursor-pointer rounded-full"><HiMagnifyingGlass className="h-8 w-8"/></button>
            </div>


        </div>
    )
}

export default SearchBar