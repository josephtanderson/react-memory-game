import { useGameContext } from './context/useGameContext';
import { useGameMemory } from './hooks/useGameMemory';
import { Background, HeaderNav } from './App.styled';
import Loadscreen from "./components/Loadscreen";
import Score from "./components/Score";
import Game from './components/Game'

const App = () => {
    const { best, score} = useGameContext();

    const { menuButtonClick, loading, timer } = useGameMemory();

    if (loading) 
        {return (
            <Background>
                <Loadscreen />
            </Background>
        )}

    return (
        <Background>
            <HeaderNav>
                <button onClick={menuButtonClick}>MENU</button>
                <Score score={ score } bestScore={ best } timer={timer} />
            </HeaderNav>
            <Game />
        </Background>
    );
}

export default App;