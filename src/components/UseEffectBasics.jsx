import { useEffect, useState } from "react"

{/*
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)
*/}



const UseEffectBasics = () => {
    const [data, setData] = useState();
    useEffect(()=>{
        console.log('Hello Effect');

        fetch('https://dummyjson.com/products')
        .then(res=>res.json())              // Promise - converted to json
        .then(json=> setData(json))         // store to setData in state
    },[])
  return (
    <div>
        {JSON.stringify(data)}          
    </div>
  )
}

export default UseEffectBasics