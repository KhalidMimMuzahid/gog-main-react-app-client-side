import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../../context/AuthProvider";
import "./SignUp.css";

const SignUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm(); // ract hook from 
  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('')
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError('');

    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('User Created Successfully.')
        const userInfo = {
          displayName: data.name,
          email: data.email,
          phone: data.phone
        }
        updateUserProfile(userInfo)
          .then(() => {
            console.log("Save Use: ", userInfo);
            saveUser(data.name, data.email);
          })
          .catch(err => console.log(err));
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
       
{/* ----------------------------start resgistration from  =-----------------------------*/}
        <div className="col-md-12">
          <div className="new-login-from">
            <div className="title-sing">
              <h2>
                <Link to="/signup">Sign Up</Link>
              </h2>
              <Link to="/login">Sign in</Link>
            </div>
            <div className="google-sing-in">
              <div className="text-center googelIcon">
                <button className="google-Button" onClick={handleGoogleSignIn}><FcGoogle /></button>

              </div>
              <p>Or use your Email and Mobile Number for registration </p>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="from-box-sing">
                  <div className="from-box-input">
                    <input 
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Name is Required",
                    })}
                    />
                    {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                  </div>
                  <div className="from-box-input">
                    <input type="email"
                    name="email"
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Email is Requried",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                  </div>
                  <div className="from-box-input">
                    <input type="number" placeholder="Mobile Number" 
                    name="phone"
                    {...register("phone", {
                      required: "Phone is Requried",
                      maxLength: {
                        value: 12,
                        message: "Phone number must be uneder 12 characters",
                      },
                    })}
                    />
                    {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}
                  </div>
                  <div className="from-box-input">
                    <input  type="password"
                    name="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters long",
                      },
                      pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                        message:
                          "Password must have uppercase, number and special characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                  </div>
                  <div className="from-box-input">
                    <input type="password"
                    name="passwordConfirm" placeholder="Confirm Password" 
                    {...register("passwordConfirm", {
                      required: "Confirm Password is Requried",
                    })}
                    />
                    {errors.passwordConfirm && (
                    <p className="text-red-500">{errors.passwordConfirm.message}</p>
                    )}
                  </div>
                  <div className="sing-up-submit">
                    <button type="submit">SING UP</button>
                  </div>
                  {signUpError && <p className="text-red-500">{signUpError}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
{/* --------------------------end rgitration from---------------------  */}
      </div>
    </div>
  );
};

export default SignUp;
