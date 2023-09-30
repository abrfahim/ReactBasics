
// normal js dom
// let catch = document.getElementById('rf')

import { useRef } from "react"


const ReactHookRef = () => {
  // change inner components
    let caught = useRef();
    let change=()=>{
      caught.current.innerText = "This line is changed by useRef";
    }
    let c = useRef();
    let ch = ()=>{
      c.current.innerHTML ='<ul><li>A</li> <li>B</li></ul>'
    }
    // change attribute using useRef();
    let myImg = useRef();
    let pi =()=>{
      myImg.current.src="https://image.shutterstock.com/image-photo/black-adult-house-cat-standing-260nw-2184634675.jpg";
      myImg.current.setAttribute('width','300px')
      myImg.current.setAttribute('height','250px')
    }
    // multiple input element
    // let fn = useRef();
    // let ln = useRef();
    // let mn = useRef();

    // clean code for multiple ref
    let fn, mn, ln = useRef();


      let usr =()=>{
      let fname = fn.value;
      let mname = mn.value
      let lname = ln.value;
      alert(fname + ' '+ mname +" "+ lname);
    }
    // bootstrap-css with useRef()
    let cs = useRef();
    let styl =()=>{
      cs.current.classList.remove('text-success');
      cs.current.classList.add('text-warning')
    }
    // persist mutable 
    let a = useRef(0);
    let ins =()=>{
      a.current++;
      console.log(a.current);
    }
  return (
    <div>
            <h1 id="rf">Learning React Hook - Catch by dom</h1> <hr />
            <h1 ref={caught}> Learning React Hook - caught by useRef </h1>
            <button onClick={change}>click for change</button> <hr />

            <h1 ref={c}>Can You Change it to list A,B</h1>
            <button onClick={ch}>Change</button> <hr />

            <img ref={myImg} src="https://placehold.co/600x400" alt="" />
            <button onClick={pi}>change Image</button> <hr />

            <input ref={(a)=>{fn=a}} type="text" placeholder="First Name" /> <br />
            <input ref={(a)=>{mn=a}} type="text" placeholder="Mid Name" /> <br />
            <input ref={(a)=>{ln=a}} type="text" placeholder="Last Name" /> <br />
            <button onClick={usr}>Get Value</button> <hr />

            <h1 ref={cs} className={"text-success"}>You should learn as fast as possible</h1>
            <button onClick={styl}>change color</button> <hr />
            
            <h1>Simple Increaser</h1>
            <button onClick={ins}>Increase</button>

    </div>
  )
}

export default ReactHookRef