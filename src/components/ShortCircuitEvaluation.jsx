import React, { useState } from 'react'

const ShortCircuitEvaluation = () => {
    const [title, setTitle] = useState('')
    return (
        <>
            <h1>Short Circuit Evaluation Examples</h1>

            <p>Write If Else Condition in jsx</p>

            <h4>{title ||
                <>
                    <p>This is p tag</p>
                    <p>This is p tag</p>
                </>

            }</h4>
            <h4>{title && 'Demo Title'}</h4>
        </>
    )
}

export default ShortCircuitEvaluation