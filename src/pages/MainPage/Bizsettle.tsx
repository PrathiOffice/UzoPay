import React, { useState, useEffect, useRef } from 'react';
import { images } from '../../constants/images'; 

const Bizsettle: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBizsettleImage, setShowBizsettleImage] = useState(false);
  const [showBizsettleText, setShowBizsettleText] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const carouselImages = [images.Frame1, images.Frame2, images.Frame3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (window.innerWidth >= 768) {
            setTimeout(() => setShowBizsettleImage(true), 2000);
          } else {
            setShowBizsettleText(true);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id='bizsettle'
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {showBizsettleImage && (
        <div className="hidden md:flex absolute inset-0 z-10 items-center justify-center">
          <img
            src={images.Bizsettle_img}
            alt="Bizsettle Logo"
            className="w-full h-full object-cover animate-[dramaticZoomOut_1.5s_ease-out_1]"
          />
        </div>
      )}

      {showBizsettleText && (
        <div className="md:hidden absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center px-4">
            Bizsettle
          </h1>
        </div>
      )}

      <style>
        {`
          @keyframes dramaticZoomOut {
            0% {
              transform: scale(3);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Bizsettle;
