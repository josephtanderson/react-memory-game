import { useEffect, useState } from "react";
import { useGameContext } from "../context/useGameContext";

export const Timer = () => {
    const { difficulty } = useGameContext();
    const [timer, setTimer] = useState(-1);
    
    difficulty === "hard" && setTimer(60);
    
    useEffect(() => {
        timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(timer);
    }, [timer]);
    return { timer, setTimer }
}
