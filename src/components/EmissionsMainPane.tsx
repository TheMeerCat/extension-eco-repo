import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EmissionsHeader } from "./EmissionsHeader";
import { EmissionsBody } from "./EmissionsBody";
import { getEmissions } from "../logic/client";
import { ColorRing } from  'react-loader-spinner'


const EmissionsMainPaneStyled = styled.div`
    padding: 1em;
    
`;

export interface EmissionsMainPane {
    from: string;
    to: string;
}

export const EmissionsMainPane = ({ from, to }: EmissionsMainPane) => {
    const [ co2, setCo2 ] = useState<number | undefined>();
    
    useEffect(() => {
        getEmissions(from, to)
            	.then(result => setCo2(result?.co2))
                .catch(error => console.error("Fetch failed.", error))
    }, [from, to]);

    return (<EmissionsMainPaneStyled>
        {co2 ?
            <>
                <EmissionsHeader from={from} to={to} />
                <EmissionsBody co2={co2} />
            </> :
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        }
    </EmissionsMainPaneStyled>);
  };