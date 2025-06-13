import React, { useState, useEffect } from 'react';

function Example1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
   setTimeout(()=>{setCount(count+1)},1000)})

  return (
    <h1>I Have Rendered {count} Times</h1>
   
  );
}

export default Example1;
