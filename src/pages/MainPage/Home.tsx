import React from 'react';
import '../../styles/HomePage.css';
import bannerImage from '../../assets/Images/Banner-BG.png';

const HomePage = () => {
  return (
    <div className="homepage" id='home'>
      <div className="content">
        <h1>New Era of Finance Solutions</h1>
        <p className="subtitle">Fast Funds, Flexible Choices: Quick Settlement & Multiple Payment Methods</p>
        <button className="explore-button">Explore more</button>
        <p className="footer-text">Empowering Your Financial Future, Today and Tomorrow • One-Stop Solution</p>
      </div>
    </div>
  );
};

export default HomePage;