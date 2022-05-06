import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true)

    const [state, setState] = useState({ data: null, loading: true, error: null, });

    useEffect( () => {
        return () => {
            isMounted.current = false
        }
    },[])

  useEffect( () => {
      
     setState({ data: null, loading: true, error: false, });

      fetch(url)
          .then( resp => resp.json() )
          .then( data => {
            
            if(isMounted.current) {

              setState({
                  loading:false,
                  error:null,
                  data
              });

            }

          })

          .catch( () => {
            setState({
                data: null,
                loading: false,
                error: 'No se pudo cargar la info'
            })
        })
    
        // const getData = async() =>{
        //     const response = await fetch(url) 
        //     const json = await response.json()
        //     setState({
        //         loading:false,
        //         error:null,
            
        //         data:json
        //     })

        // }
        // getData();

  },[ url ]);
    


  return state;
}
