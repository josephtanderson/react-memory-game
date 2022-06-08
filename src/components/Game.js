import axios from "axios";
import React, { useEffect, useState } from 'react';
import Card from './Card'
import Score from "./Score";
import StartButton from './StartButton';
import { Background } from '../App.styled';
import Loadscreen from "./Loadscreen";


import PreviousList from './PreviousList'


function Game() {
  const [ loading, setLoading ] = useState( true );
  const [ best, setBest ] = useState ( 0 );
  const [ selected, setSelected] = useState({
    previous: [],
  });
  const [ cards, setCards ] = useState([]);
  const [ hideButton, setHideButton ] = useState( false );
  const [ timer, setTimer ] = useState({
    time: -1,
  });

  //get Deck
  useEffect(()=> {
    async function testConnection() {
      let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      if (res.data !== undefined  ) {
        setLoading(false);
      }
    }
    testConnection();
    
  }, [])

  const drawCards = async () => {
    let drawUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=4";
    let res = await axios.get(drawUrl);
    let draw = await res?.data?.cards;
    setCards( draw );
    setHideButton(true);
    //for hard mode
    setTimer({
      time: 10
    });
  }


  const gameOver = () => {
    alert("Game Over \n Score: "+ selected.previous.length + "\n" + selected.previous.join('\n'));
    setCards([]);
    setHideButton( false );
    if (selected.previous.length > best) {
      setBest(selected.previous.length);
    }
    setSelected({
      previous: [],
    })
    setTimer(-1);
  }

  if (timer.time > 0) {
    setInterval(()=> {
      let tick = timer.time;
      tick -= 1;
      console.log("tick ", tick);
      setTimer({
        time: tick,
      });
    }, 1000)
  }

  if (timer.time === 0) {
    gameOver();
  }

    // when card is clicked
  const onSelect = async (selectedCard) => {
    if (selected.previous.includes(selectedCard)) { //check if the selected card has been selected previously
      //if it is, you loose 
      gameOver()
    }
    let newList = [...selected.previous, selectedCard]; 
    setSelected({previous: newList}); //if not, add card to previously selevcted list
    drawCards();
  }


  if (loading) { return (
      <Background>
        <Loadscreen />
      </Background>
    )}
  return (
    <Background>
      <Score score={ selected.previous.length } bestScore={ best } timer={timer.time} />
      <PreviousList previous={ selected.previous } style={{gridColumn: '1',gridRow: '1'}} />
      <Card select={ onSelect } hand={ cards } />
      <StartButton draw={drawCards} isHidden={ hideButton } />
    </Background>
  );
}

export default Game;


