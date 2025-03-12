import React from "react"


class UserClass extends React.Component{
constructor(props){
    super(props)

    console.log("Child constructor")
    this.state={
        count:0 ,
        
    }
}
componentDidMount(){
    console.log("Child did mount")
}
render(){
    console.log("Child render");

    const {name,location,emailaddress}=this.props
    const{count,count2}=this.state
    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Email-Address:{emailaddress}</h4>
        </div>
    )
}
}
export default UserClass;