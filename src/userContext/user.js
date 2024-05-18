import {createContext, useState} from 'react'
export const user2context=createContext()
export default function User2({children}){
    const [user2,setUser2]=useState([])
    return(
        <user2context.Provider value={[user2,setUser2]}>
            {children}
        </user2context.Provider>
    )
}