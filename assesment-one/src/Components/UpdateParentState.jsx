import React from 'react'

export default function UpdateParentState(props) {
    function handleClick() {
        props.onIncrement();
    }
    return (
        <div>
            <button onClick={handleClick}>
                Increment Count
            </button>
        </div>
    )
}
