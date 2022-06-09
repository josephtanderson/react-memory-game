import axios from "axios";


export const getCards = async () => {
    let drawUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=4";
    let res = await axios.get(drawUrl);
    let draw = await res?.data?.cards;
    return draw
  }

export const testConnection = async () => {
    let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    if (res.data !== undefined  ) {
    return true
    }
}