import { useEffect,useState } from "react";

export const useDebounce = (value,delay=500)=>{
    const [debounceValue,setDebounceValue] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceValue(value);
        },delay);

        return () => clearTimeout(handler); //timer restarts if the delay time is left and value changes
    },[value,delay]); 

    return debounceValue;

}