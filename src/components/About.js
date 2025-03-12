import UserFunction from "./UserFunction"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component{
    constructor(props){
        console.log("Parent constructor")
        super(props)


    }
    componentDidMount(){
        console.log("Parent did mount")
    }
    render(){

        console.log("Parent render")
        return(
            <div className="about">
                <h1>About</h1>
                <h2>This is the about page of the restaurant</h2>
                <UserFunction name={"Akshay"} location={"Pune"} emailaddress={"akshay@123"}/>
                <UserClass name={"karthik"} location={"chennai"} emailaddress={"karthik#566"}/>
            </div>
        )
    }
}


export default About