


const postSubmitData =(e)=>{
        e.preventDefault();
        alert("Your form is submitted");
}

const FormSubmit = () => {
  return (
    <div>
        <form onSubmit={postSubmitData}>
            <h2>Fill Up This Form</h2>
            <input type="text" placeholder='Write Name' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormSubmit