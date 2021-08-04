import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import "./Navbar.css";


let Navbar = (props) => {
    const { handleUser, user, email, setEmail, password, setPassword, SignInOrSignUp, setInUp } = props;

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <Link class="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to={user?"/home":"/login"}><span>Home</span> <span class="sr-only"></span></Link>
                    </li>


                    <li class="nav-item">
                        <Link class="nav-link" to="/allPosts"><span>All Posts</span></Link>
                    </li>

                    <div class="nav-item" className="username">
                        <p>{(user) ? <p>{"Welcome: "+email.split('@')[0]}</p> : ""}</p>
                    </div>

                </ul>
                {(user) ? (<form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>) : (<button className="mind">What's On Your mind?</button>
                )}

            </div>
        </nav>
    )
}

export default Navbar;