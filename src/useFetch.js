import {useState, useEffect} from 'react'

const useFetch = url => {
    let [data, setData] = useState('')
    let [error, setError] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let [isSuccess , setIsSuccess] = useState(false)

    
    useEffect(() => {

        const controller = new AbortController();
        // console.log(controller)
        
        // const signal = controller.signal
        // console.log(signal)
        
        (async () => {
            try{
                setIsLoading(true)
                let response = await fetch(url)
                let result = await response.json()
                setData(result)
                setIsSuccess(true)
                setIsLoading(false)
            }
            catch(error){
                setIsLoading(false)
                setError(true)
                setIsSuccess(false)
                throw Error ("Soemthing went wrong")
            }
        })()
        
        return () => controller.abort()
    }, [])
    
    return [data, error, isLoading, isSuccess]
}

export default useFetch