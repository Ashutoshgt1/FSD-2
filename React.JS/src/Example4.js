import React, { useState, useEffect } from 'react';

function Example4() {
  const [date,setDate]=useState(new Date())
  useEffect(() => {
    setInterval(()=>{setDate(new Date())},1000)},[])

  return (
    <>
    <h1>Hours:Min:Sec</h1>
    <h2>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h2>
   </>
  );
}

export default Example4;
