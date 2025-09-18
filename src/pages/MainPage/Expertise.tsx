import React, { useState, useRef, useEffect } from "react";
import { images } from "../../constants/images";
import { expertiseData } from "../../components/Cards/ExpertiseCard";
import { ExpertiseCard, NavigationButton } from "../../components/Cards/ExpertiseComponent";
import "../../styles/Expertise.css";

const ExpertiseSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(expertiseData.length - 4, prev + 1));
  };

  const handleCardClick = (id: number) => {
    setActiveCardId(id === activeCardId ? null : id);
  };

  const getVisibleCards = () => {
    return expertiseData.slice(currentIndex, currentIndex + 4);
  };

  return (
    <section ref={sectionRef} className="expertise-section" id="expertise">
      <div className="expertise-header">
        <div className="subtitle-container">
          <img
            src={images.left_line}
            alt="Left line decoration"
            className="line-image-left"
          />
          <p className="expertise-subtitle">Our Expertise</p>
          <img
            src={images.right_line}
            alt="Right line decoration"
            className="line-image-right"
          />
        </div>
        <h2 className="expertise-title">
          Redefining Payment
          <br />
          Processing for You
        </h2>
      </div>

      <div className="expertise-container">
        {getVisibleCards().map((card, index) => (
          <ExpertiseCard
            key={card.id}
            card={card}
            index={index}
            isVisible={isVisible}
            isActive={card.id === activeCardId}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>

      <div className="navigation">
        <NavigationButton
          direction="prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        />
        <NavigationButton
          direction="next"
          onClick={handleNext}
          disabled={currentIndex >= expertiseData.length - 4}
        />
      </div>
    </section>
  );
};

export default ExpertiseSection;