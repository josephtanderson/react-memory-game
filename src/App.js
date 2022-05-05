import axios from "axios";
import React, { useEffect, useState } from 'react';
import Card from './Card'
import PreviousList from './components/PreviousList'


function App() {
  const [ playing, setPlaying ] = useState(true)
  const [ deckUrl , setDeckUrl ] = useState();
  const [ selected, setSelected] = useState({
    previous: [],
  });
  const [ cards, setCards ] = useState([]);

  //get Deck ID
  useEffect(()=> {
    async function getDeck() {
      let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      let deckIdUrl = "https://deckofcardsapi.com/api/deck/"+ await res.data.deck_id
      setDeckUrl(deckIdUrl)
    }
    getDeck();
  }, [])


  const drawCards = async () => {
    shuffleDeck();
    let drawUrl = deckUrl + "/draw/?count=4";
    let res = await axios.get(drawUrl);
    let draw = await res.data.cards;
    setCards( draw )
  }

  drawCards()

  const shuffleDeck = async () => {
    let res = await axios.get(deckUrl + /shuffle/);
    res = await res.data;
    if (res) console.log('shuffled')
  }

    // when card is clicked
  const onSelect = async (selectedCard) => {
    if (selected.previous.includes(selectedCard)) { //check if the selected card has been selected previously
      //if it is, you loose 
      alert("Game Over \n Score: "+ selected.previous.length + "\n" + selected.previous.join('\n')); 
      return
    }
    let newList = [...selected.previous, selectedCard]; 
    setSelected({previous: newList}); //if not, add card to previously selevcted list
    drawCards();
  }

  return (
    <div>
      {/* <PreviousList previous={ selected.previous } style={{gridColumn: '1',gridRow: '1'}} /> */}
      <Card select={ onSelect } hand={ cards } />
      <button onClick={(e) => {
        drawCards()
        e.target.hidden = true;
        }}>START</button>
    </div>
  );
}

export default App;