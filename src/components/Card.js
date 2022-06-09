import { CardStyle, CardContainer } from '../App.styled'

export default function Card(props){
    const { select, hand } = props;
    return (
        <CardContainer>
            {hand.map(card =>{
                return <CardStyle key={card.code} onClick={(e) => {select(card.code)}} src={card.image} alt={card.code} />
                } )}
        </CardContainer>
    )
}