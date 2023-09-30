import { useState } from "react"


const ToDowithState = () => {

    let [list,setList] = useState([]);              // adding items to this empty list
    let [item, setItem] = useState(" ");             //null item

    let itemName =(e)=>{
        setItem(e.target.value)
    }

    let addtoList =()=>{
        list.push(item);
        setList([...list])
    }

    let removeFromList =(index)=>{
        list.splice(index,1);
        setList([...list]);
    }

  return (
    <div >

        <div className="container col-md-10">
            <h1 className="text-align:center"><u><b>To-Do List</b></u></h1>
            <label htmlFor="">Add Your items Name</label> <br />
            <input onChange={itemName} placeholder="items Name" /> <br /> <br />
            <button onClick={addtoList}>Add</button> <br /> <br />
        </div>
        <div className="container col-md-10">
            <h1>Your List </h1>
            <table>
                <tbody>
                    {
                        list.length!==0?(
                            list.map((element, index)=>{
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <tr className="border">
                                        <td><ul><li>{element}</li></ul></td> <br />
                                        <td><ul><button onClick={()=>{removeFromList(index)}}>Remove</button></ul></td>
                                    </tr>
                                )
                            })
                        ): (<tr></tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ToDowithState