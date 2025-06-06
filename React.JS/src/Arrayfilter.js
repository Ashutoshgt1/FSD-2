const Arrayfilter=()=>{
    const arr=[1,2,3,4,5]
    const newarr=arr.filter((num)=>{
        if(num==3){
            return false;
        }else{
            return true;
        }
    })
    return(<>
    <h1>Array After Filter {newarr}</h1></>)
}
export default Arrayfilter