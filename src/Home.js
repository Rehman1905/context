import { useContext } from "react"
import { countContext, userContext } from "./userContext/UserContext"
import { user2context } from "./userContext/user"
import { Link } from "react-router-dom"
export default function Home() {
    const [ad, setAd] = useContext(user2context)
    console.log(ad)
    return (
        <>
            <div className="container" style={{fontSize:'30px'}}>
                <h2>name:{ad.name}</h2>
                <h3>Welcome</h3>
                <Link className="link" to={'/contact'}>Contact</Link>
            </div>
        </>
    )
}