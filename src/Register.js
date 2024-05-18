import { useContext, useRef } from "react"
import { Link, Navigate } from "react-router-dom"
import { userContext } from "./userContext/UserContext"
import { useNavigate } from "react-router-dom"
export default function Register() {
    const [user, setUser] = useContext(userContext)
    const name = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const register = () => {
        if (name.current.value === '' || password.current.value === '') {
            alert('includes name and password')
            return
        }
        setUser([...user, { name: name.current.value, password: password.current.value }])
        console.log(user)

        navigate('/login')
        // name.current.value===''
        // password.current.value===''
    }
    return (
        <>
            <div className="container">
                <input ref={name} type="text" placeholder="name"></input>
                <input ref={password} type="password" placeholder="password"></input>
                <button onClick={register}>Register</button>
            </div>
        </>
    )
}