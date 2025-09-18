import React from "react";
import { images } from "../../constants/images"; 
import "../../styles/LetsBuild.css";

const TwoImageFullRow: React.FC = () => {
  return (
    <section className="two-image-section" id="LetsBuild">
      <div className="two-image-row">
        <div className="image-container">
          <img src={images.GridLeft} alt="Left" className="two-image" />
          <div className="image-text-overlay">
            Let’s build the <br /> future of finance together
          </div>
        </div>

        <div className="image-container">
          <img src={images.GridLeft} alt="Right" className="two-image" />
          <button className="get-started-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default TwoImageFullRow;