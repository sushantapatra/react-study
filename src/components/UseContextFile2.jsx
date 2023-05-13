import React, { useContext } from 'react'
import { context } from './UseContextHook';

const UseContextFile2 = () => {
    const name = useContext(context)
    console.log(name);
    return (
        <div>UseContextFile2
            <p>Name : {name}</p>
        </div>
    )
}

export default UseContextFile2