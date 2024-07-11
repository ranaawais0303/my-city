import React from "react";
import styled, { keyframes } from "styled-components";

// Define keyframes for animation
const drift = keyframes`
    from {
        left: 120%;
    }
    to {
        left: -25%;
    }
`;

// Styled components for the cloud and its elements
const CloudPane = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(#4a4a4a, #738185, #b3dae6, white);
  z-index: -4;
`;

const BigCloud = styled.div`
  box-shadow: 10px 10px 5px 20px black inset;
  position: absolute;
  opacity: ${({ opacity }) => opacity};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left};
  transform: scale(${({ scale }) => scale});
  animation: ${drift} ${({ duration }) => duration}s linear infinite
    ${({ delay }) => delay}s;
`;

const Circle = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background: white;
  border-radius: 100%;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

const Star = styled.div`
  height: 3px;
  width: 3px;
  background: white;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

const Cloud = () => {
  return (
    <CloudPane>
      <BigCloud
        id="cloud1"
        opacity={0.9}
        top={50}
        left="120%"
        scale={1.2}
        duration={25}
        delay={8}
      >
        <Circle id="circ1" size={200} />
        <Circle id="circ2" size={150} top={50} left={-40} />
        <Circle id="circ3" size={150} top={50} left={-120} />
        <Circle id="circ4" size={100} top={30} left={-60} />
        <Circle id="circ5" size={100} top={100} left={-150} />
        <Circle id="circ6" size={100} top={100} left={130} />
      </BigCloud>

      {/* Add more BigCloud components for other clouds */}

      <Star id="star1" top={20} left="20%" />
      <Star top={20} left="70%" />
      {/* Add more stars here */}

      {/* Repeat similar structure for other clouds and stars */}
    </CloudPane>
  );
};

export default Cloud;
