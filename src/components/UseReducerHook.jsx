import React from 'react'
import { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    console.log(state, action.type);

    if (action.type === 'INC') {
        return state + 1
    }
    if (action.type === 'DEC') {
        return state - 1
    }
    return state
}
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Use Reducer Hook</h1>
            <p>{state}</p>
            <button className='mx-2' onClick={() => dispatch({ type: 'INC' })}>Inc</button>
            <button className='mx-2' onClick={() => dispatch({ type: 'DEC' })}>Dec</button>
        </div>
    )
}

export default UseReducerHook