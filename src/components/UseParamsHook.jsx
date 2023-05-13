import React from 'react'
import { useParams } from 'react-router-dom';

const UseParamsHook = () => {
    const { fname, lname } = useParams()
    return (
        <div>UseParamsHook-  {fname}, {lname}</div>
    )
}

export default UseParamsHook