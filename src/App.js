
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState({})
  const api= process.env.REACT_APP_API_KEY;
  // console.log(api);
  
  const handleChange = (e) =>{
    
    setCity(e.target.value)
    
    
  }
    
    const getWeather = () =>{
  
  
  
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
        .then(res => res.json())
        .then(data => setWeather(data))

        console.log(city);

  
    
  }
  
  return (
 <>

{
  <div className="card-container">
        <div className='search'>
        
        <label htmlFor="input">Search a city</label>
        <input type="text" placeholder='e.g London'onChange={handleChange} value={city}/>
        <button onClick={getWeather}>click</button>


        </div>
        <div className='details'>
          <span className='location'>Location: <p>{weather.name}</p></span>
          <span className='degrees'>Degrees: </span>

          <span className='wind'>Wind: </span>
        </div>



      </div>
}
 </>

  )
}

export default App;
