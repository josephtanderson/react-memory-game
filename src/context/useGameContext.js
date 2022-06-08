import { useContext } from "react";

const GameContext = React.createContext({
    difficulty: "normal",
    updateDifficulty: ()=>{},
    bestScore: 0,
    updateBest: () => {},
}); 


export default useGameContext;