import { Redirect,Link } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import "./Blog.css";

let Blog=()=>{
    return(
        <div className="abc">
            <div>
                <Navbar/>
            </div>
            <div className="blogContainer">
                <div className="blogContainerData">
                    <p>BLOGS</p>
                    <span>Blogging is just writing — writing using a particularly efficient type of publishing technology.</span>
                </div>

                <button><Link to="/login" className="btn"> Login </Link></button>
            </div>
        </div>
    );
};

export default Blog;