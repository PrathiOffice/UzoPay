import React from "react";
import "../../styles/Content.css";

interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  return (
    <div className="content-section" id="content">
      <p className="content-text">
We focus on your finances, you focus on what matters most. Your transfers just got global.       </p>
    </div>
  );
};

export default Content;