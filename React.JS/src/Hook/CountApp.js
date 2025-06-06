import React,{useState} from "react";
function CountApp() {
    const[count,setcount]=useState(0);
    return<>
    <p>you clicked {count} Times</p>
    <button onClick={()=>setcount(count+1)}>Click me</button></>
}
export default CountApp