import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import SearchItem from '../components/SearchItem'
import {useParams } from 'react-router-dom';


const Searchpage = () => {
  const [searchData, setSearchData] = useState([]);
  const {drink} = useParams();

  const getData = async () => {
    let res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
    let { drinks } = res.data;
    setSearchData(drinks);
  }

  useEffect(() => {
    getData();
  }, [drink]);

  return (
    <main>
      <section className="container my-24 mx-auto w-11/12">

      { searchData ? 
        searchData.map(drink => (
          <SearchItem key={drink.idDrink}
            drink={drink}
          />
        )) :
        <div className="flex flex-col items-center justify-center w-full h-72">
          <img src="/404.jpg" alt="No results found" className="max-h-60"/>
          <h3 className="text-3xl font-bold">No results found</h3>
        </div>
    }
        
      </section>

    </main>
  )
}

export default Searchpage