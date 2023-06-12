import React, { useRef, useState } from "react";

function Userref () {

    // 1. useRef() is a react hook it persist value between renders and manipulate the dom

    const refElement = useRef("");
    const [name,setName] = useState("Sanket");

    const reset = () => {
        setName("");
        refElement.current.focus();
       
    }

    const handleInput = () => {
         refElement.current.style.color  ="blue";
    }

     return (
        <>
          <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
          <button onClick={()=>reset()}>Reset</button>
          <button onClick={()=>handleInput()}>Handle input</button>
        </>
     )
}
export default Userref;