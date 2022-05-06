import { useState } from "react"



export const useCounter = ( initialState = 10) => {
 
    const [counter, setState] = useState( initialState ) //10

    
    const increment = ( ) =>{
        setState( state + 1 )
    }

    const decrement = ( ) =>{
        setState ( state - 1)
    }

    const reset = () =>{
        setState ( initialState )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}


export default useCounter;