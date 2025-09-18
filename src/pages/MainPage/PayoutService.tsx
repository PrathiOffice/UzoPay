import React from "react";
import { images } from "../../constants/images";
import "../../styles/PayoutService.css";

const HexagonSection = () => {
  const getImageSize = () => {
    return "clamp(250px, 35vw, 500px)";
  };

  return (
    <section
      id="PayoutService"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url("${images.Blur1}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...({ "--image-size": getImageSize() } as React.CSSProperties),
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="block lg:hidden space-y-10 sm:space-y-14">
          <div className="text-center sm:text-left space-y-6 sm:space-y-8">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-blue-900/40 text-blue-300 text-xs sm:text-sm">
              Payout Service Centric
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-white px-2 streamlined-title">
              Streamlined for Payout Ease and Efficiency
            </h2>
            <div className="space-y-5 sm:space-y-6 text-gray-300 text-xs sm:text-sm px-2 mt-8">
              <div>
                <h3 className="font-medium text-white text-sm sm:text-base comprehensive-title">
                  Comprehensive Documentation
                </h3>
                <p className="mt-2">
                  Access clear, detailed documentation that simplifies
                  integration and accelerates your payout setup.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-500/70 text-sm sm:text-base">
                  Quick Start SDKs
                </h3>
                <p className="text-gray-500/70 mt-2">
                  Leverage our ready-to-use SDKs for various programming
                  languages, enabling quick and smooth payout implementation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-500/70 text-sm sm:text-base">
                  Sandbox Environment
                </h3>
                <p className="text-gray-500/70 mt-2">
                  Test and refine your payout integration in a secure sandbox
                  environment before going live, ensuring a seamless launch.
                </p>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start px-2 mt-6">
              <button className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition text-white font-medium shadow-lg shadow-indigo-500/30 text-sm sm:text-base">
                Get Started →
              </button>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <img
              src={images.Hexagons}
              alt="Single Image"
              className="w-[var(--image-size)] h-[var(--image-size)] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-20">
          <div className="relative flex flex-col justify-center space-y-8">
            <div className="absolute top-1/2 transform -translate-y-1/2 z-10">
              <img
                src={images.swordImage}
                alt="Sword"
                className="h-32 xl:h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="relative z-20 ml-12 xl:ml-16">
              <span className="px-4 py-2 rounded-full bg-blue-900/40 text-blue-300 text-sm w-fit">
                Payout Service Centric
              </span>
              <h2 className="text-3xl xl:text-4xl font-medium leading-tight text-white mt-6 streamlined-title">
                Streamlined for Payout Ease and Efficiency
              </h2>
              <div className="space-y-6 text-gray-300 text-sm mt-8">
                <div>
                  <h3 className="font-medium text-white comprehensive-title">
                    Comprehensive Documentation
                  </h3>
                  <p className="mt-3">
                    Access clear, detailed documentation that simplifies
                    integration and accelerates your payout setup.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-500/70">
                    Quick Start SDKs
                  </h3>
                  <p className="text-gray-500/70 mt-3">
                    Leverage our ready-to-use SDKs for various programming
                    languages, enabling quick and smooth payout implementation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-500/70">
                    Sandbox Environment
                  </h3>
                  <p className="text-gray-500/70 mt-3">
                    Test and refine your payout integration in a secure sandbox
                    environment before going live, ensuring a seamless launch.
                  </p>
                </div>
              </div>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition text-white font-medium w-fit shadow-lg shadow-indigo-500/30 mt-8">
                Get Started →
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={images.Hexagons}
              alt="Single Image"
              className="w-[var(--image-size)] h-[var(--image-size)] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HexagonSection;
