import React from 'react';
import styled from 'styled-components';

import { AnimatedArrow } from '../styles/PlaneArrowAnimation.styles';

const EmissionsHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const PlaceTitle = styled.header``;

interface EmissionsHeader {
  from: string;
  to: string;
  co2: number;
}

export const EmissionsHeader = ({ from, to, co2 }: EmissionsHeader) => {
  return (
    <EmissionsHeaderStyled>
      <PlaceTitle>{from}</PlaceTitle>
      <div>
        <AnimatedArrow co2={co2} />
      </div>
      <PlaceTitle>{to}</PlaceTitle>
    </EmissionsHeaderStyled>
  );
};
