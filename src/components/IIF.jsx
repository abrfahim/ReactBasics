// Immediate Invoked Function
// Can be execute itself
// {} - for js code
// ()() - function, calling


const IIF = () => {
    let user = true
    return (
        <div>
            <h1><hr /></h1>
            {
                (()=>{
                    if(user == true){
                        return (<h1>I am authorized</h1>)
                    }
                    else{
                        return (<h1>I am non-authorized</h1>)
                    }
                })()
            }
        </div>
    );
};

export default IIF;