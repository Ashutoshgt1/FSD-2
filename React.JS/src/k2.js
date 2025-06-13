import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
    if (action.type === 'increment') {
        return state + 1;
    } else if (action.type === 'decrement') {
        return state - 1;
    } else {
        return state;
    }
}

const Usered = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment {state}
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrement {state}
            </button>
        </>
    );
}

export default Usered;
