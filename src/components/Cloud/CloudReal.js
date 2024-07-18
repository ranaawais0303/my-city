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

// Smoke styled component
export const Smoke = styled.div`
  position: absolute;
  left: -10%;
  right: -10%;
  transform: translate3d(0, 0, 0) rotate(9deg);
  width: 120%;
  height: 120%;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/smoke-min.png")
    center center no-repeat;
  background-size: cover;
  z-index: -10;
  opacity: 0.5;
  animation: ${smokeAnimation} 60s infinite alternate;
`;

const CloudReal = () => <Smoke />;

export default CloudReal;
