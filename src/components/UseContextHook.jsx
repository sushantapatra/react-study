import React, { createContext } from 'react'
import UseContextFile1 from './UseContextFile1'

const context = createContext()
const name = "Props pass parent component to child component"
const UseContextHook = () => {
    return (
        <>
            <context.Provider value={name}>
                <h1>Use Context Hook Example</h1>
                <UseContextFile1 />
            </context.Provider>

        </>
    )
}

export default UseContextHook
export { context }