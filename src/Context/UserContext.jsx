import { createContext, useEffect } from "react";
import { base_url } from "../../utils/api";
import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
export const userContext = createContext("");

export default function UserContext({ children }) {

    const [currentUser, setCurrentuser] = useState("");
    const [tempUser, setTempUser] = useState("");
    const [massage, setMassage] = useState("");

    const Register = async (user) => {
        console.log('user :>> ', user);
        try {
            const url = `${base_url}/api/user/Register`
            await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: user.fullName,
                    email: user.email,
                    password: user.password || "",
                    picture: user.picture || "",
                    socialMediaAccount: user.socialMediaAccount
                })
            }).then(response => response.json())
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }
    const Login = async (email, password) => {
        try {
            const url = `${base_url}/api/user/Login`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            if (response.ok) {
                const user = await response.json();
                setCurrentuser(user);
                return;
            }

        } catch (error) {
            alert('not match :>> ');
        }
    }
    //entring with google account 
    const handleGoogle = useGoogleLogin({
        onSuccess: (codeResponse) => setTempUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });


    /*useEffect(
        () => {
            if (tempUser) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tempUser.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${tempUser.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        let user = {
                            firstName: res.data.given_name,
                            lastName: res.data.family_name,
                            email: res.data.email,
                            picture: res.data.picture,
                            socialMediaAccount: "google"
                        }
                        Register(user);
                        setCurrentuser(user);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [tempUser]
    );*/

    let allValues = {
        Register,
        Login,
        setCurrentuser,
        setTempUser,
        tempUser,
        currentUser,
        handleGoogle

    }
    return (
        <userContext.Provider value={allValues}>
            {children}
        </userContext.Provider>
    );

}