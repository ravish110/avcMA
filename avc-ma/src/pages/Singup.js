import  React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import "./signup.css";


const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

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

    const signupWithGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
    }

    return (
        <div className="singup-page">
            <form>
                <label>Email
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>Password
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <button onClick={signupWithGoogle}>Signin with Gooogle</button>
                <button onClick={createUser}>Create User</button>
            </form>
        </div>
    )
}

export default SingupPage;