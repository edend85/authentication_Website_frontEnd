
import React, { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';



const RegisterPage = () => {
    const navigate = useNavigate();
    const { Register } = useContext(userContext);

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            firstName: firstName,
            lastName: lastName,
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
                                placeholder='First Name'
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={(event) => setfirstName(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                placeholder='Last Name'
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={(event) => setlastName(event.target.value)}
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
