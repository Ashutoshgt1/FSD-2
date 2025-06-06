 import {useState} from 'react'
const QB417_2=()=>{
    const[c1,setc1]=useState('')
    const[c2,setc2]=useState('')
    function change1(event){
        setc1(event.target.value)
            
        
    }
    function change2(event){
        setc2(event.target.value)
    }
    
    return(<>
    <input type='text' onChange={change1} placeholder='firstname'></input>
    <input type='text' onChange={change2} placeholder='lastname'></input>
    <h1>{c1}{c2}</h1>
    </>)
}
export default QB417_2