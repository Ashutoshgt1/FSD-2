import React, { useState, useEffect } from 'react';

function Example2() {
  const [count, setCount] = useState(0);
  const [calculate, setCount1] = useState(0);
  useEffect(() => {
    
  setCount1(count*2)},[count])

  return (
    <div>
    <p>count={count}</p>
    <button onClick={()=>setCount(count+1)}>Add</button>
    <p>calculation={calculate}</p>
   </div>
  );
}

export default Example2;
