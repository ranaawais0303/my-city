import styled, { keyframes } from "styled-components";

const drift = keyframes`
    from {
        left: 120%;
    }
    to {
        left: -25%;
    }
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

const Cloudy = ({ id, top, duration, delay }) => (
  <BigCloud
    id={id}
    opacity={0.9}
    top={top}
    left="120%"
    scale={1.2}
    duration={duration}
    delay={delay}
  >
    <Circle id="circ1" size={200} />
    <Circle id="circ2" size={150} top={50} left={-40} />
    <Circle id="circ3" size={150} top={50} left={-120} />
    <Circle id="circ4" size={100} top={30} left={-60} />
    <Circle id="circ5" size={100} top={100} left={-150} />
    <Circle id="circ6" size={100} top={100} left={130} />
  </BigCloud>
);

export default Cloudy;
