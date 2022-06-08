import { useContext } from "react";
import { GameContext } from './GameContext'

export const useGameContext = () => {
    const context = useContext(GameContext);

    if (context === undefined) {
        Error("CONTEXT UNDEFINED");
        return
    }
    return context;
}