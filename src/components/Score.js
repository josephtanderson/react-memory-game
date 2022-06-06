import React from "react";
import { StyledScore } from '../App.styled'

export default function Score(props) {
    const { score, bestScore } = props;
    return(
        <StyledScore>
            BEST: { bestScore } <br />
            POINTS: { score }

        </StyledScore>
    )
}