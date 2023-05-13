import React, { useEffect, useState } from 'react'

import axios from 'axios'


const ApiCalling = () => {
    const [num, setNum] = useState()

    useEffect(() => {
        getData(num)
    }, [num])


    const getData = async (number) => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
            <select value={num} onChange={(event) => setNum(event.target.value)}>
                <option>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="25">25</option>
            </select>
        </>
    )
}

export default ApiCalling