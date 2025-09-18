import React from "react";
import { ShieldIcon, ArrowIcon, NavArrowIcon } from "../icons/icons";
import ScrollAnimation from "../../animation/ScrollAnimation";

interface ExpertiseCardType {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const ExpertiseCard: React.FC<{
  card: ExpertiseCardType;
  index: number;
  isVisible: boolean;
  isActive: boolean;
  onClick: () => void;
}> = ({ card, index, isVisible, isActive, onClick }) => {
  return (
        <ScrollAnimation animation="zoom-in">
    <div
      className={`expertise-card ${isVisible ? "visible" : ""} ${
        isActive ? "active" : ""
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={onClick}
    >
      <div className="card-shield">
        <ShieldIcon />
      </div>

      <div className="card-image">
        <img
          src={card.imageSrc}
          alt={card.imageAlt}
          className="service-image"
          loading="lazy"
        />
      </div>

      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
        <div className="card-arrow">
          <ArrowIcon />
        </div>
      </div>
    </div>
        </ScrollAnimation>

  );
};

export const NavigationButton: React.FC<{
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}> = ({ direction, onClick, disabled }) => (
  <button
    className={`nav-button nav-button-${direction} ${
      disabled ? "disabled" : ""
    }`}
    onClick={onClick}
    disabled={disabled}
    aria-label={`${direction === "prev" ? "Previous" : "Next"} expertise cards`}
  >
    <NavArrowIcon direction={direction} />
  </button>
);