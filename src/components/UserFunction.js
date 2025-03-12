import { useState } from "react"

const UserFunction=({name,location,emailaddress})=>{
    const[count,setCount]=useState(0)

    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Email-Address:{emailaddress}</h4>
        <button className="abt-btn" onClick={()=>
          
            setCount(count+1)
        }
           
        >click</button>
        </div>
    )
}
export default UserFunction;