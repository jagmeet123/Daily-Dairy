import { Redirect } from "react-router-dom";
import { auth, firestore } from "./firebase";
import firebase from "firebase";
import Login from "./Login";
import Navbar from "./Navbar";
import "./Home.css"
import Slider from "./Slider";
import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Modal from "./Modal"

let Home = (props) => {
    // console.log("Home:", props.user);
    const { handleUser, user, email, setEmail, password, setPassword, hasAccount, setHasAccount } = props;

    let [AllPosts, setPosts] = useState([]);
    let [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {

        let f = async () => {
            await firestore.collection("posts").orderBy("index","asc").onSnapshot((querySnapShot) => {

                let tempArr = [];
                querySnapShot.forEach((doc) => {
                    if(doc.data().email==props.email){
                        tempArr.push({
                            id: doc.id,
                            data: doc.data(),
                        });
                    }
                    console.log(doc);
                });

                setPosts(tempArr);
            })
        }

        f();

    }, []);

    return (
        <div>
            <div>
                <Navbar email={props.email} user={user} />
            </div>
            {props.user ?
                <div>
                    <div className="container123">
                        <div>
                            <Slider />
                        </div>
                        <div className="posts123">

                            <div className="newPost">
                                <button onClick={()=>{
                                    // console.log(modalVisible)
                                    setModalVisible(true);
                            }}>Add Post</button>
                            </div>

                            {modalVisible==true?<Modal modalVisible setModalVisible={setModalVisible} email={email} setPosts={setPosts} AllPosts={AllPosts}/>:""}

                            {
                                AllPosts.map((el) => {
                                    return (
                                        <div className="posts" key={el.data.index}>
                                            <Card>
                                                <Card.Header as="h5">Blog-{el.data.index}</Card.Header>
                                                <Card.Body>
                                                    {/* <Card.Title>Special title treatment</Card.Title> */}
                                                    <Card.Text>
                                                        {el.data.Body}
                                                    </Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>

                    <button className="signOut123" onClick={() => {
                        firebase.auth().signOut().then(() => {
                            console.log("Succesfully logged out..");
                            handleUser(null);
                            setEmail(null); setPassword(null);
                            setHasAccount(null);
                        }).catch(() => {
                            console.log("errow while log out")
                        })
                    }}>
                        Sign Out
                    </button>
                </div>
                : <Redirect to="/login" />
            }
        </div >
    );
}

export default Home;