import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import ExpertiseSection from "./Expertise";
import Content from "./Content";
import Bizsettle from "./Bizsettle";
import SimplifyPayments from "./SimplifyPayments";
import ReasonOfPatner from "./ReasonOfPatner";
import LetsBuild from "./LetsBuild";
import PayoutService from "./PayoutService";
import Footer from "./Footer";
import FeedBack from "./FeedBack";

const Parent: React.FC = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <div className="p-0 paw-cursor min-h-fit bg-black">
        <Header />
        <div id="home" className="min-h-fit">
          <Home />
        </div>
        <div id="expertise" className="min-h-fit">
          <ExpertiseSection />
        </div>
        <div id="content" className="min-h-fit">
          <Content />
        </div>
        <div id="PayoutService" className="bg-black min-h-fit">
          <PayoutService />
        </div>
        <div id="bizsettle" className="bg-black min-h-fit">
          <Bizsettle />
        </div>
        <div id="SimplifyPayments" className="bg-black min-h-fit">
          <SimplifyPayments />
        </div>
        <div id="ReasonOfPatner" className="min-h-fit">
          <ReasonOfPatner />
        </div>
        <div id="LetsBuild" className="bg-black min-h-fit">
          <LetsBuild />
        </div>
        <div id="ClientFeedbacks" className="bg-black min-h-fit">
          <FeedBack />
        </div>
        <div id="footer" className="bg-black min-h-fit">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Parent;
