import React, { useContext } from 'react'
import { UserContext } from '../App'


const Second = () => {
    const [state, dispatch] = useContext(UserContext);
    dispatch({ type: "USER", payload: false });

    console.log(state);

    return (
        <>
            <h1>Second page</h1>
        </>
    )
}

export default Second
