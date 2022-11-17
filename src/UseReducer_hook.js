import React from 'react'
import { useReducer } from 'react';

export const UseReducerHook = () => {

    function UserForm() {
        const [state, dispatch] = useReducer((state, action) => {
            return {
                ...state,
                ...action
            }
        }, {
            firstName: '',
            lastName: ''
        });

        return (
            <div>
                <input
                    type="text"
                    value={state.firstName}
                    onChange={e => dispatch({ firstName: e.target.value })}
                    placeholder="Enter first name"
                />
                <input
                    type="text"
                    value={state.lasttName}
                    onChange={e => dispatch({ lastName: e.target.value })}
                    placeholder="Enter last name"
                />
                <div>Your name: {state.firstName} {state.lastName}</div>
            </div>
        )
    };

    function UserList() {
        const [state, dispatch] = useReducer((state, action) => {
            switch (action.type) {
                case 'SET_NAME':
                    return {
                        ...state,
                        name: action.payload
                    };
                case 'ADD_NAME':
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
                    <div key={indx} >
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
                <button onClick={() => dispatch({ type: 'ADD_NAME', payload: state.name })}>Add name</button>
            </div>
        )
    };

    return (
        <div>
            <UserList />
            <UserForm />
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