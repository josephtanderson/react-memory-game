import { Background, RulesBG } from '../App.styled';
import { useGameMemory } from '../hooks/useGameMemory';
import DifficultyOption from './DifficultyOption';
import StartButton from './StartButton';
import PreviousList from './PreviousList';
import { useGameContext } from '../context/useGameContext';

const GameOver = () => {
    const { lastCards, score } = useGameContext();
    const { best, handleStart, checked, handleDifficulty } = useGameMemory();

    return(
        <Background>
            <RulesBG>
                {best !== 52 && <h1>YOU LOSE</h1>}
                {best === 52 && <h1>YOU WIN</h1>}
                <h2> SCORE: {score}  points </h2>
                <PreviousList previous={ lastCards } />


                <h1>Select Difficulty</h1>
                <DifficultyOption
                checked={checked}
                handleClick={handleDifficulty}
                setting={"EASY"}
                symbol={"♥"}
                />
                <DifficultyOption
                checked={checked}
                handleClick={handleDifficulty}
                setting={"NORMAL"}
                symbol={"♣"}
                />
                {/* <DifficultyOption
                checked={checked}
                handleClick={handleDifficulty}
                setting={"HARD"}
                symbol={"♠"}
                /> */}
                <br />
                <div>
                {checked.easy === true && <><h3>Pretty Much Not a Game.</h3> <p> Previously, clicked cards are displayed on screen</p> </>}
                {checked.normal === true && <><h3>Basic Memory Game.</h3> <p> Four cards are displayed, pick a new card every time.</p> </>}
                {checked.hard === true && <><h3>Memory Under Pressure</h3> <p> Four cards at a time, but with only 10 seconds per hand.</p> </>}
                </div>
                <StartButton clickHandler={handleStart}>PLAY AGAIN</StartButton>
            </RulesBG>
        </Background>
    )
}

export default GameOver