import React from 'react'
import { HiHashtag, HiOutlineArrowLongRight } from "react-icons/hi2";
import Badge from './Badge';
import {
    useRecoilValue,
  } from 'recoil';
import { InstructionLang } from '../utils/SharedState'
import { Link } from 'react-router-dom';

const SearchItem = ({drink}) => {
    const Lang = useRecoilValue(InstructionLang);

  return (
    <>
        <Link to={`/drink/${drink.idDrink}`}>
        <div className="card flex flex-col md:flex-row">
            <div className="md:w-3/12">
                <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full rounded-md hover:scale-105 transition-all ease-in duration-300"/>
            </div>
            <div className="md:w-9/12 p-2 md:p-4">
                <h3 className="text-xl md:text-4xl font-bold mb-2">{drink.strDrink}</h3>
                <p className="flex items-center mb-2 text-teal-700"><HiHashtag/>{drink.strCategory} 
                    {drink.strAlcoholic && (` | ${drink.strAlcoholic} `)}
                    {drink.strGlass && (` | ${ drink.strGlass} `)}
                </p>

                <p className="mb-2">
                    <span className="font-semibold">Instruction: </span>
                    {Lang === "EN"? drink.strInstructions: ""}
                    {Lang === "ES"? drink.strInstructionsES ? drink.strInstructionsES : drink.strInstructions : ""}
                    {Lang === "DE"? drink.strInstructionsDE ? drink.strInstructionsDE : drink.strInstructions : ""}
                    {Lang === "FR"? drink.strInstructionsFR ? drink.strInstructionsFR : drink.strInstructions : ""}
                    {Lang === "IT"? drink.strInstructionsIT ? drink.strInstructionsIT : drink.strInstructions : ""}
                </p>

                <div className="mb-2">
                    <p className="font-semibold mb-2">Ingredients:</p>
                    <div className="flex items-center flex-wrap space-x-2">
                        {drink.strIngredient1 ? (<Badge>{drink.strIngredient1}: {drink.strMeasure1}</Badge>) : ""}
                        {drink.strIngredient2 ? (<Badge>{drink.strIngredient2}: {drink.strMeasure2}</Badge>) : ""}
                        {drink.strIngredient3 ? (<Badge>{drink.strIngredient3}: {drink.strMeasure3}</Badge>) : ""}
                        {drink.strIngredient4 ? (<Badge>{drink.strIngredient4}: {drink.strMeasure4}</Badge>) : ""}
                        {drink.strIngredient5 ? (<Badge>{drink.strIngredient5}: {drink.strMeasure5}</Badge>) : ""}
                        {drink.strIngredient6 ? (<Badge>{drink.strIngredient6}: {drink.strMeasure6}</Badge>) : ""}
                        {drink.strIngredient7 ? (<Badge>{drink.strIngredient7}: {drink.strMeasure7}</Badge>) : ""}
                        {drink.strIngredient8 ? (<Badge>{drink.strIngredient8}: {drink.strMeasure8}</Badge>) : ""}
                        {drink.strIngredient9 ? (<Badge>{drink.strIngredient9}: {drink.strMeasure9}</Badge>) : ""}
                        {drink.strIngredient10 ? (<Badge>{drink.strIngredient10}: {drink.strMeasure10}</Badge>) : ""}
                        {drink.strIngredient11 ? (<Badge>{drink.strIngredient11}: {drink.strMeasure11}</Badge>) : ""}
                        {drink.strIngredient12 ? (<Badge>{drink.strIngredient12}: {drink.strMeasure12}</Badge>) : ""}
                        {drink.strIngredient13 ? (<Badge>{drink.strIngredient13}: {drink.strMeasure13}</Badge>) : ""}
                        {drink.strIngredient14 ? (<Badge>{drink.strIngredient14}: {drink.strMeasure14}</Badge>) : ""}
                        {drink.strIngredient15 ? (<Badge>{drink.strIngredient15}: {drink.strMeasure15}</Badge>) : ""}
                    </div>
                </div>
                
                
                    

            </div>
        </div>
        </Link>
    
        
    </>
  )
}



export default SearchItem