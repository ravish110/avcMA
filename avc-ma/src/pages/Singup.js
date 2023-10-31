import  React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";


const auth = getAuth(app);

const SingupPage = () => {
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then(value => alert("Sucess!!"));
    }

    return (
        <div className="singup-page">
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={createUser}>Create User</button>
        </div>
    )
}

export default SingupPage;