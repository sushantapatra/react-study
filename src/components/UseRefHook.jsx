import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const UseRefHook = () => {
    const refElement = useRef()
    const refElement2 = useRef()
    const [name, setName] = useState('Sushanta')
    const [email, setEmail] = useState('admin@gmil.com')
    const Submit = () => {
        setName(name)
        refElement.current.style.color = 'blue'
        refElement2.current.style.color = 'red'
    }
    const Reset = () => {
        setName('')
        refElement.current.focus()
    }
    return (
        <div>
            <h3>UseRefHook</h3>

            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} ref={refElement} />
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} ref={refElement2} />
            <button onClick={Submit}>Submit</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default UseRefHook