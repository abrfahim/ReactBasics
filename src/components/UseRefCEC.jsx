
// CEC - Caching Expensive Computations

import { useRef } from "react"

const UseRefCEC = () => {

    let apiData = useRef(null);
    let sd = useRef();

    const fetchData= async()=>{
       const response = await fetch('https://dummyjson.com/products')
       apiData.current = await response.json();

    }
    const showData=()=>{
        sd.current.innerText = JSON.stringify(apiData.current);
    }
  return (
    <div>
        <h1 ref={sd}></h1> <hr />
        <button onClick={fetchData}>Call API</button> <br /> <br />
        <button onClick={showData}>Show Data</button>
    </div>
  )
}

export default UseRefCEC