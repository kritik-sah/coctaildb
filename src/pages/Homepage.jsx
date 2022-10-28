import React from 'react'
import { useState, useEffect } from "react";
import CoctailCard from '../components/CoctailCard'
import axios from "axios";
import { FaRandom } from "react-icons/fa";
import { HiRectangleStack } from "react-icons/hi2";
import CoctailCardTwo from '../components/CoctailCardTwo';
import { History } from '../utils/SharedState'
import { useRecoilState } from 'recoil';



const Homepage = () => {
  const [RandomData, setRandomData] = useState([]);
  const [counter, setCounter] = useState(1);


  const [history, setHistory] = useRecoilState(History);

  const getData = async () => {
    let res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    let { drinks } = res.data;

    
    
    setRandomData(() => {
      return drinks
    });


  }

  const fetchNewDrink = () => {
    setCounter((prev) => prev +1)
    setHistory((prevState) => {
      if(prevState !== []){
        return [ ...RandomData, ...prevState]
      }
      return []
    })

  }

  const deleteDrinkHistory = (id) => {
    setHistory((prevState) => {
    
        const newState = prevState.filter(data => {
          return data.idDrink !== id;
        })
        return [...newState]
  
    
    })
  }


  useEffect(() => {
    getData()
  }, [counter]);


  return (
    <main>
      <section className="container my-24 mx-auto w-11/12">
      {
        RandomData.map(drink => (
          <CoctailCard key={drink.idDrink}
            drink={drink}
          />
        ))
    }
        <div className="flex">
          <button onClick={fetchNewDrink} className="primary-btn rounded-full">
            <FaRandom className="mr-2"/> Random Drink
          </button>
        </div>
      </section>

      <section className="container my-24 mx-auto w-11/12">
        <h3 className="text-xl md:text-4xl font-bold mb-2">History:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  grid-flow-row auto-rows-max gap-4">
          { history.length > 0 ?
            history.map((drink, index) => (
              <CoctailCardTwo key={index}
                drink={drink} onDelete={deleteDrinkHistory}
              />
            )):
            ""
          }
          
        </div>
        {history.length === 0 ? 
          (
          <div className="flex flex-col items-center justify-center w-full h-72 space-y-4">
              
          <h3 className="text-5xl text-rose-700 font-bold"><HiRectangleStack/></h3>
          <h3 className="text-3xl font-bold">Your Drink history here</h3>
        
          </div>
        ):
        ""}
      </section>

    </main>
  )
}

export default Homepage