import React from "react";
import styled, { keyframes } from "styled-components";

// Define keyframes for animations
const eyeFocus = keyframes`
  0% {
    -webkit-filter: blur(0);
  }
  100% {
    -webkit-filter: blur(10px);
  }
`;

const focusShift = keyframes`
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(1.01)
  }
`;

// Define styled components
const Root = styled.div`
  --duration: 2s;
  --pause: 2s;
`;

const Landscape = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(1rem);
  animation: ${eyeFocus} var(--duration) ease-in infinite alternate,
    ${focusShift} var(--duration) ease-in infinite alternate;
`;

const Glass = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/54046/glass_droplets.jpeg);
  filter: blur(0);
  animation: ${eyeFocus} var(--duration) ease-in var(--pause) infinite alternate,
    ${focusShift} var(--duration) ease-in var(--pause) infinite alternate;
  opacity: 0.5;
`;

const Body = styled.div`
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const Drizzling = () => {
  return (
    <Body>
      <Root>
        <Landscape />
        <Glass />
      </Root>
    </Body>
  );
};

export default Drizzling;
