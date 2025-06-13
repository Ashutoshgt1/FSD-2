import React, { useState, useEffect } from 'react';

function Example1() {
  const [count, setCount] = useState(0);
  const [calculate, setCount1] = useState(0);
  useEffect(() => {
    
   setTimeout(()=>{setCount(count+1)},1000)})
  useEffect(() => {
    
  setTimeout(()=>{setCount1(count*2)},1000)})

  return (
    <div>
    <h1>I Have Rendered {count} Times</h1>
    <h1>I Have Rendered {calculate} Times</h1>
   </div>
  );
}

export default Example1;
