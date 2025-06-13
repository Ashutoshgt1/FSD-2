import { createContext } from "react";
import Comp1 from './Comp1'
const Fname=createContext()
const Fname1=createContext()
const Main=()=>{
    return(
     
        <Fname.Provider value="6">
              <Fname1.Provider value="5">
            <Comp1/>
       
            
      
        </Fname1.Provider>
         </Fname.Provider>
  
        
    )
}
export default Main;
export {Fname,Fname1}
