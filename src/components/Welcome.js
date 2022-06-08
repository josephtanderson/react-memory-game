import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, RulesBG } from '../App.styled';
import DifficultyOption from './DifficultyOption';

const Welcome = (props) => {
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
    
    let navigate = useNavigate()

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
                <button onClick={(e)=>{
                    e.preventDefault();
                    navigate("/game");
                    }} >
                        START GAME
                    </button>
            </RulesBG>
        </Background>
    )
}

export default Welcome