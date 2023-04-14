import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import './Login.css'

import { AiFillFacebook, AiFillGithub, AiOutlinePhone } from 'react-icons/ai';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm(); // ract hook from 
  const { signIn, googleSignIn, FaceboolSignin, gitHubSignin,setLoading } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';


  const handleSignUp = (data) => {
    setSignUPError('');
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        saveUser(user.displayName, user.email);
        //toast.success('Successfully logged in')
        setLoading(false)
        // checking the phone is verified or not
        fetch(`https://geeks-of-gurukul-server-side.vercel.app/userinfoforphone/${data.email}`)
        .then(res => res.json())
        .then(data =>{
            // setusername(data) ;
            // setLoading(false)
            console.log(data);
            if(data.status === 200) {
              if(user.emailVerified) {
                navigate(from, { replace: true });
              } else {
                toast.success("Check you inbox & Please verify your email address");
              }
              
            } else{
              navigate("/login/phone-sign-up");
            }
        } ) 
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
        setLoading(false)
        // checking the phone is verified or not
        fetch(`https://geeks-of-gurukul-server-side.vercel.app/userinfoforphone/${user.email}`)
        .then(res => res.json())
        .then(data =>{
            // setusername(data) ;
            // setLoading(false)
            console.log(data);
            if(data.status === 200) {
              navigate(from, { replace: true });
            } else{
              navigate("/login/phone-sign-up");
            }
        } )

        // //navigate(from, { replace: true });
        // navigate("/login/phone-sign-up");
      })
      .catch(error => console.error(error));
  }

  // for facebook signin 
  const handleFaceboolSignin = () =>{
    FaceboolSignin()
    .then((result) => {
      const user = result.user;
      //console.log("Facebook user: ", user);
      saveUser(user.displayName, user.email);
      toast.success("Successfully logged in");
      setLoading(false)
      // checking the phone is verified or not
      fetch(`https://geeks-of-gurukul-server-side.vercel.app/userinfoforphone/${user.email}`)
      .then(res => res.json())
      .then(data =>{
          // setusername(data) ;
          // setLoading(false)
          console.log(data);
          if(data.status === 200) {
            navigate(from, { replace: true });
          } else{
            navigate("/login/phone-sign-up");
          }
      } )
      // //navigate(from, { replace: true });
      // navigate("/login/phone-sign-up");
    })
    .catch((error) => console.error(error));
  }

   // for GitHub signin 
   const handlegitHubSignin = () =>{
    gitHubSignin()
    .then((result) => {
      const user = result.user;
      //console.log("GitHub User ", user);
      //saveUser(user.displayName, user.email);
      setLoading(false)
      //toast.success("Successfully logged in");
      //navigate(from, { replace: true });
      navigate("/login/phone-sign-up");
    })
    .catch((error) => console.error(error));
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
        //navigate('/');
      })
  }

  return (
    <div className='sing-up'>
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
                    <FcGoogle /> <span>CONTINUE WITH GOOGLE</span>
                  </button>
                </div>
                <div className='button-google-custom'>
                  <button className="btn-customize btn-fabecbook btn btn-outline" onClick={handleFaceboolSignin} style={{ width: "100%", borderRadius: "30px" }}>
                    <AiFillFacebook /> <span>CONTINUE WITH FACEBOOK</span>
                  </button>
                </div>
                {/* <div className='button-google-custom'>
                  <button className="btn-customize btn-github btn btn-outline" onClick={handlegitHubSignin} style={{ width: "100%", borderRadius: "30px" }}>
                    <AiFillGithub /> <span>CONTINUE WITH GITHUB</span>
                  </button>
                </div> */}
                {/* <div className='button-google-custom'>
                    <Link to='phone-sign-up'>
                    <button className="btn-customize btn-phone btn btn-outline"  style={{ width: "100%", borderRadius: "30px" }}>
                      <AiOutlinePhone /> <span>CONTINUE WITH PHONE</span>
                    </button>
                    </Link>
                </div> */}
                <p className='form-text'>Continue with your accout </p>
                <form onSubmit={handleSubmit(handleSignUp)}>
                  <div className="from-box-sing">

                    <div className="from-box-input">
                      <input type="email"
                        name="email"
                        //onChange={(e) => setUser(e.target.value)}
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

                    <Link to='/forget-pass'><p className=' form-text'>Forget Your Password?</p></Link>

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
    </div>

  );
};

export default Login;