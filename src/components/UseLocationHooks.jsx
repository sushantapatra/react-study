import React from 'react'
import { useLocation } from 'react-router-dom'

const UseLocationHooks = () => {
    const location = useLocation()

    console.log(location);

    return (
        <div>
            UseLocationHooks

            <p>My Current location is : {location.pathname}</p>

        </div>
    )
}

export default UseLocationHooks