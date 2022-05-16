import React from "react";

export default function StartButton(props) {
    const { draw, isHidden } = props;
    return (
        <button onClick={(e) => {
            draw();
            }} >
                START
        </button>
    )
}