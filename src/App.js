import { useState } from 'react';
// import Header from './Header'
import icon from './images/icon-arrow.svg'
import './App.css';

function App() {
  const [key, setKey] = useState("")
  const goat = (e) => {
    e.preventdefault()
    setKey(e.target.value)
  }
  // const ipAddress () =>{
  //   fetch(`https://geo.ipify.org/api/v2/country?apiKey=${key}&ipAddress=8.8.8`)
  // }
  return (
    <div className="App">
      <div className="header">
        {/* https://geo.ipify.org/api/v2/country?apiKey=at_3jdxe64utbNIhR5iYxrbNmwChSIop&ipAddress=8.8.8.8 */}
        <div>
          <input type='search' className='search' onChange={goat}></input>
          <img src={icon} className='icon' />
        </div>
        {/* <Header /> */}
      </div>
    </div>
  );
}
export default App;
