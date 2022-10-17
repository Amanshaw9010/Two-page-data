import { useContext } from 'react'
import React from 'react'
import { UserContext } from '../App'

const First = () => {

    const [state, dispatch] = useContext(UserContext);

    dispatch({ type: "USER", payload: true });


    return (
        <>
            <h1>First page</h1>
            <a href="/second"><h2>Go to Second page</h2></a>

        </>
    )
}

export default First
