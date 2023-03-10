import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const {providerLogin,signIn }  = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then((result) => {
          const user = result.user;
    
          const currentUser = {
            userId: user.uid,
          }
    
          setLoginUserEmail(user.email);
          fetch(`https://rani-bhobani-server.vercel.app/user?email=${user.email}`)
          .then(res => res.json())
          .then(data =>{
            
            // if(data.feedback < 1){
            //     // saveUser(user.displayName, user.email,'user');
                
            // }
            navigate('/hotels');
          })

        })
          .catch((error) => console.log(error));
        
      };

    //   const saveUser = (name, email,role) =>{
    //     const user ={name, email,role};
    //     fetch('https://rani-bhobani-server.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         // setCreatedUserEmail(email);
    //     })
    // }
    return (
        <div className='max-w-[1440px] mx-auto px-5 py-24 md:py-30'>
            <button className='btn btn-outline px-4 py-2 mx-auto  text-white rounded-md shadow-lg block bg-red-500' onClick={handleGoogleSignIn}> <span className="flex items-center gap-3"> <span> CONTINUE WITH </span> <FaGoogle></FaGoogle> </span>    </button>
        </div>
    );
};

export default Login;