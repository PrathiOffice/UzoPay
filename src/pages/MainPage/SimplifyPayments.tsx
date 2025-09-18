import React from "react";
import "../../styles/SimplifyPayments.css";
import { images } from "../../constants/images";

const SimplifyPayments: React.FC = () => {
  return (
    <section className="simplify-section" id="SimplifyPayments">
      <div className="simplify-content">
        <div className="badge-row">
          <span className="badge">Reliable, and Efficient</span>
          <img src={images.thunder} alt="Thunder" className="badge-icon" />
        </div>
        <h1>
          Simplify the <br />
          payments process
        </h1>
        <p>Tools crafted to simplify and enhance your payout processes.</p>
      </div>

      <div className="simplify-image-container">
        <img
          src={images.Rightimage}
          alt="Payment Illustration"
          className="simplify-image"
        />
      </div>
    </section>
  );
};

export default SimplifyPayments;
