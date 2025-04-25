import React,{useState} from "react";
import './WeatherApp.css'
//The code imports necessary modules and images for the WeatherApp component.
// It uses React and useState for managing state.
import search_icon from "./assets/search.png";
import clear_icon from "./assets/clear.png"
import cloud_icon from "./assets/cloud.png";
import drizzle_icon from "./assets/drizzle.png";
import humidity_icon from "./assets/humidity.png";
import rain_icon from "./assets/rain.png";
import snow_icon from "./assets/snow.png";
import wind_icon from "./assets/wind.png";
import Signup from "./Signup";
import Login from './Login';
import { Link } from "react-router-dom";
const WeatherApp = () => {//The functional component WeatherApp is defined.
    const [name, setname] = useState("");

    const handleChange = e => {
        const {name, value} = e.target
        setname({
          ...name,
          [name]: value
        })  
      }

    let api_key="139b15ba1f5115ff4bd8323915e102fe";
    const[wicon,setWicon]=useState(cloud_icon);
//An OpenWeatherMap API key is stored in the api_key variable.
//The state variable wicon and its updater function setWicon are created using the useState hook.
// It is initialized with the cloud_icon.
    const search= async()=>{  //The search function is defined, which is triggered when the search icon is clicked.
        //It makes an asynchronous API call to OpenWeatherMap using the provided city name
        const element=document.getElementsByClassName("cityInput")
        if(element[0].value==""){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response=await fetch(url);
        //Constructs the API URL using the city name and API key, 
        //makes a fetch request, and parses the JSON response.
        let data=await response.json();//pass data in json format
        const humidity=document.getElementsByClassName("humidity-percent")
        const wind=document.getElementsByClassName("wind-rate")
        const temp=document.getElementsByClassName("weather-temp")
        const location=document.getElementsByClassName("weather-location")
        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=data.wind.speed+" km/h";
        temp[0].innerHTML=data.main.temp+"°c";
        location[0].innerHTML=data.name;
        if(data.weather[0].icon=="01d" ||data.weather[0].icon=="01n"  ){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n" ){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" ||data.weather[0].icon=="03n" ){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n" ){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n" ){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n" ){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" ||data.weather[0].icon==="13n" ){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
    }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder="search" onChange={handleChange}/>
        <div className='search-icon' onClick={()=>{search()}}>
            <img src={search_icon} alt="" />
        </div>
        </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">Banglore</div>
      <div className="data-container">
      <div className="element">
        <img src={humidity_icon} alt="" className='icon'/>
        <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
        </div>
        </div>
        <div className="element">
        <img src={wind_icon} alt="" className='icon'/>
        <div className="data">
            <div className="wind-rate">18km/hr</div>
            <div className="text">Wind Speed</div>
        </div>
      </div>
      </div>
      <div><br/><br/><Link to='/signup'><button style={{marginLeft: '15rem'}}>Signup</button></Link></div>
    </div>
  )
}
export default WeatherApp;