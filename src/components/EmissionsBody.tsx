import React from "react";
import styled from "styled-components";


const EmissionsBodyStyled = styled.p`
    
`;

interface EmissionsBody {
    co2: number;
}

export const EmissionsBody = ({ co2 }: EmissionsBody) => {
    return (<EmissionsBodyStyled>
        Carbon emissions: 10kg
        <br/>
        Wanna be better?
    </EmissionsBodyStyled>);
  };