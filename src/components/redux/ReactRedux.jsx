import React from 'react'
import { Provider } from 'react-redux'


import ReduxExample from './ReduxExample'
import { store } from './reducers'

//store.subscribe(() => console.log(store.getState()))

const ReactRedux = () => {
    return (
        <Provider store={store}>
            <h1>React Redux Example</h1>
            <ReduxExample />
        </Provider>
    )
}

export default ReactRedux