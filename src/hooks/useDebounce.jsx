import React,{useState,useEffect} from 'react'

const useDebounce = ({value}) => {
    const[debounce,setDebounce]=useState(value);
    useEffect(()=>{
        const handler=setTimeout(()=>{
            setDebounce(value)},1500);
            return ()=>{
                clearTimeout(handler)
            }
    },[value])

  return debounce
}

export default useDebounce