import { useRouteError } from "react-router"
import { ERROR_URL } from "../utils/constants";


const Error=()=>{
    const errorComp=useRouteError();
    console.log(errorComp)

    return(
        <div>
            <h1>Error</h1>
            <h2>Page not found!!!!</h2>
            <h3>{errorComp.status} : {errorComp.statusText}</h3>
            <img className="errImg" src={ERROR_URL}></img>
        </div>
    )
}
export default Error