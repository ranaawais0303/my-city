import React from "react";
import styled, { keyframes } from "styled-components";

const flash = keyframes`
  0% { opacity: 0; } 
  90% { opacity: 0; }
  92% { opacity: 0.8; }
  94% { opacity: 0.4; }
  96% { opacity: 1; }
  98% { opacity: 0.2; }
  100% { opacity: 0; }
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
  animation: ${flash} ease-out infinite;
`;

const Lightning1 = styled(Lightning)`
  animation-duration: 3s;
  animation-delay: 1s;
`;

const Lightning2 = styled(Lightning)`
  animation-duration: 3.5s;
  animation-delay: 2s;
`;

const Lightning3 = styled(Lightning)`
  animation-duration: 4s;
  animation-delay: 3s;
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
  }
`;

const Thunderstorm = () => {
  return (
    <>
      <Background />
      <Lightning1 />
      <Lightning2 />
      <Lightning3 />
    </>
  );
};

export default Thunderstorm;
