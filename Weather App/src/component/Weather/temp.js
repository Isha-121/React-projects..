import React from 'react'
import "./style.css";
import Weathercard from './Weathercard';

const Temp = () => {
const [searchValue,setsearchValue] = React.useState("gujarat");
const [tempInfo, settempInfo] = React.useState({});
const getweatherInfo=async()=>{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=1bf0f6d78201a974abfcd14221c667e7`;
       
        const res = await fetch(url);
        console.log(res);
        const data = await res.json();
        console.log(data);

        const {temp,humidity,pressure} = data.main;
        const {main:weathermood} = data.weather[0];
        const {name} = data;
        const{speed} = data.wind;
        const{country,sunset} = data.sys;
       // console.log(temp);
       
        const mynewWeatherInfo  = {
            temp, humidity, pressure, weathermood, name, speed, country, sunset
        };
        settempInfo(mynewWeatherInfo);
    }catch(e){
        console.log(e);
    }

};
React.useEffect(() => {
 getweatherInfo();
}, [])

    return (
        <>
        <div className="wrap">
            <div className="search">
                <input type="search" placeholder="search.." autoFocus id="search" className="searchTerm"
                        value={searchValue}
                onChange={(e)=>setsearchValue(e.target.value)}>

                </input>
                <button className="searchButton" type="button" onClick={getweatherInfo}>
                    Search
                </button>

            </div>
        </div>
        <Weathercard tempInfo={tempInfo}/>
        
            
        </>
    )
}

export default Temp; 
