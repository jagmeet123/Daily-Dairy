import "./Modal.css"
import {useState} from "react";
import { firestore } from "./firebase";
function Modal(props) {
    console.log(props.modalVisible);
    const {setPosts} = props;
    let [blogNo,setBlogNo] = useState(null);
    let [text,settext] = useState(null);

    return (
        <div className={`modal123 ${props.modalVisible ? "" : "hide"}`}>
            <div className="heading"><p>CREATE POST</p></div>
            <button className="ModalClose"
                onClick={() => {
                    props.setModalVisible(false);
                }}
            >
                CLOSE
            </button>

            <button className="ModalClose"
                onClick={() => {
                    console.log('save');
                    firestore.collection("posts").add({index:blogNo,Body:text,email:props.email});
                    props.setModalVisible(false);
                }}
            >
            SAVE
            </button>
            <div className="">
                <p>Blog Number:</p><input onChange={(e)=> setBlogNo(e.currentTarget.value)}></input>
            </div>
            <div>
                What's On Your Mind?
            </div>
            <textarea onChange={(e)=> settext(e.currentTarget.value)} className="mindModal"/>
        </div>
    );
}
export default Modal;