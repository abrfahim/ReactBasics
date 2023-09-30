import { useState, useEffect } from "react";



const UseEffectAsync = () => {
    const [data, setData] = useState();

    useEffect(() => {
        
        // IIF - Immediate Invoke Function
        // await - waiting for process
        (async ()=>{
         let res =  await fetch('https://dummyjson.com/products');      //fetching data
         let cts = await res.json();          // converted to json data
         setData(cts)                   // storing data to setData in state                                        
        })()

    }, []); 

  return (
    <div>
        {JSON.stringify(data)}
    </div>
  )
}

export default UseEffectAsync