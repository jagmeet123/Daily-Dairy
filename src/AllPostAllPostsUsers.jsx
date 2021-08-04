import { useEffect, useState } from "react";
import { firestore } from "./firebase";
import { Card, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";
import "./allPosts.css"

let AllPostsUsers = () => {
    let [all_, setAll_] = useState([]);

    useEffect(() => {
        let f = async () => {

            await firestore.collection("posts").onSnapshot((querysnapshot) => {
                let tempArr = []
                querysnapshot.forEach((document) => {
                    console.log(document.data())
                    tempArr.push({
                        index: document.data().index,
                        Body: document.data().Body,
                        email: document.data().email
                    });
                })
                setAll_(tempArr);
            });
        }

        f();
    }, []);

    return (
        <>
            <h1>All POSTS</h1>
            <div>
                <Navbar />
            </div>
            <div className="containerAllPosts">
                {
                    all_.map((el) => {
                        return (
                            <div className="posts" key={el.index}>
                                <Card>
                                    <Card.Header as="h5">Blog-{el.index}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            {el.Body}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default AllPostsUsers;