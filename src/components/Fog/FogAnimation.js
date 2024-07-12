import React from "react";
import styled, { keyframes } from "styled-components";

const FogWrapper = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  filter: blur(1px) grayscale(0.2) saturate(1.2) sepia(0.2);
`;

const fogLayerOpacity1 = keyframes`
  0% { opacity: .1; }
  22% { opacity: .5; }
  40% { opacity: .28; }
  58% { opacity: .4; }
  80% { opacity: .16; }
  100% { opacity: .1; }
`;

const fogLayerOpacity2 = keyframes`
  0% { opacity: .5; }
  25% { opacity: .2; }
  50% { opacity: .1; }
  80% { opacity: .3; }
  100% { opacity: .5; }
`;

const fogLayerOpacity3 = keyframes`
  0% { opacity: .8 }
  27% { opacity: .2; }
  52% { opacity: .6; }
  68% { opacity: .3; }
  100% { opacity: .8; }
`;

const fogLayerMove = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`;

const FogLayer = styled.div`
  height: 100%;
  position: absolute;
  width: 200%;

  &.layer1 {
    animation: ${fogLayerOpacity1} 10s linear infinite,
      ${fogLayerMove} 15s linear infinite;
  }

  &.layer2,
  &.layer3 {
    animation: ${fogLayerOpacity2} 21s linear infinite,
      ${fogLayerMove} 13s linear infinite;
  }
`;

const Image = styled.div`
  float: left;
  height: 100%;
  width: 50%;

  &.image01 {
    background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png")
      center center/cover no-repeat transparent;
  }

  &.image02 {
    background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png")
      center center/cover no-repeat transparent;
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    width: 100%;
  }
`;

const FogAnimation = () => (
  <FogWrapper>
    <FogLayer id="foglayer_01" className="layer1">
      <Image className="image01" />
      <Image className="image02" />
    </FogLayer>
    <FogLayer id="foglayer_02" className="layer2">
      <Image className="image01" />
      <Image className="image02" />
    </FogLayer>
    <FogLayer id="foglayer_03" className="layer3">
      <Image className="image01" />
      <Image className="image02" />
    </FogLayer>
  </FogWrapper>
);

export default FogAnimation;
