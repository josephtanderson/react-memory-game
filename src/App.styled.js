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
background: radial-gradient(green, #060);
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
`
export const HeaderNav = styled.div`
    border: 2px red solid;
    width: 105vw;
    height: 3em;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const StyledScore = styled.div`
    color: black;
`

export const RulesBG = styled.div`
user-select: none;
min-width: 50vh;
min-height: 80vh;
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

export const CardContainer = styled.div`
    padding: 2em;
    width: 80vw;
    display: flex;
    justify-content: center;
`

export const CardStyle = styled.img`
    width: 20%
`

export const EasyCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(13, 5vw);
    grid-template-rows: repeat(5, 1em);
    padding: 2em;
    max-width: 100%;
`

export const EasyCardStyle = styled.img`
    align-self: top;
    height: 6vw;
    grid-column: ${props => props.grid.col};
    grid-row: ${props => props.grid.row};
    z-index: ${props => props.grid.row};
`

