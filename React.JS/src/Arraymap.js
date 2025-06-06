const Arraymap=()=>{
    const arr=[1,2,3,4,5]
    return(<>
    <div>
        <h1>using Arraymap function</h1>
        {
            arr.map((value)=>{
                return <h1>array values = {value}</h1>
            })
        }
    </div>
    </>)
}
export default Arraymap;