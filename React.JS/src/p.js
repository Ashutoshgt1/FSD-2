import { createContext } from "react";
import C1 from './c1'
const Fname=createContext()
const Fname1=createContext()
const Main=()=>{
    return(
     
        <Fname.Provider value="yellow">
              <Fname1.Provider value="blue">
            <C1/>
       
            
      
        </Fname1.Provider>
         </Fname.Provider>
  
        
    )
}
export default Main;
export {Fname,Fname1}
