import React from 'react';
import styled from 'styled-components';

const EmissionsBodyStyled = styled.p``;

interface EmissionsBody {
  co2: number;
}

export const EmissionsBody = ({ co2 }: EmissionsBody) => {
  return (
    <EmissionsBodyStyled>
      Estimated carbon emissions: {co2}kg (this was randomly generated)
      <p>How can I reduce my footprint?</p>
      <ul>
        <li>Fly with airlines that have carbon offset programs.</li>
        <li>Donate to carbon offset organizations yourself.</li>
        <li>Choose eco-friendly airlines.</li>
        <li>Sit in economy class.</li>
        <li>Take nonstop flights to limit layovers.</li>
        <li>Fly on mid-size passenger planes.</li>
        <li>Take daytime flights for minor environmental benefits.</li>
      </ul>
    </EmissionsBodyStyled>
  );
};
