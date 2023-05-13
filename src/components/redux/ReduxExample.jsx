import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions'

const ReduxExample = () => {
    const myState = useSelector((state) => state.changeTheNumber)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="d-flex">
                <button onClick={() => dispatch(decNumber(2))}>-</button>
                <p className='px-4'>{myState}</p>
                <button onClick={() => dispatch(incNumber(5))}>+</button>
            </div>
        </div>
    )
}

export default ReduxExample