
import {useState} from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues( initialState );
    }

    const HandleInputChange = ({target}) =>{

            setValues({
                ...values,
                [target.name]: target.value,
                // name : target.value
            })
        }

   return [ values, HandleInputChange, reset ]
}

