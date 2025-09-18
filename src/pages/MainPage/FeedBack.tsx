import React from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "../../styles/FeedBack.css"; 

const ClientFeedbacks: React.FC = () => {
  return (
    <div className="client-feedbacks" id='ClientFeedbacks'>
      <div className="top-tag">
        <div className="tag-bg"></div>
        <span className="tag-text">Client Feedbacks</span>
      </div>
      <div className="main-title">Trusted by <br/>
      Business like yours</div>
      <div className="cards-container">
        {[
          {
            text: `We trust them completely with our payments. The integration was seamless, and the service is top-notch.`,
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Mickael Grants",
            role: "CEO",
          },
          {
            text: `We trust them completely with our payments. The integration was seamless, and the service is top-notch.`,
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Mickael Grants",
            role: "CEO",
          },
          {
            text: `We trust them completely with our payments. The integration was seamless, and the service is top-notch.`,
            img: "https://randomuser.me/api/portraits/men/52.jpg",
            name: "Mickael Grants",
            role: "CEO",
          },
        ].map((card, idx) => (
          <div key={idx} className={`feedback-card card-${idx}`}>
            <p className="card-text">{card.text}</p>
            <div className="card-footer">
              <div className="profile">
                <img src={card.img} alt="profile" className="profile-img" />
                <div>
                  <p className="profile-name">{card.name}</p>
                  <p className="profile-role">{card.role}</p>
                </div>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="star"
                    style={{
                      fill: "url(#starGradient)",
                      stroke: "url(#starGradient)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        <svg width="0" height="0">
          <defs>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3D47AD" />
              <stop offset="100%" stopColor="#6973DA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="arrows">
        <button className="arrow-btn">
          <ChevronLeft className="arrow-icon" strokeWidth={3} />
        </button>
        <button className="arrow-btn">
          <ChevronRight className="arrow-icon" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default ClientFeedbacks;
