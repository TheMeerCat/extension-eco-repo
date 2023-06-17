import React from 'react';
import styled, { keyframes } from 'styled-components';
import PlaneIcon from '../assets/images/icons/airplane_6.svg';

// Keyframes for animating the plane along the arrow line
const flyAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Styled components for the arrow and plane
const Arrow = styled.div`
  position: relative;
  width: 300px; /* Adjust the dimensions as per your requirement */
  height: 4px;
  background-color: #000;
`;

const Plane = styled(PlaneIcon)`
  position: absolute;
  top: -12px; /* Adjust the position as per your requirement */
  left: 0;
  width: 300px; /* Adjust the dimensions as per your requirement */
  height: 40px;
  background-size: cover;
  animation: ${flyAnimation} 5s linear infinite;
`;

// Component to render the animated arrow with a plane
export const AnimatedArrow = () => {
  return (
    <Arrow>
      <Plane />
    </Arrow>
  );
};