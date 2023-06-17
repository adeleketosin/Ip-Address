import { useState } from 'react';
import icon from './images/icon-arrow.svg'
import './App.css';

function App() {
  const [level, setLevel] = useState("")
  const [ip, setIp] = useState("")
  const [location, setLocation] = useState('')
  const [timeZone, setTimeZone] = useState('')
  const [piAddress, setpiAddress] = useState('')

  const list = (e) => {
    // e.preventdefault()
    setLevel(e.target.value)
    console.log(e.target.value)
  }
  async function ipAddress(){
    const data = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_3jdxe64utbNIhR5iYxrbNmwChSIop&ipAddress=${level}`)
    const result = await data.json()
    console.log(result)
    setIp(result.isp)
    setLocation(result.location.region)
    setTimeZone(result.location.timezone)
    setpiAddress(result.ip)


  }
  return (
    <div className="App">
      <div className="header">
       
        <div className='iconn'>
          <input type='search' className='search' onChange={list}></input>
          <div className='ic'>
            <img src={icon} className='icon' onClick={ipAddress}/>
          </div>
        </div>
      </div>
      <h3>
        {ip}
      </h3>
      <h3>{location}</h3>
      <h3>{timeZone}</h3>
      <h3>{piAddress}</h3>
    </div>
  );
}
export default App;
