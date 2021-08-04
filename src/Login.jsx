import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth, SignInWithGoogle } from "./firebase";


let Login = (props)=>{

    useEffect(()=>{

        auth.onAuthStateChanged((user)=>{
            if(user){
                let {displayName,email} = user;
                props.handleUser({displayName,email});
            }else{
                props.handleUser(user);
            }
        });

    },[]);

    return (
        <div>
            {props.user?<Redirect to="/home"/>:""}
            <h1>Login</h1>
            <div className="">

            </div>

            <button onClick={SignInWithGoogle} type="submit">
                Sign In With Google
            </button>
        </div>

    );
}

export default Login;