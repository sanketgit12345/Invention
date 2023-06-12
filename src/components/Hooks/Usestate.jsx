import React, { useState } from "react";

function Usestate () {

    // 1. useState() is a react hook it is used for maintain and update the state 

    const [color,setColor] = useState("blue");

     return (
        <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("red")}
        >Blue</button>
      </>
     )
}
export default Usestate;