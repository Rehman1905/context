import {createContext, useState} from 'react'
export const userContext=createContext()
export default function UserContext({children}){
    const [user,setUser]=useState([{
        name:'admin',
        password:'123'
    }])
    return(
        <userContext.Provider value={[user,setUser]}>
            {children}
        </userContext.Provider>
    )
}