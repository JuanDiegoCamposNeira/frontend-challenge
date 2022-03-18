// React 
import React, { useState } from "react";
// Libraries
import axiosClient from "../../Network/AxiosClient";
// Components
import Footer from "../../Components/Footer/Footer";
// Styles 
import "./Login.css"; 
// Imported images
import twitterImage from '../../Assets/Images/twitterImage.png';
import twitterLogo from '../../Assets/Images/twitterLogo.png';


export default function Login() {

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    const loginUser = async (event: any) => {
        // Prevent page reload after submitting form 
        event.preventDefault(); 
        // 
        const user = { username: username, password: password }; 
        // 
        const userId = await axiosClient.post("/users/login", user);
    }

    return (
        <>
            <div className="login-content-wrapper">
                {/* Image - rendered based on screen size */}
                <div className="image-wrapper">
                    <img className="main-image" src={twitterImage} alt="Default twitter image" />
                </div>

                {/* User form */}
                <div className="form-wrapper">

                    {/* Title */}
                    <div className="form-title-wrapper">
                        <img className="title-logo" src={twitterLogo} alt="twitter logo" />
                        <p className="title-text">Log in to Twitter</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={(event) => loginUser(event)}>
                        <input type="text" onChange={(event) => setUsername(event.target.value)} placeholder="Phone number, email address" />
                        <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                        <button type="submit">Log In</button>
                    </form>

                    {/* Links */}
                    <div className="links-wrapper">
                        <a className="link" href="" target="_blank" rel="noopener noreferrer">Forgot password?</a>
                        <a className="link" href="" target="_blank" rel="noopener noreferrer">Sign up to Twitter</a>
                    </div>

                </div>             
            </div>
            {/* Footer - rendered based on screen size */}
            <Footer />
        </>
    );
}