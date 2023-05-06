
import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState({})
  const api= process.env.REACT_APP_API_KEY;
  // console.log(api);
 
    
    
  
  const handleChange = (e) =>{

    setCity(e.target.value)
    
    
  }
    
    const getWeather = (e) =>{
      e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric `)
        .then(res => res.json())
        .then(response => {setData(response); setCity("")})

        // console.log(city);

  
    
  }
  
  return (
 



  <div className='app'>
    <h1>Weather app</h1>
  <div className="card-container">
        <div className='search'>
        
      <form onSubmit={getWeather}>
        <input type="text" placeholder="Enter Location"onChange={handleChange} value={city}/>
        {/* <label className='enter-location'>Enter Location</label> */}
        <button>Search</button>
        </form>

        </div>
        <div className='details'>
          <span className='location'>{data.name} </span>
          {data.main ?  <span className='degrees'>Degrees: {data.main.temp}°C </span> : <span className='degrees'>Degrees: </span>}
          {data.wind ? <span className='wind'>Wind: {data.wind.speed} m/s</span> : <span className='wind'>Wind: </span>}
          
        </div>



      </div>
      </div>



  )
}

export default App;
