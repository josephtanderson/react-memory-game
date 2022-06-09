import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../context/useGameContext';
import { useGameMemory } from '../hooks/useGameMemory'

import { Background } from '../App.styled';
import Loadscreen from "./Loadscreen";
import Score from "./Score";
import Card from './Card'
import StartButton from './StartButton';
import PreviousList from './PreviousList'

function Game() {
    const { difficulty, best, updateBest } = useGameContext();
    const { drawCards, onSelect, loading, selected, timer, cards, hideButtons } = useGameMemory();


    let navigate = useNavigate();

    // drawCards();


    if (loading) 
        {return (
            <Background>
                <Loadscreen />
            </Background>
        )}

    return (
        <Background>
            <Score score={ selected.previous.length } bestScore={ best } timer={timer.time} />
            <Card select={ onSelect } hand={ cards } />
            {difficulty === "easy" && <PreviousList previous={ selected.previous } style={{gridColumn: '1',gridRow: '1'}} />}
            {hideButtons === false && <StartButton clickHandler={drawCards} />}
        </Background>
    );
}

export default Game;