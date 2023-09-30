// Holds componets data
// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.

import { useState } from "react"

// state two property - value, method

const UseStateBasics = () => {

    let [num, setnum] = useState(0);   //set initial value for num
    let mul =()=>{
      setnum(num+1*num);
    }

    //object with state

    const [myObj, setMyObj] = useState({
      Name:'Abrar Fahim',
      Age: 25,
      Location: 'Bangladesh',
      Position: 'Python Engineer'
    });

    let nob =()=>{
      setMyObj(
        myObj=>({             // myObj is here not actual myObj its previous object
          ...myObj,
          Name:'Sonet Chowdhury'
        })
      )
    }
    
    
  return (
    <div>
        <h1>Value:{num}</h1>
        <button onClick={()=>{setnum(num+5)}}>increase</button> <br /> <br />
        <button onClick={mul}>Logicalmultiplication</button> <hr />

        <div>
          <ul>
            <li>
            <h2>{myObj.Name}</h2>
            </li>
            <li>
            <h2>{myObj.Age}</h2>
            </li>
            <li>
            <h2>{myObj.Position}</h2>
            </li>
          </ul>
          <button onClick={nob}>show obj data</button>
        </div> <hr />


        

    </div>
  )
}

export default UseStateBasics