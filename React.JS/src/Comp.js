import { useContext } from "react";
import { Fname } from "./k3";
const Comp=()=>{
    const value=useContext(Fname)
    return(
        <h1>{value}</h1>
    )
}
export default Comp;