import React from 'react';
import CountUp from 'react-countup';
import styled, { keyframes } from 'styled-components';

import PlaneIcon from '../assets/images/icons/airplane_6.svg';

const flyAnimation = keyframes`
  0% {
    opacity: 0;
  }
  1% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 1;
  }
`;

const Arrow = styled.div`
  position: relative;
`;

const Plane = styled(PlaneIcon)`
  position: absolute;
  top: -12px;
  left: 0;
  width: 100%;
  height: 40px;
  background-size: cover;
  animation: ${flyAnimation} 5s forwards;
  animation-iteration-count: 1;
`;

const Co2InfoPane = styled.div`
  margin-top: 40px;
  position: relative;
  margin-right: 20px;
  white-space: nowrap;
`;

const Co2InfoPaneText = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1.25 em;
  line-height: 1.5 em;
  font-weight: 700;
`;

const AnimationWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
`;

interface AnimatedArrow {
  co2: number;
}

export const AnimatedArrow = ({ co2 }: AnimatedArrow) => {
  return (
    <AnimationWrapper>
      <Arrow>
        <Plane />
      </Arrow>
      <Co2InfoPane>
        <Co2InfoPaneText>
          CO2: <CountUp end={co2} duration={5} /> kg
        </Co2InfoPaneText>
      </Co2InfoPane>
      <Co2InfoPane>
        <span>Can you do it better?</span>
      </Co2InfoPane>
    </AnimationWrapper>
  );
};
