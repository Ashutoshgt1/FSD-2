 import {useState} from 'react'
const QB417_2=()=>{
    const[c1,setc1]=useState('Show')
    const[c2,setc2]=useState('')
    function change1(){
        if(c1=='Show'){
            setc1('Hide')
            setc2('kedu')
        }
        else{
            setc1('Show')
            setc2('')  
        }
    }
    
    return(<>
    <h1>{c2}</h1>
    <button onClick={change1}>{c1}</button>

    </>)
}
export default QB417_2