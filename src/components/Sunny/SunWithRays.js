import React from "react";

const SunWithRays = () => {
  const sunStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "white",
    opacity: 0.9,
    boxShadow: "0px 0px 40px 15px white",
  };

  const rayBoxStyles = {
    position: "absolute",
    margin: "auto",
    top: "0px",
    left: 0,
    right: 0,
    bottom: 0,
    width: "70px",
    animation: "ray_anim 120s linear infinite",
  };

  const rayStyles = {
    background:
      "linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
    borderRadius: "80% 80% 0 0",
    position: "absolute",
    opacity: 0.1,
  };

  return (
    <div style={sunStyles}>
      <div style={rayBoxStyles}>
        <div
          className="ray ray1"
          style={{
            ...rayStyles,
            height: "170px",
            width: "30px",
            transform: "rotate(180deg)",
            top: "-175px",
            left: "15px",
          }}
        ></div>
        <div
          className="ray ray2"
          style={{
            ...rayStyles,
            height: "100px",
            width: "8px",
            transform: "rotate(220deg)",
            top: "-90px",
            left: "75px",
          }}
        ></div>
        <div
          className="ray ray3"
          style={{
            ...rayStyles,
            height: "170px",
            width: "50px",
            transform: "rotate(250deg)",
            top: "-80px",
            left: "100px",
          }}
        ></div>
        <div
          className="ray ray4"
          style={{
            ...rayStyles,
            height: "120px",
            width: "14px",
            transform: "rotate(305deg)",
            top: "30px",
            left: "100px",
          }}
        ></div>
        <div
          className="ray ray5"
          style={{
            ...rayStyles,
            height: "140px",
            width: "30px",
            transform: "rotate(-15deg)",
            top: "60px",
            left: "40px",
          }}
        ></div>
        <div
          className="ray ray6"
          style={{
            ...rayStyles,
            height: "90px",
            width: "50px",
            transform: "rotate(30deg)",
            top: "60px",
            left: "-40px",
          }}
        ></div>
        <div
          className="ray ray7"
          style={{
            ...rayStyles,
            height: "180px",
            width: "10px",
            transform: "rotate(70deg)",
            top: "-35px",
            left: "-40px",
          }}
        ></div>
        <div
          className="ray ray8"
          style={{
            ...rayStyles,
            height: "120px",
            width: "30px",
            transform: "rotate(100deg)",
            top: "-45px",
            left: "-90px",
          }}
        ></div>
        <div
          className="ray ray9"
          style={{
            ...rayStyles,
            height: "80px",
            width: "10px",
            transform: "rotate(120deg)",
            top: "-65px",
            left: "-60px",
          }}
        ></div>
        <div
          className="ray ray10"
          style={{
            ...rayStyles,
            height: "190px",
            width: "23px",
            transform: "rotate(150deg)",
            top: "-185px",
            left: "-60px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SunWithRays;
