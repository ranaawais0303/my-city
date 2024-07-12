import React from "react";
import styled from "styled-components";
import Cloudy from "./Cloudy";

// Define keyframes for animation

// Styled components for the cloud and its elements
// const CloudPane = styled.div`
//   width: 100%;
//   height: 400px;
//   background: linear-gradient(#4a4a4a, #738185, #b3dae6, white);
//   z-index: -4;
// `;

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
    <>
      <Cloudy id="cloud1" top={50} duration={25} delay={10} />
      <Cloudy id="cloud2" top={100} duration={50} delay={10} />
      <Cloudy id="cloud3" top={150} duration={75} delay={10} />
      {/* Add more BigCloud components for other clouds */}
      <Star id="star1" top={20} left="20%" />
      <Star top={20} left="70%" /> <Star top={20} left="70%" />{" "}
      {/* Add more stars here */}
      {/* Repeat similar structure for other clouds and stars */}
    </>
  );
};

export default Cloud;
