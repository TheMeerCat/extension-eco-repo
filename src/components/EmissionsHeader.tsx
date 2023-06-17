import React from "react";
import styled from "styled-components";
import { AnimatedArrow } from "../styles/PlaneArrowAnimation.styles";


const EmissionsHeaderStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
`;

const PlaceTitle = styled.header`
`;

interface EmissionsHeader {
    from: string;
    to: string;
}

export const EmissionsHeader = ({ from, to }: EmissionsHeader) => {
    return (<EmissionsHeaderStyled>
        <PlaceTitle>{from}</PlaceTitle>
        <div>
            <AnimatedArrow />
        </div>
        <PlaceTitle>{to}</PlaceTitle>
    </EmissionsHeaderStyled>);
  };