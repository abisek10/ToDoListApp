import React from "react";
import { useContext } from "react";
import { countContext } from "../contexts/context";

const Counter = () => {

    const {count, increase} = useContext(countContext)

    
    return(
        <p onClick={increase}>{count}</p>
        )
}

export default Counter