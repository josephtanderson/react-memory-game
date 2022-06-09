import { useEffect, useState } from 'react';
import { getCards, testConnection } from '../service/useGameService';
import { useGameContext } from '../context/useGameContext';
import { useNavigate } from 'react-router-dom';

export const useGameMemory = () => {
    const { difficulty, best, updateBest, setDifficulty, lastCards, setLastCards, score, updateScore } = useGameContext();
    const { timer, setTimer } = useState(
        (difficulty === "hard" && 60) || -1
        );
    const [ loading, setLoading ] = useState( true );
    const [ selected, setSelected] = useState({
        previous: [],
    });
    const [ cards, setCards ] = useState([]);
    const [ hideButtons, setHideButtons ] = useState( false );

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

    const drawCards = () => {
        getCards()
        .then(( draw ) => setCards( draw ))
        .finally(()=> setHideButtons( true ))
    }

    const difficultySetting = () => {
        return Object.keys(checked).find(key => checked[key] === true);
    }

    const handleStart = (e) => {
        e.preventDefault();
        navigate("/game");
        setDifficulty(difficultySetting());
        setCards([]);
        setHideButtons( false );
        setSelected({
        previous: [],
        }); 
        updateScore(0);
    }

    const checkBest = () => {
        setLastCards(selected.previous);
        if (score > best) {
            updateBest(score);
            }
        return
    }

    const gameOver = () => {
        checkBest();
        navigate("/game-over");
    }



    const addToSelected = (card) => {
        let newList = [...selected.previous, card];
        setSelected({
            previous: newList,
        });
        updateScore(selected.previous.length)
    };

    let navigate = useNavigate();

    // when card is clicked
    const onSelect = (selectedCard) => {
        if (selected.previous.includes(selectedCard)) { //check if the selected card has been selected previously
        gameOver(); //if it is, you loose 
        return
        }
        addToSelected(selectedCard); //if not, add card to previously selevcted list
        drawCards();
    }

    const menuButtonClick = () => {
        navigate("/");
    }


    useEffect(()=> {
        testConnection()
        .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(timer);
    }, [timer, setTimer]);

    
    timer === 0 && gameOver();

    return {
        best,
        drawCards,
        onSelect,
        handleStart,
        handleDifficulty,
        loading,
        selected,
        checked,
        cards,
        hideButtons,
        menuButtonClick,
        lastCards,
        timer 
        }
}