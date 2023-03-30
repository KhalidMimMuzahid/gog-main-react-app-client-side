import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import './Login.css'

import { AiFillFacebook } from 'react-icons/ai';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm(); // ract hook from 
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('')
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError('');
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Successfully logged in')
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error)
        setSignUPError(error.message)
      });
  }

  // google sign in handle 
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        //console.log(user);
        saveUser(user.displayName, user.email);
        toast.success('Successfully logged in');
        navigate(from, { replace: true });
      })
      .catch(error => console.error(error));
  }

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('https://geeks-of-gurukul-server-side.vercel.app/users', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        //console.log("save user", data);
        navigate('/');
      })
  }

  return (
    <div className="mt-4 mb-5 ">
      <div className="form-class ">
       
        <div className="col-md-12">
          <div className="new-login-from">
            <div className="title-sing">
              <Link to="/signup">Sign Up</Link>
              <h2>
                <Link to="/login">Sign in</Link>
              </h2>
              
            </div>
            <div className="google-sing-in">
            <div className='button-google-custom'>
              <button className="btn-customize btn btn-outline-dark" onClick={handleGoogleSignIn} style={{ width: "100%", borderRadius: "30px" }}>
                <FcGoogle /> <span>Signin with Google</span>
              </button>
            </div>
            <div className='button-google-custom'>
                  <button className="btn-customize btn-fabecbook btn btn-outline" onClick={handleGoogleSignIn} style={{ width: "100%", borderRadius: "30px" }}>
                    <AiFillFacebook /> <span>Signin with Facebook</span>
                  </button>
                </div>
              <p className='form-text'>Continue with your accout </p>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="from-box-sing">
                 
                  <div className="from-box-input">
                    <input type="email"
                    name="email"
                    placeholder="Email Address"
                    {...register("email", {
                      
                    })}
                  />
                  </div>
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
               
                  <div className="from-box-input">
                    <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    {...register("password", {
              
                    })}
                  />
                  </div>
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}

                  <p>Forget Your Password?</p>
                
                  <div className="sing-up-submit">
                    <button type="submit">SIGN IN</button>
                  </div>
                  {signUpError && <p className="text-red-500-pass">{signUpError}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;