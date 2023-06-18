import React from 'react';
import styled from 'styled-components';

import { EmissionsMainPane } from '../components/EmissionsMainPane';

const SkyscannerUI = styled.div`
  position: relative;
  display: block;
  background-color: #fff;
  color: #161616;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(37, 32, 31, 0.3);
  border-radius: 0.75rem;
  padding: 1rem;
  margin-top: 1em;

  header {
    display: flex;
    margin-bottom: 0.5 em;
    flex-wrap: wrap;
    white-space: break-spaces;
    font-size: 1.25 em;
    line-height: 1.5 em;
    font-weight: 700;
  }

  p {
    font-size: 0.875 em;
    line-height: 1.25 em;
    font-weight: 400;
  }
`;

export const SkyscannerMainPane = ({ from, to }: EmissionsMainPane) => {
  return (
    <SkyscannerUI>
      <EmissionsMainPane from={from} to={to} />
    </SkyscannerUI>
  );
};
