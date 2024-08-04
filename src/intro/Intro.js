import "./Intro.css"
import React, { useState, useEffect } from 'react';

function Intro() {
    const [count, setCount] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

    return (<div className="intro-black">


           <div className="intro-content">
            <div className="intro-content-container">
            <p className="intro-title">Hi <span className="red-text">I'M</span></p>
            <p className="intro-title">Krishna Kumar Eswaran <span className="count-down">{count}</span></p>
            </div>
           </div>
    </div>)
}

export default Intro;