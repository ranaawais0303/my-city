import React from "react";
import styled, { keyframes } from "styled-components";

const snowfall = keyframes`
  0% {
    transform: translate3d(var(--left-ini), 0, 0);
  }
  100% {
    transform: translate3d(var(--left-end), 110vh, 0);
  }
`;

const Snowflake = styled.div`
  --size: 1vw;
  width: var(--size);
  height: var(--size);
  background: white;
  border-radius: 50%;
  position: absolute;
  top: -5vh;
  left: ${({ left }) => left}vw;
  animation: ${snowfall} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  filter: ${({ blur }) => (blur ? "blur(1px)" : "none")};
`;

const Snowfall = () => {
  const snowflakes = Array.from({ length: 50 }).map((_, i) => {
    const size = Math.random() * 0.2 + 0.2; // between 0.2vw and 0.4vw
    const leftIni = Math.random() * 20 - 10; // between -10vw and 10vw
    const leftEnd = Math.random() * 20 - 10; // between -10vw and 10vw
    const left = Math.random() * 100; // between 0vw and 100vw
    const duration = 5 + Math.random() * 10; // between 5s and 15s
    const delay = -Math.random() * 10; // between -0s and -10s
    const blur = i % 6 === 0;

    return (
      <Snowflake
        key={i}
        style={{ "--left-ini": `${leftIni}vw`, "--left-end": `${leftEnd}vw` }}
        left={left}
        duration={duration}
        delay={delay}
        blur={blur}
      />
    );
  });

  return <div>{snowflakes}</div>;
};

export default Snowfall;
