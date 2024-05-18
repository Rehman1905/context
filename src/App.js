import { Link, Outlet } from "react-router-dom";
import './Login.css'
function App() {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'100%',height:'100vh',gap:'40px',fontSize:'30px'}}>
    <h1>Main Page</h1>
    <Link className="homeLink" style={{color:'black',textDecoration:'none',borderBottom:'3px solid #000',paddingBottom:'5px'}} to={'/login'}>Login</Link>
    <Link className="homeLink" style={{color:'black',textDecoration:'none',borderBottom:'3px solid #000',paddingBottom:'5px'}} to={'/register'}>Register</Link>
    </div>
    <Outlet></Outlet>
    </>
  );
}

export default App;
