import React from 'react'
import {  HiOutlineArrowLongRight, HiOutlineTrash } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const CoctailCardTwo = ({drink , onDelete}) => {
    


  return (
    <>
        <div className="card flex flex-col ">
            <div className="w-full">
                <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full rounded-md hover:scale-95 transition-all ease-in duration-300"/>
            </div>
            <div className="w-full p-2 md:p-4 space-y-4">
                <h3 className="text-xl md:text-4xl font-bold mb-4">{drink.strDrink}</h3>
                
                <div className="flex justify-between items-center">
                <Link to={`/drink/${drink.idDrink}`}>
                    <button className="primary-btn px-6" >View <HiOutlineArrowLongRight className="ml-2 "/></button>
                </Link>
                {/* onClick={props.delete} */}
                <div onClick={() => onDelete(drink.idDrink)} className="p-2 hover:bg-slate-200 transition-all ease-in duration-150 cursor-pointer rounded-full">
                    <HiOutlineTrash className="h-5 w-5 text-slate-400 hover:text-rose-800 transition-all ease-in duration-150"/>
                </div>
                </div>
            </div>
        </div>
    
        
    </>
  )
}



export default CoctailCardTwo