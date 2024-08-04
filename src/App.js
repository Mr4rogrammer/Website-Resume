import './App.css';
import Resume from '../src/resume/Resume.js';
import React, { useState, useEffect } from 'react';
import Intro from './intro/Intro.js';
function App() {
  const [resumePage, showResumePage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      showResumePage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); 
  
  return (
    <div className="App">

{resumePage ? <Resume /> : <Intro />}
    </div>
  );
}

export default App;
