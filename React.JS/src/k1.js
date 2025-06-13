import React,{useState} from 'react'
import img1 from './cycle.png'
import img2 from './bike.png'
import img3 from './lcd.png'
import img4 from './mobile.png'
const Alldata=[
    {catogory:"mobile",pic:img4},
    {catogory:"mobile",pic:img4},
    {catogory:"mobile",pic:img4},
    {catogory:"mobile",pic:img4},
    {catogory:"lcd",pic:img3},
    {catogory:"lcd",pic:img3},
    {catogory:"lcd",pic:img3},
    {catogory:"lcd",pic:img3},
    {catogory:"cycle",pic:img1},
    {catogory:"cycle",pic:img1},
    {catogory:"cycle",pic:img1},
    {catogory:"cycle",pic:img1},
    {catogory:"bike",pic:img2},
    {catogory:"bike",pic:img2},
    {catogory:"bike",pic:img2},
    {catogory:"bike",pic:img2}
]
const Example=()=>{
    const[image,setImage]=useState(Alldata)
    const allitem=()=>{
        const finaldata=Alldata.filter((value)=>{
            return value;
        })
        setImage(finaldata)
    }
    const fitcatogory=(catogoryitem)=>{
        const finaldata=Alldata.filter((value)=>{
            return value.catogory==catogoryitem
        })
        setImage(finaldata)
    }
    return(<>
    <button onClick={allitem}>All</button>
    <button onClick={()=>fitcatogory('mobile')}>Mobile</button>
    <button onClick={()=>fitcatogory('lcd')}>LCD</button>
    <button onClick={()=>fitcatogory('cycle')}>Cycle</button>
    <button onClick={()=>fitcatogory('bike')}>Bike</button>
    {image.map((value)=>{return(<img src={value.pic}></img>)})
}
    </>)
}
export default Example