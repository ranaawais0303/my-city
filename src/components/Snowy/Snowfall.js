import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for snowfall animation
const snowfall = keyframes`
  0% {
    transform: translate3d(var(--left-ini), 0, 0);
  }
  100% {
    transform: translate3d(var(--left-end), 110vh, 0);
  }
`;

// Styled component for individual snowflakes
const Snowflake = styled.div`
  width: ${({ size }) => size}vw;
  height: ${({ size }) => size}vw;
  background: rgba(255, 250, 250, 0.9);
  border-radius: 50%;
  position: absolute;
  top: -5vh;
  left: ${({ left }) => left}vw;
  animation: ${snowfall} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  filter: ${({ blur }) => (blur ? "blur(2px)" : "none")};
  opacity: ${({ opacity }) => opacity};
`;

// Snowfall component rendering multiple snowflakes
const Snowfall = () => {
  const snowflakes = Array.from({ length: 100 }).map((_, i) => {
    const size = Math.random() * 1 + 0.5; // between 0.5vw and 1.5vw
    const leftIni = Math.random() * 20 - 10; // between -10vw and 10vw
    const leftEnd = Math.random() * 20 - 10; // between -10vw and 10vw
    const left = Math.random() * 100; // between 0vw and 100vw
    const duration = 5 + Math.random() * 10; // between 5s and 15s
    const delay = -Math.random() * 10; // between -0s and -10s
    const blur = Math.random() < 0.3; // 30% chance of being blurred
    const opacity = Math.random() * 0.5 + 0.5; // between 0.5 and 1.0

    return (
      <Snowflake
        key={i}
        style={{ "--left-ini": `${leftIni}vw`, "--left-end": `${leftEnd}vw` }}
        size={size}
        left={left}
        duration={duration}
        delay={delay}
        blur={blur}
        opacity={opacity}
      />
    );
  });

  return <div>{snowflakes}</div>;
};

export default Snowfall;
