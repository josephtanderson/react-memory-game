import React from "react";

export default function StartButton(props) {
    const { clickHandler } = props;
    return (
        <button onClick={(e) => {
            clickHandler(e);
            }} >
                START GAME
        </button>
    )
}