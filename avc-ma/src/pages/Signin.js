import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

const SignIn = () => {
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");

    const singinUser = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((value) => console.log('signin success!!'))
        .catch((err) => console.log(err));
    }

    return (
        <div className="singup-page">
            <h1>Singin here</h1>
            <form>
                <label>Email
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>Password
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type='button' onClick={singinUser}>Signin</button>
            </form>
        </div>
    )
}

export default SignIn