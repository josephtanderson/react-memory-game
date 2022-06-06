export default function PreviousList(props) {
    const { previous } = props;
    return (
        <div style={{display: "flex"}} >
            {previous.map(card => {return <p style={{width: 'auto'}} key={card}><img alt={card} src={"https://deckofcardsapi.com/static/img/" + card + ".png"} /></p>})}
        </div>
    )
}