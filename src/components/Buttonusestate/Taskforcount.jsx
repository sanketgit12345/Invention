import React, { useState } from "react";

function Taskforcount () {

   const [count,setCout] = useState(0);

   const plusCount = () => {
      setCout(count+1);
   }

   const minusCount = () => {
    setCout(count-1);
 }


   return (
     <>
       <input type="text" value={count}></input>
       <button onClick={()=>plusCount()}>Plus</button>
       <button onClick={()=>minusCount()}>Minus</button>
     </>
   )

}

export default Taskforcount