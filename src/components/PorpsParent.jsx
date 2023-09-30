import PropsChild from "./PropsChild";


const PorpsParent = () => {
    let objitem={
        Name:'Abrar',
        Age: 25,
        City: 'Chittagong'
    };

let click =()=>{
    alert('Hello user, welcome to our service')
}
    return (
        <div>
            <PropsChild Name="I am child of PropsParent" data={objitem} btnc={click}/>

        </div>
    );
};

export default PorpsParent;