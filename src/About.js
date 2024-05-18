import { useContext } from "react"
import { countContext } from "./userContext/UserContext"

export default function About(){
    const [count,setCount]=useContext(countContext)
    return(
        <>
        <h1>About page:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
        </>
    )
}