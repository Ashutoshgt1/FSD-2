// QB419
import { useState } from "react"

const Todolist=()=>{
    const[t1,setT1]=useState([])
    const[text,setText]=useState("")
    const deleteTask=(taskName)=>{
        setT1(t1.filter((task)=>
            {if(task!=taskName)
                return true;
            else 
                return false
            }))
    }
    function handletodolist(){
        setT1([...t1,text])
    }
    function handlechange(e){
        setText(e.target.value)
    }
    return(<>
    <input type="text" onChange={handlechange}/>
    <button onClick={handletodolist}>Add</button>
    {
        t1.map((task)=>(<>
        <h1>{task}</h1>
        <button onClick={()=>deleteTask(task)}>
            Delete</button>
        </>))
    }
    </>)
}
export default Todolist