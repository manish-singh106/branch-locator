import React, {useState} from 'react';
import CityContainer from './CityContainer';

export default function State({state, showCity, setShowCity}) {
  const [city, setCity] = useState("City");
  
  const handleClick = ()=>{
    setShowCity()
  }
  console.log("showCity->",showCity)
  return (
    <div className='m-2 p-2 border-b-2 border-b-gray mt-10'>
      <p className='text-teal-700 font-bold text-lg'>{state}</p>
      <div className='flex justify-between' onClick={()=>handleClick()}>
        <span>{city}</span> 
        <span><img className='h-4' alt = "acc" src = "https://www.svgrepo.com/show/409025/angle-down.svg"/></span>
      </div>
      {showCity && < CityContainer state = {state} city = {city}/>}
    </div>
  )
}
