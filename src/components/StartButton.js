import React from "react";

export default function StartButton(props) {
    const { draw } = props;
    return (
        <button hidden={ props.isHidden } onClick={(e) => {
            draw();
            }} >
                START
        </button>
    )
}