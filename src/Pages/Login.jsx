import { useState, useContext, useEffect } from 'react';
import { userContext } from '../Context/UserContext';
import { useNavigate } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';

export default function Login() {
  //navigate 
  const navigate = useNavigate();
  //context
  const { Login, currentUser, handleGoogle } = useContext(userContext);
  //variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //entering with username and password
  const handleSubmit = () => {
    console.log('email,password :>> ', email, password);
    Login(email, password);
  }
  const responseFacebook = (response) => {
    console.log(response);
  }
  //when current user is defined by register form or social network
  useEffect(() => {
    if (currentUser) {
      navigate('/Profile')
    }
  })

  return (
    <>
      <div id='continer'>
        <div id='login'>
          <h1>Login Page</h1>
          <div className="three-rows">
            <div className='field-holder'>
              <input type="text" id='username' onChange={(e) => { setEmail(e.target.value) }} required />
              <label>Email</label>
            </div>
            <div className='field-holder'>
              <input type="password" id='password' onChange={(e) => { setPassword(e.target.value) }} required />
              <label>Password</label>
            </div>
            <div className='login-btn'>
              <button onClick={handleSubmit}>Login</button>
            </div>
          </div>
          <div className='signup'>
            <div className='signup-title'></div>
            <h4>Sign Up With</h4>
            <div className='signup-methods'>
              <button onClick={() => handleGoogle()}>
                <svg width="55" height="55" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M87.3125 35.451H83.7615V35.268H44.085V52.902H68.9996C65.3648 63.1672 55.5978 70.536 44.085 70.536C29.4774 70.536 17.634 58.6926 17.634 44.085C17.634 29.4774 29.4774 17.634 44.085 17.634C50.8278 17.634 56.9622 20.1777 61.633 24.3327L74.1025 11.8633C66.2289 4.52532 55.697 0 44.085 0C19.7391 0 0 19.7391 0 44.085C0 68.4309 19.7391 88.17 44.085 88.17C68.4309 88.17 88.17 68.4309 88.17 44.085C88.17 41.1291 87.8658 38.2437 87.3125 35.451Z" fill="#FFC107" />
                  <path d="M5.08301 23.5656L19.5671 34.1879C23.4863 24.4848 32.9778 17.634 44.085 17.634C50.8278 17.634 56.9622 20.1777 61.633 24.3327L74.1025 11.8633C66.2289 4.52532 55.697 0 44.085 0C27.152 0 12.4672 9.55983 5.08301 23.5656Z" fill="#FF3D00" />
                  <path d="M44.085 88.17C55.4721 88.17 65.8189 83.8122 73.6418 76.7255L59.9975 65.1797C55.5713 68.5323 50.0695 70.536 44.085 70.536C32.6185 70.536 22.8823 63.2245 19.2144 53.021L4.83832 64.0974C12.1344 78.3743 26.9514 88.17 44.085 88.17Z" fill="#4CAF50" />
                  <path d="M87.3126 35.451H83.7615V35.268H44.085V52.902H68.9997C67.2539 57.8329 64.082 62.0849 59.9909 65.1819C59.9931 65.1797 59.9953 65.1797 59.9975 65.1775L73.6418 76.7233C72.6763 77.6006 88.17 66.1275 88.17 44.085C88.17 41.1291 87.8658 38.2437 87.3126 35.451Z" fill="#1976D2" />
                </svg>
              </button>
              <button onClick={() => { navigate("/Register") }}>
                <svg width="55" height="55" viewBox="0 0 93 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M59.4287 47.4141L38.4287 68.4141C38.0537 68.7891 37.545 68.9998 37.0146 68.9998C36.4843 68.9998 35.9756 68.7891 35.6006 68.4141C35.2256 68.039 35.0149 67.5304 35.0149 67C35.0149 66.4696 35.2256 65.961 35.6006 65.5859L53.1863 48H2C1.46957 48 0.96086 47.7893 0.585787 47.4142C0.210714 47.0391 0 46.5304 0 46C0 45.4696 0.210714 44.9609 0.585787 44.5858C0.96086 44.2107 1.46957 44 2 44H53.1863L35.6006 26.4141C35.2256 26.039 35.0149 25.5304 35.0149 25C35.0149 24.4696 35.2256 23.961 35.6006 23.5859C35.9756 23.2109 36.4843 23.0002 37.0146 23.0002C37.545 23.0002 38.0537 23.2109 38.4287 23.5859L59.4287 44.5859C59.6145 44.7716 59.7618 44.992 59.8624 45.2347C59.9629 45.4773 60.0146 45.7374 60.0146 46C60.0146 46.2626 59.9629 46.5227 59.8624 46.7653C59.7618 47.008 59.6145 47.2284 59.4287 47.4141ZM86.0146 0H50.0146C49.4842 0 48.9755 0.210714 48.6004 0.585787C48.2254 0.96086 48.0146 1.46957 48.0146 2C48.0146 2.53043 48.2254 3.03914 48.6004 3.41421C48.9755 3.78929 49.4842 4 50.0146 4H86.0146C86.5449 4.00057 87.0533 4.21146 87.4282 4.58641C87.8032 4.96136 88.0141 5.46974 88.0146 6V86C88.0141 86.5303 87.8032 87.0386 87.4282 87.4136C87.0533 87.7885 86.5449 87.9994 86.0146 88H50.0146C49.4842 88 48.9755 88.2107 48.6004 88.5858C48.2254 88.9609 48.0146 89.4696 48.0146 90C48.0146 90.5304 48.2254 91.0391 48.6004 91.4142C48.9755 91.7893 49.4842 92 50.0146 92H86.0146C87.6054 91.9982 89.1305 91.3655 90.2553 90.2407C91.3802 89.1158 92.0129 87.5908 92.0146 86V6C92.0129 4.40925 91.3802 2.88416 90.2553 1.75932C89.1305 0.63449 87.6054 0.00177734 86.0146 0Z" fill="black" />
                </svg>
              </button>
              <FacebookLogin
                appId="736280548429217"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
