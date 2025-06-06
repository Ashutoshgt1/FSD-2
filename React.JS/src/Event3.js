function form(){
    const handelSubmit=(event)=>{
        event.preventDefault();
     alert('You Clicked Submit')

    }
    return(
      <form onSubmit={handelSubmit}>
    <input type="submit"></input>
      </form>
    )
}
export default form