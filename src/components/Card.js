export default function Card(props){
    const { select, hand } = props;
    return (
        <div>
            {hand.map(card =>{
                return <img key={card.code} onClick={(e) => {select(card.code)}} src={card.image} alt={card.code} style={{width: '25%'}} />
                } )}
        </div>
    )
}