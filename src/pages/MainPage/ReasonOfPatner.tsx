// PartnershipSection.tsx
import React from "react";
import "../../styles/ReasonOfPatner.css";
import { images } from "../../constants/images";

const PartnershipSection: React.FC = () => {
  return (
<section className="partnership-section" id="ReasonOfPatner">
  <img src={images.Circle} alt="Left" className="partnership-bg-left" />
  <img src={images.LineRight} alt="Center" className="partnership-bg-center" />
  <img src={images.Circle} alt="Right" className="partnership-bg-right" />

  <div className="partnership-container">
    <div className="partnership-header">
      <p className="partnership-subtitle">Reasons to Partner</p>
      <h2 className="partnership-title">
        Exceptional Support for Your <br /> Success
      </h2>
    </div>
        <div className="partnership-grid">
          <div className="row">
            <div className="card small">
              <img src={images.Video} alt="Payment" className="card-top-img" />
              <h3 className="font-inter font-medium text-[18px] leading-[27px] text-white">
                Optimize customer journeys
              </h3>
              <p className="font-inter font-normal text-[12px] leading-[24px] text-gray-300">
                Streamlined transactions enhancing efficiency and customer
                satisfaction.
              </p>

              <button className="card-btn">Explore →</button>
            </div>
            <div className="card big">
              <h3 className="card-title">Faster Processing Time</h3>
              <p className="card-desc">
                Quick and efficient payment processing for a seamless user
                experience.
              </p>
              <button className="card-btn">Learn more →</button>
            <img src={images.Video4} alt="Payment" className="card-top-img" />
            </div>
          </div>
          <div className="row">
            <div className="card big">
                             <img src={images.Video5} alt="Payment" className="card-top-img" />
              <h3 className="card-title">Flexible Solutions</h3>
              <p className="card-desc">
                Customizable options to meet the unique needs of your business.
              </p>
              <button className="card-btn">Explore more →</button>
            </div>

            <div className="card small">
              <h3 className="card-title">Effortless Integration</h3>
              <p className="card-desc">
                Simple API integration with your existing systems and platforms.
              </p>
              <button className="card-btn">Learn more →</button>

            <img src={images.Video6} alt="Payment" className="card-top-img" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
