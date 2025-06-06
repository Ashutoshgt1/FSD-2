const Arrayfilter1=()=>{
    const arr=[1,2,3,4,5,6,7,8,9,10]
    const newarr=arr.filter((num)=>{
        if(num>=10){
            return false;
        }else{
            return true;
        }
    })
    return(<>
    <h1>Array After Filter {newarr}</h1></>)
}
export default Arrayfilter1