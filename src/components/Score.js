import React from "react";
import { StyledScore } from '../App.styled'

export default function Score(props) {
    const { score } = props;
    return(
        <StyledScore>
            POINTS: { score }
        </StyledScore>
    )
}