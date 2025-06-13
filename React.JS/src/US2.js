// Write a react js script to create a digital clock running contiuously use effect hook
import {useState,useEffect} from 'react';
function US2(){
    const [data,setDate]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(()=>{
            setDate(new Date())
        },1000);
    },[]);
    return(
        <h1>Time using LocaltimeString -{Date.toLocalTimeString()}<br></br>
        Hour-{Date.getHours()}:Min-{Date.getMinutes()}:sec-{Date.getSeconds()}</h1>
    )
} 