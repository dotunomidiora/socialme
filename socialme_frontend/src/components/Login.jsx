import { useNavigate } from 'react-router-dom';
import { faGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google'
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import jwt_decode from 'jwt-decode'

import { client } from '../client';




const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    //let's set them to local storage
    localStorage.setItem('user', JSON.stringify(response.profileObj));
   //time to deconstruct some properties
    const { name, googleId, imageUrl} = response.profileObj;
//transfer the Google user info to a Sanity document so it can be saved to the db
//this doc contains the fields that we have specified for our Sanity user schema (user.js)
const doc = {
  _id: googleId,
  _type: 'user',
  userName: name,
  image: imageUrl
}

client.createIfNotExists(doc)
.then(() => {
  navigate('/', {replace: true})
})
  }
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
            <div className='flex justify-start items-center flex-col h-screen'>
                <div className='relative w-full h-full'>
                    <video
                        src={shareVideo}
                        type="video/mp4"
                        loop
                        controls={false}
                        muted
                        autoPlay
                        className="h-full w-full object-cover"
                    />
                    <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                        <div className='p-5'>
                            <img src={logo} width="130px" alt='logo' />
                        </div>
                        <div className='shadow-2xl'>
                            <GoogleLogin
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy="single_host_origin"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}

export default Login