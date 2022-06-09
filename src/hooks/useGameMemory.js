import { useEffect, useState } from 'react';
import { getCards, testConnection } from '../service/useGameService';
import { useGameContext } from '../context/useGameContext';


export const useGameMemory = () => {
    const { difficulty, best, updateBest } = useGameContext();

    const [ loading, setLoading ] = useState( true );
    const [ selected, setSelected] = useState({
        previous: [],
    });
    const [ cards, setCards ] = useState([]);
    const [ hideButtons, setHideButtons ] = useState( false );
    const [ timer, setTimer ] = useState({
        time: -1,
    });


    const drawCards = () => {
        getCards()
        .then(( draw )=> setCards( draw ))
        // for hard mode
        // difficulty === "hard" && setTimer({
        //   time: 10
        // })
    }

    const gameOver = () => {
        alert("Game Over \n Score: "+ selected.previous.length + "\n" + selected.previous.join('\n'));
        setCards([]);
        setHideButtons( false );
        if (selected.previous.length > best) {
        updateBest(selected.previous.length);
        }
        setSelected({
        previous: [],
        })
        difficulty === "hard" && setTimer({
        time: -1
        });
    }

    // timer.time > 0 &&
    // setInterval(()=> {
    // let tick = timer.time;
    // tick -= 1;
    // console.log("tick ", tick);
    // setTimer({
    //     time: tick,
    // });
    // }, 1000)

    //timer.time === 0 && gameOver();

    // when card is clicked
    const onSelect = (selectedCard) => {
        if (selected.previous.includes(selectedCard)) { //check if the selected card has been selected previously
        //if it is, you loose 
        // updateBoard(gameOver(), []);
        gameOver();
        return
        }
        let newList = [...selected.previous, selectedCard]; 
        setSelected({previous: newList}); //if not, add card to previously selevcted list
        drawCards();
    }
    
    useEffect(()=> {
        testConnection()
        .then(()=>drawCards())
        .then(()=>setHideButtons( true ))
        .finally(() => setLoading(false))
        }, [])

    return { drawCards, onSelect, loading, selected, timer, cards, hideButtons }
}