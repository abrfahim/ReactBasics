// props - properties
// props is parameter for parent

const PropsChild = (props) => {
    return (
        <div>
            <div>
                {/* pasing string */}
            <h1>{props.Name}</h1> 
            </div>
            <div>
                {/* passing object */}
            <ul>
                <li> Name: {props.data.Name} </li>
                <li>Age: {props.data.Age}</li>
                <li>Name: {props.data.City}</li>
            </ul>
            </div>

            <div>
                {/* passing function */}
                <button onClick={props.btnc}>Click On</button>
            </div>
            
        </div>
    );
};

export default PropsChild;