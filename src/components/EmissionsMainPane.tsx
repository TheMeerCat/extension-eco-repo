import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import styled from 'styled-components';

import EcoMio from '../assets/images/icons/ecomio.svg';
import { getEmissions } from '../logic/client';
import { EmissionsBody } from './EmissionsBody';
import { EmissionsHeader } from './EmissionsHeader';

const EmissionsMainPaneStyled = styled.div`
  padding: 1em;
  position: relative;
`;

const EcoMioLogo = styled(EcoMio)`
  padding: 1em;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export interface EmissionsMainPane {
  from: string;
  to: string;
}

export const EmissionsMainPane = ({ from, to }: EmissionsMainPane) => {
  const [co2, setCo2] = useState<number | undefined>();

  useEffect(() => {
    getEmissions(from, to)
      .then((result) => setCo2(result?.co2))
      .catch((error) => console.error('Fetch failed.', error));
  }, [from, to]);

  return (
    <EmissionsMainPaneStyled>
      {co2 ? (
        <>
          <EmissionsHeader co2={co2} from={from} to={to} />
          <EmissionsBody co2={co2} />
          <EcoMioLogo />
        </>
      ) : (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
    </EmissionsMainPaneStyled>
  );
};
