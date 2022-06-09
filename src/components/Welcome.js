import { Background, RulesBG } from '../App.styled';
import { useGameMemory } from '../hooks/useGameMemory';
import DifficultyOption from './DifficultyOption';
import StartButton from './StartButton';

const Welcome = () => {
    const { handleStart, checked, handleDifficulty } = useGameMemory();

    return(
        <Background>
            <RulesBG>
                <h1>♠<span style={{color: "red"}}>♥</span>RULES♣<span style={{color: "red"}}>♦</span></h1>
                <p>
                    Click a Card, don't click it again. <br />
                    If you click the same card twice it's game over. <br /> 
                    <br />
                    Can you get all 52? <br />
                </p>
                <h1>Difficulty</h1>
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
                {checked.hard === true && <><h3>Memory Under Pressure</h3> <p> Four cards at a time, but with only 60 seconds to play.</p> </>}
                </div>
                <StartButton clickHandler={handleStart}>START GAME</StartButton>
            </RulesBG>
        </Background>
    )
}

export default Welcome