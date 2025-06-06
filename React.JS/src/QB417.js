 import {useState} from 'react'
const QB416=()=>{
    const[c1,setC1]=useState('img1.jpg')
    function changeimg(){
        if(c1=='img1.jpg')
            setC1('img2.jpg')
        else
            setC1('img1.jpg')

    }
    return(<>
    <img src={c1}></img>
    <button onClick={changeimg}>changeimg</button>
    </>)
}
export default QB416