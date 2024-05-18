import { useContext, useRef } from "react"
import { userContext } from "./userContext/UserContext"
import { Link, useNavigate } from "react-router-dom"
import { user2context } from "./userContext/user"
import './Login.css'
export default function Login() {
    const [user, setUser] = useContext(userContext)
    const [user2, setUser2] = useContext(user2context)
    const name = useRef()
    const password = useRef()
    const navigate = useNavigate();
    const login = () => {
        if (name.current.value === '' && password.current.value === '') {
            alert('include name and password')
            return
        }
        for (let i of user) {
            if (name.current.value === i.name && password.current.value === i.password) {
                navigate('/home')
                setUser2({ name: name.current.value, password: password.current.value })
                return
            }
        }
        alert("Please register")
    }
    return (
        <>
            <div className="container">
                <input ref={name} type="text" placeholder="name"></input>
                <input ref={password} type="password" placeholder="password"></input>
                <button onClick={login}>Login</button>
                <Link className="link" to={'/register'}>Register</Link>
            </div>
        </>
    )
}