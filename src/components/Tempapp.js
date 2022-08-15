import React, { useEffect, useState } from 'react'
import './css/style.css'

const Tempapp = () => {
    const[city,setCity]=useState("")
    const[country,setCountry]=useState("")
    
    const[search,setSearch]=useState("Kathmandu")

    useEffect(()=>{
        const fetchApi=async()=>{
           const response=await fetch (`http://api.weatherapi.com/v1/current.json?key=d9561eccaad346e6a8861726221208&q=${search}&aqi=no`)
        const reJson=await response.json()
        console.log(reJson)
        setCity(reJson.current)
        setCountry(reJson)
        }
        fetchApi();
    },[search])

  return (
    <>
<div className='box'>
    <div className='inputData'>
        <input type='search' className='inputField' onChange={(event)=>{
            setSearch(event.target.value)

        }}/>
    </div>

    {!city?(
        <p>No data found</p>):
        (
            <div className='info'>
            <h2 className='location'>
        
        <i class='fas fa-street-view'>{search}</i>
        <p>{country.location.tz_id}</p>
            </h2>
            <h1 className='temp'>
        {city.temp_c}`celcious
            </h1>
            <p>Date:{country.location.localtime}</p>
            <h3 className='tempmin_max'>Weather:{city.condition.text}</h3>
            <img src={city.condition.icon} alt="temp"></img>
            </div>
        )
    }
   
<div className='wave -one'></div>
<div className='wave -two'></div>
<div className='wave -three'></div>
</div>


    </>
  )
}

export default Tempapp