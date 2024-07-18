import React from "react";
import styled, { keyframes } from "styled-components";

// Define keyframes for smoke animation
const smokeAnimation = keyframes`
  25% {
    transform: translate3d(100px, 0, 0) rotate(0.01deg);
  }
  50% {
    transform: translate3d(75px, -25px, 0) rotate(0.01deg);
  }
  75% {
    transform: translate3d(45px, 30px, 0) rotate(0.01deg);
  }
  100% {
    transform: translate3d(25px, -15px, 0) rotate(0.01deg);
  }
`;

const sunStyles = {
  position: "absolute",
  marginBottom: "40%",
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

// Smoke styled component
const Smoke = styled.div`
  position: absolute;
  left: -10%;
  right: -10%;
  transform: translate3d(0, 0, 0) rotate(0.01deg);
  width: 120%;
  height: 120%;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/smoke-min.png")
    center center no-repeat;
  background-size: cover;
  z-index: -10;
  opacity: 0.5;
  animation: ${smokeAnimation} 40s infinite alternate;
`;

const Cloud = ({ day }) => (
  <div>
    <div style={day ? sunStyles : {}} />
    <Smoke />
    <Smoke />
  </div>
);

export default Cloud;
