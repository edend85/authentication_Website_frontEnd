
import React, { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';



const RegisterPage = () => {
    const navigate = useNavigate();
    const { Register } = useContext(userContext);

    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            fullName: fullName,
            email: email,
            password: password,
            socialMediaAccount: "regForm"
        }
        console.log('Form submitted:', user);
        Register(user);

    }
    const backToLoginPage = () => {
        navigate("/")
    }
    const massageAlert = () => {
        return (
            <><div>
                <p>hiiiii</p>
            </div></>
        )
    }

    return (
        <>
            <div className='register-page'>
                <h2 style={{ textAlign: "center", color: "black" }}>Create Account</h2>
                <div className="register-container">
                    <div className="back-button-container">
                        <button className='back-button' onClick={backToLoginPage}>Back</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                placeholder='Name'
                                type="text"
                                id="Name"
                                name="name"
                                value={fullName}
                                onChange={(event) => setfullName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Email'
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                placeholder='Password'
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(event) => setpassword(event.target.value)}
                                minLength={8}
                                required
                            />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default RegisterPage;
