import {useState} from 'react'
const QB415=()=>{
    const[num,setNum]=useState(0)
    return(<>
    <h1>{num}</h1>
    <button on onClick={()=>{if(num<10)setNum(num+1)}
        }>Increament</button>
    <button on onClick={()=>{if(num>0)setNum(num-1)}
        }>Decreament</button>

    </>)
}
export default QB415