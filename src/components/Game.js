import { useGameContext } from '../context/useGameContext';
import { useGameMemory } from '../hooks/useGameMemory'
import Card from './Card'
import StartButton from './StartButton';
import PreviousList from './PreviousList';

const Game = ( ) => {
    const { difficulty, } = useGameContext();
    const { drawCards, onSelect, selected, cards, hideButtons } = useGameMemory();

    return (
        <>
            <Card select={ onSelect } hand={ cards } />
            {hideButtons === false && <StartButton clickHandler={drawCards} />}
            {difficulty === "easy" && <PreviousList previous={ selected.previous } />}
        </>
    );
}

export default Game;