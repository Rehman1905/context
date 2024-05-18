import { useRef, useState } from "react"
import './Contact.css'
export default function Contact() {
    const name = useRef();
    const email = useRef();
    const surname = useRef();
    const number = useRef();
    const [user, setUser] = useState([]);

    const add = () => {
        if (name.current.value !== '' && email.current.value !== '' && surname.current.value !== '' && number.current.value !== '') {
            let newUser = [name.current.value, surname.current.value, email.current.value, number.current.value];
            setUser(prevUser => [...prevUser, newUser]);
            name.current.value = '';
            surname.current.value = '';
            email.current.value = '';
            number.current.value = '';
        }
    }

    return (
        <>
            <div className="container" >
                <div>
                    <input ref={name} placeholder="name" type="text" />
                    <input ref={surname} placeholder="surname" type='text' />
                    <input ref={email} placeholder="email" type="email" />
                    <input ref={number} placeholder="number" type="number" />
                    <button onClick={add}>Add</button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user, index) => (
                                <tr key={index}>
                                    <td>{user[0]}</td>
                                    <td>{user[1]}</td>
                                    <td>{user[2]}</td>
                                    <td>{user[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
