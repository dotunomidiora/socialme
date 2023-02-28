import { useNavigate } from 'react-router-dom';
import { faGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google'
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import jwt_decode from 'jwt-decode'




const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);

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