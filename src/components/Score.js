import React from "react";
import { StyledScore } from '../App.styled'

export default function Score(props) {
    const { score, bestScore, timer } = props;
    console.log(score);
    return(
        <StyledScore>
            BEST: { bestScore } <br />
            POINTS: { score } <br />
            {timer>0 && "TIME:" + timer + "s"}
        </StyledScore>
    )
}