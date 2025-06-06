 import {useState} from 'react'
const QB416=()=>{
    const[c1,setC1]=useState('green')
    const[f1,setf1]=useState('normal')
    function changefont(){
        if(f1=='normal')
            setf1('italic')
        else
            setf1('normal')

    }
    function changecolor(){
        if(c1=='green')
            setC1('red')
        else
            setC1('green')

    }
    return(<>
    <h1 style={{color:c1,fontStyle:f1}}>LJ University</h1>
    <button onClick={changefont}>changefont</button>
    <button onClick={changecolor}>changecolor</button>

    </>)
}
export default QB416