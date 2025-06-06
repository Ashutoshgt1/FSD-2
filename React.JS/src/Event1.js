function Football(){
    const shoot=(a)=>{
        alert(a)

    }
    return(
        <button onDoubleClick={()=>shoot("Goal!")}>Take a Shot!</button>
    )
}
export default Football