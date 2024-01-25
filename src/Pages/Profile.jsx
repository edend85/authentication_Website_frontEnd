import React from 'react'
import { useContext } from 'react'
import { userContext } from '../Context/UserContext'
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function Profile() {

    const navigate = useNavigate();

    const { currentUser, setCurrentuser, setTempUser } = useContext(userContext);

    const logOut = () => {
        googleLogout();
        setCurrentuser(null);
        setTempUser(null);
        navigate("/")
    };
    function stringToColor(string) {
        let hash = 0;
        let i;

        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <>
            <div className="profile-container">
                <h1>Profile Page</h1>
                {
                    currentUser ? (
                        <div className="profile-info">
                            {
                                currentUser.socialMediaAccount == "google" || currentUser.socialMediaAccount == "facebook" ?
                                    <Stack direction="row" spacing={2} style={{ justifyContent: "center" }}>
                                        <Avatar src={currentUser.picture} />
                                    </Stack>
                                    :
                                    <Stack direction="row" spacing={2} style={{ justifyContent: "center", textTransform: "capitalize" }}>
                                        <Avatar {...stringAvatar(currentUser.fullName)} />
                                    </Stack>

                            }
                            <p>Name: {currentUser.fullName}</p>
                            <p>Email: {currentUser.email}</p>
                            <button onClick={logOut}>Log out</button>
                        </div>
                    ) : (
                        null
                    )

                }
            </div>
        </>

    )
}