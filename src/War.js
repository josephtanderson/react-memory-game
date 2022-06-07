import axios from "axios";
import React, { useEffect, useState } from 'react';

const War = () => {
    
    const [ loading, setLoading ] = useState( true );
    const [ deck, setDeck ] = useState( )
    const [ cards, setCards ] = useState ( );
    const [ player1, setPlayer1 ] = useState({
      hand: [],
      discard: [],
    })
    const [ player2, setPlayer2 ] = useState({
      hand: [],
      discard: [],
    })

    //get Deck
    useEffect(()=> {
        const getDeck = async () => {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            let newDeck = res.data.deck_id;
            setDeck(newDeck);
        }
        getDeck();
    }, [])
        
    useEffect(()=> {
        const drawCards = async () => {
            let drawUrl = "https://deckofcardsapi.com/api/deck/" + deck + "/draw/?count=52";
            let res = await axios.get(drawUrl);
            let draw = await res.data.cards;
            setCards(draw);
        };
        drawCards();
    }, [])
        
            if ( cards!== undefined) {
                console.log(cards);
                
            } 
    // for (let i=0; i<52; i++) {
    //     let p1Draw = [...player1.hand, ];
    //     setPlayer1({
    //         ...player1,
    //         hand: [p1Draw], 
    //     })
    //     let p2Draw = [...player2.hand, ];
    //     setPlayer2({
    //         ...player2,
    //         hand: [p2Draw], 
    //     });
    // }


    

    return (
        <div>
          {cards.map(card => {return <img src={card.image} alt={card.code}/> })}
        </div>
    )
}

export default War