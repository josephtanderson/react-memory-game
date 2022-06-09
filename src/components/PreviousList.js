import { EasyCardContainer, EasyCardStyle } from '../App.styled'
import { gridSort } from '../utils/util';

export default function PreviousList(props) {
    const { previous } = props;
    return (
        <EasyCardContainer>
            {previous.length>0 && previous.map((card) => {
                return <EasyCardStyle
                grid={gridSort(card)}
                key={card}
                alt={card} 
                src={"https://deckofcardsapi.com/static/img/" + card + ".png"} />
            })}
        </EasyCardContainer>
    )
}