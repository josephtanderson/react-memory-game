import React, { createContext, useMemo, useState} from 'react';

export const GameContext = createContext(undefined);

export const GameContextProvider = ({ children }) => {
    const [ difficulty, setDifficulty ] = useState("normal");
    const [ best, updateBest ] = useState(0);

    const context = useMemo(
        () => ({
        difficulty,
        setDifficulty,
        best,
        updateBest,
    }), [ difficulty, best ])

    return (
        <GameContext.Provider value={context} > {children} </GameContext.Provider>
    )
}
