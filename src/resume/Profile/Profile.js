import React from 'react';
import './Profile.css';
import profileImage from './images/me.jpeg';
import Gmail from './images/gmail.svg';
import Link from './images/link.svg';
import Mobile from './images/mobile.svg';
import Location from './images/location.svg';
import English from "./images/english.svg"
import India from "./images/india.svg"
import Linkdin from "./images/linkedin.svg"
import Instagram from  "./images/instagram.svg"



const Profile = () => {
  return (
    <div className="profile">
      <img src={profileImage} alt="Profile" className="profile-pic" />
      <h1 className='profile-name'>Krishna Kumar Eswaran</h1>
      <h2 className='profile-developer gradient-text'>Android Native Developer</h2>
      <p className="quote">“Android development is not just about building apps; it's about creating experiences.”</p>

      <hr className="thin-line" />
      <div className="info-container">
        <img src={Gmail} alt="Gmail" className="social-media-icon" />
        <div className="info-text">
          <div className="info-title-text">Email</div>
          <div className="info-content-text">krishnakumar.e.11022002@gmail.com</div>
        </div>
      </div>
      <div className='info-space'> </div>
      <div className="info-container">
        <img src={Link} alt="Link" className="social-media-icon" />
        <div className="info-text">
          <div className="info-title-text cursor-pointer" onClick={()=> window.open("https://www.mrprogrammer.info","_blank")}>Website</div>
          <div className="info-content-text cursor-pointer" onClick={()=> window.open("https://www.mrprogrammer.info","_blank")}>https://mrprogrammer.info</div>
        </div>
      </div>
      <div className='info-space'> </div>
      <div className="info-container">
        <img src={Mobile} alt="Mobile" className="social-media-icon" />
        <div className="info-text">
          <div className="info-title-text">Mobile</div>
          <div className="info-content-text">(+91) 900 3088 679</div>
        </div>
      </div>
      <div className='info-space'> </div>
      <div className="info-container">
        <img src={Location} alt="Location" className="social-media-icon" />
        <div className="info-text">
          <div className="info-title-text">Address</div>
          <div className="info-content-text">Erode, India</div>
        </div>
      </div>
      <hr className="thin-line" />
      <div>
        <p className='profile-section-title'>Languages</p>
        <div className='info-space'> </div>
        <div className="lan-container">
          <img src={English} alt="English" className="lan-social-media-icon" />
          <div className="info-text">
            <div className="lan-title-text">English</div>
            <div className="lan-content-text">Professional working</div>
          </div>
        </div>
        <div className='info-space'> </div>
        <div className="lan-container">
          <img src={India} alt="India" className="lan-social-media-icon" />
          <div className="info-text">
            <div className="lan-title-text">Tamil</div>
            <div className="lan-content-text">Native</div>
          </div>
        </div>
      </div>
      <hr className="thin-line" />
      <div>
        <p className='profile-section-title'>Social</p>
        <div className='info-space'> </div>
        <div className="lan-container">
          <img src={Linkdin} alt="Linkdin" className="lan-social-media-icon" />
          <div className="info-text">
            <div className="lan-title-text  cursor-pointer" onClick={()=> window.open("https://www.linkedin.com/in/krishnakumareswaran/","_blank")}>Linkedin</div>
            <div className="lan-content-text  cursor-pointer" onClick={()=> window.open("https://www.linkedin.com/in/krishnakumareswaran/","_blank")}>krishnakumareswaran</div>
          </div>
        </div>
        <div className='info-space'> </div>
        <div className="lan-container">
          <img src={Instagram} alt="Instagram" className="lan-social-media-icon" />
          <div className="info-text">
            <div className="lan-title-text cursor-pointer" onClick={()=> window.open("https://www.instagram.com/krishnakumar_eswaran/","_blank")}>Instagram</div>
            <div className="lan-content-text cursor-pointer" onClick={()=> window.open("https://www.instagram.com/krishnakumar_eswaran/","_blank")}>krishnakumar_eswaran</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
