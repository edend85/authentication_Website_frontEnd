import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile";
import "./Styles/LoginPageStyle.css"
import "./Styles/RegisterPage.css";
import "./Styles/Profile.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./Context/UserContext";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="796518374205-eqobq1dr3tgt8jjujcho37c4vrh4lqr5.apps.googleusercontent.com">
        <UserContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}>
              </Route>
              <Route path="/Register" element={<Register />}>
              </Route>
              <Route path="/Profile" element={<Profile />}>
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext>
      </GoogleOAuthProvider>


    </>
  )
}

export default App
