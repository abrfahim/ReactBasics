import { useState } from "react"



const ManageFormUsingState = () => {

  let [formObj, setFormObj] = useState({
    fName:'', lName:'', city:'', gender:''
  })

  let inputHandler=(property, value)=>{

    setFormObj(preObj=>({
      ...preObj,
      [property]:value
    }))
  }

  let formSubmit=(e)=>{
      e.preventDefault();
      alert(JSON.stringify(formObj));
  }

  return (
    
    <div className="container mt-5">

  
        <form onSubmit={formSubmit}>
            <label >Give Your First Name</label>
            <input onChange={(e)=>{inputHandler('fName', e.target.value)}} value={formObj.fName} type="text" placeholder="FirstName" /> <br />

            <label >Give Your Last Name</label>
            <input onChange={(e)=>{inputHandler('lName',e.target.value)}} value={formObj.lName} type="text" placeholder="LastName" /> <br />

            <label >Choose Your City</label>
            <select name="" id="" value={formObj.city} onChange={(e)=>{inputHandler('city',e.target.value)}}>
                <option value="">Choose City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Khulna">Khulna</option>
            </select> <br />

            <input onChange={()=>inputHandler('gender', 'Male')} checked={formObj.gender==='Male'} type="radio" name="gender" /> Male
            <input onChange={()=>inputHandler('gender', 'Female')} checked={formObj.gender==='Female'} type="radio" name="gender" /> Female
            <br />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ManageFormUsingState

