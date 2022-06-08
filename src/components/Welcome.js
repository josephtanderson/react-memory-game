import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, RulesBG } from '../App.styled';
import { useGameContext } from '../context/useGameContext';
import DifficultyOption from './DifficultyOption';
import StartButton from './StartButton';

const Welcome = (props) => {
    const { setDifficulty } = useGameContext();
    const [ checked, setChecked ] = useState({
        easy: false,
        normal: true,
        hard: false,
    })
    const handleDifficulty = (e, setting) => {
        let difficulty = {
            easy: false,
            normal: false,
            hard: false,
        }
        difficulty[setting] = true;
        setChecked( difficulty )
    }
    const handleStart = (e) => {
        e.preventDefault();
        navigate("/game");
        setDifficulty(difficultySetting());
    }

    let navigate = useNavigate();

    const difficultySetting = () => {
        return Object.keys(checked).find(key => checked[key] === true);
      }

    return(
        <Background>
            <RulesBG>
                <h1>RULES</h1>
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
                <DifficultyOption
                checked={checked}
                handleClick={handleDifficulty}
                setting={"HARD"}
                symbol={"♠"}
                />
                <br />
                <div>
                {checked.easy === true && <><h3>Pretty Much Not a Game.</h3> <p> Previously, clicked cards are displayed on screen</p> </>}
                {checked.normal === true && <><h3>Basic Memory Game.</h3> <p> Four cards are displayed, pick a new card every time.</p> </>}
                {checked.hard === true && <><h3>Memory Under Pressure</h3> <p> Four cards at a time, but with only 10 seconds per hand.</p> </>}
                </div>
                <StartButton clickHandler={handleStart}>START GAME</StartButton>
            </RulesBG>
        </Background>
    )
}

export default Welcome