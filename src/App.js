import React from 'react';
import Weather from './Weather';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">      
        <header className="App-header">
       
          <Weather defaultCity="Miami" />
           
        </header>

      </div>
      <footer>
        This project is coded by {" "}
        <a href="https://resonant-kitsune-68394b.netlify.app" target="_blank" rel="noopener noreferrer">Eva Godfrey</a>
      {" "}and is open-sourced on {" "}
        <a href="https://github.com/eFranchesca/weather-react" target="_blank" rel="noopener noreferrer"> Github </a>
      , hosted on {" "}
      <a href="https://eva-g-react-weather-app.netlify.app" target="_blank" rel="noopener noreferrer"> Netlify </a>  
      </footer>


    </div>
  );
}

export default App;
