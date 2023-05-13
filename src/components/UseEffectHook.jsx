import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)



    useEffect(() => {
        alert('I am Clicked...')
    }, [num])

    return (
        <div>
            <h1>UserEffect Hook Example</h1>
            <button className='btn btn-secondary mx-2' onClick={() => setNum(num + 1)}>Click Me {num}</button>
            <button className='btn btn-success' onClick={() => setNum2(num2 + 1)}>Click Me {num2}</button>
        </div>
    )
}

export default UseEffectHook