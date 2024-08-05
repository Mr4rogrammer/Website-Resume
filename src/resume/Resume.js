import Profile from './Profile/Profile';
import Detail from './Detail/Detail';
import './Resume.css';
import React, { useState, useEffect } from 'react';
import Information from './Information/Information';

function Resume() {
  const [visible, setVisible] = useState(false);
  const [showDetailState, setDeatilInfoState] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    // Set a timeout to change the state after 2 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 50);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`slide-in-container ${visible ? 'slide-in' : ''}`}>
     <div className="grid-container">
      <div className="left">
        <Profile />
      </div>
      <div className="right">
        {
          showDetailState ? <Information state={setDeatilInfoState}/> : <Detail state={setDeatilInfoState}/>
        }
      </div>
    </div>
    </div>
    
  );
}

export default Resume;