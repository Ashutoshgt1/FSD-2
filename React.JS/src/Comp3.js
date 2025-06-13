import { useContext } from "react";
import { Fname,Fname1  } from "./k4";
function Comp3(){
        const value1=useContext(Fname)
        const value2=useContext(Fname1)
return(
    <h1>{value1*value2}</h1>
)
}
export default Comp3;