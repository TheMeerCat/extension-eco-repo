import React from 'react';
import styled from 'styled-components';

import { EmissionsMainPane } from '../components/EmissionsMainPane';

const KayakUI = styled.div`
  position: relative;
  display: block;
  background-color: #fff;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(37, 32, 31, 0.3);
  border-radius: 0.75rem;
  padding: 1rem;
  margin-top: 1em;

  header {
    display: flex;
    margin-bottom: 30px;
    flex-wrap: wrap;
    white-space: break-spaces;
    font-size: 1.25 em;
    line-height: 1.5 em;
    font-weight: 700;
    color: #e8381b;
  }

  p {
    font-size: 0.875 em;
    line-height: 1.25 em;
    font-weight: 400;
  }

  path {
    fill: #ff690f;
    -webkit-filter: drop-shadow( 1px 1px 1.5px rgba(0, 0, 0, .5));
    filter: drop-shadow( 1px 1px 1.5px rgba(0, 0, 0, .5));
  }
`;

export const KayakMainPane = ({ from, to }: EmissionsMainPane) => {
  return (
    <KayakUI>
      <EmissionsMainPane from={from} to={to} />
    </KayakUI>
  );
};
