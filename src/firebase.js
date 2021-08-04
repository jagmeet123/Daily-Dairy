import firebase from "firebase/app";
import "firebase/firestore";

// Step-1
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAjpad3ovQyrAAtCI1ev3EZ5rcACYT0HMg",
    authDomain: "anonymous-69946.firebaseapp.com",
    projectId: "anonymous-69946",
    storageBucket: "anonymous-69946.appspot.com",
    messagingSenderId: "79270649652",
    appId: "1:79270649652:web:c6aa387e295c9eac738f61"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  // Step-2
  export const auth = firebase.auth();

  //Step 3=> firebase console; enable google login in auth panel

  //Step 4
  let provider = new firebase.auth.GoogleAuthProvider();
  export const SignInWithGoogle = ()=>{
      auth.signInWithPopup(provider);
  }

// export const clearInput=()=>{
//     props.setEmail(null);
//     props.setPassword(null);
// }

// export const clearErrors=()=>{
//     props.setEmailError(null);
//     props.setPasswordError(null);
// }

// export const SignInWithEmail = (email,password)=>{
//     console.log(email,password)
//     auth.signInWithEmailAndPassword(email,password)
//     .catch((err)=>{
//         switch(err.code){
//             case "auth/invalid-email":
//             case "auth/user-disabled":
//             case "auth/user-not-found":
//                 // props.setEmailError(err.message);
//                 break;

//             case "auth/wrong-password":
//                 // props.setPasswordError(err.message);
//                 break;
//         }
//     })
// }

// export const SignUp = (props)=>{
//     auth().createUserWithEmailAndPassword(props.email,props.password)
//     .catch((err)=>{
//         switch(err.code){
//             case "auth/email-already-in-use":
//             case "auth/invalid-email":
//                 props.setEmailError(err.message);
//                 break;
//             case "auth/weak-password":
//                 props.setPasswordError(err.message);
//                 break;
//         }
//     });
// }

export default firebase;