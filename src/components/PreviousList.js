export default function PreviousList(props) {
    const { previous } = props;
    return (
        <div>
            {previous.map(card => {return <p style={{gridRow: '1'}} key={card}><img alt={card} src={"https://deckofcardsapi.com/static/img/" + card + ".png"} /></p>})}
        </div>
    )
}