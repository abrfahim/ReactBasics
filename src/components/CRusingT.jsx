
let con =()=>{
   return (<button className="C">Continue</button>)
}
let Dc =()=>{
    return (<button className="Dc">Discontinue</button>)
}
const CRusingT = () => {
    let status = true;
    return (
        <div>
            <h1>Solid User Entry</h1>
            {
                status? con() : Dc()
            }
        </div>
    );
};

export default CRusingT;