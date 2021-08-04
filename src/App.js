import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firestore } from "./firebase";
import Login from "./Login";
import Home from "./Home";
import Blog from "./Blog";
import Loginemail from "./Loginemail"
import Navbar from "./Navbar";
import AllPostsUsers from "./AllPostAllPostsUsers";


function App() {

  let [user, setUser] = useState(null);
  let [email, setEmail] = useState(null);
  let [password, setPassword] = useState(null);
  let [emailError, setEmailError] = useState(null);
  let [passwordError, setPasswordError] = useState(null);
  let [hasAccount, setHasAccount] = useState(false);
  let [SignInOrSignUp,setInUp] = useState('signin');

  useEffect(() => {

    let f = async () => {
      let querySnapshot = await firestore.collection("posts").limit(3).orderBy("index", "asc").get();
      querySnapshot.forEach((document) => {
        console.log(document.data().Body);
      });
    }
    f();

  }, []);

  // console.log("App:", user);
  console.log(SignInOrSignUp);

  return (
    <div>

      {/* <div>{(user) ? <Home user={user} /> : <Login handleUser={setUser} user={user}/>}</div> */}
      <Router>

        <Switch>

          <Route path="/home">
            <Home user={user} handleUser={setUser} email={email} setEmail={setEmail} password={password} setPassword={setPassword} SignInOrSignUp={SignInOrSignUp} setInUp={setInUp}/>
          </Route>

          <Route path="/allPosts">
            <AllPostsUsers />
          </Route>

          <Route path="/login">
            <Loginemail handleUser={setUser} user={user} email={email} setEmail={setEmail} password={password} setPassword={setPassword} SignInOrSignUp={SignInOrSignUp} setInUp={setInUp}/>
          </Route>

          <Route path="/">
            <Blog />
          </Route>

        </Switch>

      </Router>

    </div>
  );

}

export default App;
