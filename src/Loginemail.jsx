import React from "react";
import "./Login.css";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
const Loginemail = (props) => {

    const { handleUser, user, email, setEmail, password, setPassword, SignInOrSignUp, setInUp } = props;

    const SignUp = (e) => {
        e.preventDefault();
        console.log(email);

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential);
                handleUser({ email, password });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const SignIn = (e) => {
        e.preventDefault();
        console.log(email);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              console.log(userCredential);
              handleUser({email,password});
            })
            .catch((error) => {
                console.log(error);
            });
    }


    console.log("email:", email, password);
    return (
        <div className="Login-box">
            {(user) ? <Redirect to="/home" /> : ""}
            <Navbar />
            <div>
                <section className="loginemail">
                    <div className="loginContainer">
                        <h1>SIGN UP LOGIN</h1>
                        <div className="email">
                            <label>UserName</label>
                            <br />
                            <input type="text" autoFocus required value={(email) ? email : ""} onChange={(e) => { setEmail(e.currentTarget.value);} }/>
                        </div>
                        <br />
                        <div className="password">
                            <label>Password</label>
                            <br />
                            <input type="password" autoFocus required value={(password) ? password : ""} onChange={e => setPassword(e.currentTarget.value)} />
                        </div>

                        <div className="Login">
                            <button className="LogIn-btn" onClick={(e) => { SignInOrSignUp == 'signup' ? SignUp(e) : SignIn(e) }}>{SignInOrSignUp == 'signup' ? 'SIGN UP' : 'SIGN IN'}</button>
                        </div>

                        <div className="signIN">
                            <p>You Have An Account? <button onClick={() => { SignInOrSignUp == 'signup' ? setInUp('signin') : setInUp('signup') }}><span>{SignInOrSignUp == 'signup' ? 'SIGN IN' : 'SIGN UP'}</span></button></p>
                        </div>

                    </div>
                </section>
            </div>
        </div>

    )
}

export default Loginemail