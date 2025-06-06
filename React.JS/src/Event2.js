function event2(){
    const handelchange=(event)=>{
      console.log(event.target.value)

    }
    return(
       <input type="text" name="firstname" onChange={handelchange}/>
    )
}
export default event2