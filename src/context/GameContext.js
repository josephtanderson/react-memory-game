import React, { createContext, useMemo, useState} from 'react';

export const GameContext = createContext(undefined);

export const GameContextProvider = ({ children }) => {
    const [ difficulty, setDifficulty ] = useState("normal");
    const [ best, updateBest ] = useState(0);
    
    const [ score, updateScore ] = useState(0);
    const [ lastCards, setLastCards ] = useState({
        previous: [],
    });


    const context = useMemo(
        () => ({
        difficulty,
        setDifficulty,
        best,
        updateBest,
        lastCards,
        setLastCards,
        score,
        updateScore,
    }), [ difficulty, best, lastCards, score ])

    return (
        <GameContext.Provider value={context} > {children} </GameContext.Provider>
    )
}
