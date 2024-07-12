import React from "react";
import styled, { keyframes } from "styled-components";

const flash = keyframes`
  from { opacity: 0; }
  92% { opacity: 0; }
  93% { opacity: 0.6; }
  94% { opacity: 0.2; }
  96% { opacity: 1; }
  to { opacity: 0; }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1431352832634-845fad190fbd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ec80c41e488dc2b99ed543df2f3f0919");
  background-position: center center;
  background-origin: content-box;
  background-size: cover;
  background-attachment: fixed;
  z-index: -2;
`;

const Lightning = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1431352832634-845fad190fbd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ec80c41e488dc2b99ed543df2f3f0919");
  background-position: center center;
  background-origin: content-box;
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(3);
  z-index: -1;
  animation: ${flash} ease-out 7s infinite;
  animation-delay: 2s;
`;

const Logo = styled.div`
  z-index: 1000;
  width: 100%;
  font-size: 6rem;
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 900;

  span {
    font-weight: 100;
  }

  @media screen and (max-width: 630px) {
    font-size: 3rem;
    margin-left: -9rem;
    margin-top: -1rem;
  }
`;

const StormCloud = () => {
  return (
    <>
      <Background />
      <Lightning className="flashit" />
    </>
  );
};

export default StormCloud;
