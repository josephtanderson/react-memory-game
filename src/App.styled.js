import styled from "styled-components"

export const Background = styled.div`
position: absolute;
left: 0;
top: 0;
margin: 0;
padding: 5vh 5vw; 
height: 90vh;
width: 90vw;
overflow: hidden;
background-color:  green;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
`
export const StyledScore = styled.div`
    color: white;
`

export const RulesBG = styled.div`
user-select: none;
width: 50vh;
height: 80vh;
background-color: white;
border-radius: 2em;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
padding: 0 4em 4em;
border:  10px solid black;
`
export const DifficultyMenu = styled.h3`
margin: 0;
display: flex;
justify-content:center;
`

export const UnCheckedBox = styled.div`
user-select: none;
height: 1em;
width: 1em;
color: #ccc;
vertical-align: middle;
text-align: center;
`
export const CheckedBox = styled.div`
height: 1em;
width: 1em;
color: ${props => props.symbol === "♥" || props.symbol ===  "♦" ? 'red':'black' };
vertical-align: middle;
text-align: center;
`