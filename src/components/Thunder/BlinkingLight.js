import React from "react";
import "./BlinkingLight.css"; // Import your CSS file for styling

const BlinkingLight = () => {
  return (
    <div className="flashlight-container">
      <div className="background-image"></div>
      {/* Content inside the flashlight */}
      <h1>Flashlight Example</h1>
      <p>This is the content inside the flashlight effect.</p>
    </div>
  );
};

export default BlinkingLight;
