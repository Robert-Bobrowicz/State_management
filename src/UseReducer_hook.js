import React from 'react'
import { useReducer } from 'react';

export const UseReducerHook = () => {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_NAME':
                return {
                    ...state,
                    name: action.payload
                };
            case 'ADD-NAME':
                return {
                    ...state,
                    names: [...state.names, action.payload],
                    name: ''
                };
            default: return { ...state };
        }
    }, {
        names: [],
        name: ''
    })

    return (
        <div>
            <h2>useReducer</h2>
            {state.names.map((el, indx) => (
                <div
                    key={indx}
                >
                    {el}
                </div>

            ))}
            <input
                type="text"
                value={state.name}
                onChange={e => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                placeholder="Enter name"
            />
            <div>You just typed: {state.name}</div>
            <button onClick={() => dispatch({ type: 'ADD_NAME', payload: state.names.push(state.name) })}>Add name</button>

        </div>
    )
}

export default UseReducerHook;



//How reduce function works:
// const arr = [2, 3, 5];
// const initial_value = 0;

// const total = arr.reduce((current_value, next_el) => {
//     return current_value + next_el;
// }, initial_value);

// console.log('Sum of numbers from the array: ', total);