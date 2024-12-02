

import './Countern.css'
import React, { useState, useEffect } from "react";
    function Countern() {
        const [count, setCount] = useState(0); 
        const [intervalId, setIntervalId] = useState(null);
useEffect(()=> {

document.title =`count: ${count} `;
},[count]);
function startCounter(){
 
    if (!intervalId) {
       
        const id = setInterval(() => setCount((c) => c + 1), 1000);
        setIntervalId(id); // 
      }
}
function stopCounter(){
    if (intervalId) {
       
        clearInterval(intervalId);
        setIntervalId(null);
      } 
}

return(<div className='center'>
<p>count:{count}</p>
<div className='button'>
 <button onClick={startCounter}> Start</button>
 <button onClick={stopCounter}>Stop</button>
 </div>


</div>);









    }
    export default Countern;