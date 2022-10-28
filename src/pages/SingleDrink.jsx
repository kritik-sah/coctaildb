import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import {Link, useParams } from 'react-router-dom';
import CoctailCard from '../components/CoctailCard';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import { useRecoilState } from 'recoil';
import { History } from '../utils/SharedState';

const SingleDrink = () => {
    const [drinkData, setDrinkData] = useState([]); //local state to render a single drink
    const [setHistory] = useRecoilState(History);
    const {id} = useParams(); //getting id from url

    const getData = async () => {
        let res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        let { drinks } = res.data;
        setDrinkData(drinks);
        
        // Setting History 
        if(drinkData){
          setHistory((prevState) => {
            return [...prevState, ...drinkData]
          });
        }
        
    }

    useEffect(() => {
        getData();

    }, [id]);
  return (
    <main>
      <section className="container my-24 mx-auto w-11/12">

      { drinkData ? 
        drinkData.map(drink => (
          <CoctailCard key={drink.idDrink}
            drink={drink}
          />
        )) :
        <div className="flex flex-col items-center pt-20 justify-center w-full h-72 space-y-4">
          <img src="/404.jpg" alt="No results found" className="max-h-60"/>
          <h3 className="text-3xl font-bold">No results found</h3>
          <Link to='/'>
          <button className="primary-btn" >Back to Homepage</button>
          </Link>
        </div>
    }

        <div className="flex justify-between items-center my-10">
          <Link to={`/drink/${Number(id)-1}`}>
            <button className="primary-btn px-6" >Prev <HiOutlineArrowLongLeft className="ml-2 "/></button>
          </Link>

          <Link to={`/drink/${Number(id)+1}`}>
            <button className="primary-btn px-6" >Next <HiOutlineArrowLongRight className="ml-2 "/></button>
          </Link>
        </div>
        
      </section>

    </main>
  )
}

export default SingleDrink