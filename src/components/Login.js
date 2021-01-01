import React , {useState}from 'react'
import './Login.css'
import {auth} from '../firebase'
import { login } from '../features/counter/userSlice';
import { useDispatch } from 'react-redux';

function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch()

    const register = e => {
        e.preventDefault()
        if(!name){
            alert("Please Enter Full Name")
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    }
    
    const loginToApp = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic
            }))
        })
        .catch((error) => {
            alert(error)
        })
    }

    return (
        <div className="login">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt=""/>
           <form>
               <input type="text" value={name} onChange={e=> setName(e.target.value)} placeholder="Full Name (required if registering)"/>
               <input type="text" onChange={e => setProfilePic(e.target.value)} placeholder="Profile Pic URL(optional)"/>
               <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
               <input type="pass" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>

               <button onClick={loginToApp}>Sign In</button>
           </form>
           <p>New to LinkedIn? <span className="login__register" onClick={register}>Join now</span> </p>
        </div>
    )
}

export default Login
