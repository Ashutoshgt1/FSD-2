import { useEffect,useState } from "react";
import axios from 'axios';
const Randomimages=()=>{
    const[img,sertimg]=useState('')
    useEffect(()=>setInterval(()=>{axios.get('https:dog.ceo/api/breeds/images/random')
        .then((res)=>sertimg(res.data)).catch((err)=>console.log(err))},2000),[])
        return(
            <>
            <img src={img.message} height={"200px"} width="200px"></img></>
        )
    }
export default Randomimages;