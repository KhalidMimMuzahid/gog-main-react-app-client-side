import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../../context/AuthProvider";

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
                    email: data.email
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

    const saveUser = (name, email) =>{
        const user ={name, email};
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            //console.log("save user", data);
            navigate('/');
        })
    }

  return (
    <div className="mt-4 mb-5 ">
      <div className="form-class ">
        <div className="col-md-12 col-lg-12 ">
          <div className="bg-login">
            <div className="singForm">
              <div className="title-login text-center">
                <p>Please Register</p>
              </div>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="input-form">
                  <input
                    type="text"
                    name="name"
                    {...register("name", {
                      required: "Name is Required",
                    })}
                    placeholder="Full Name"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="input-form">
                  <input
                    type="email"
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
                <div className="input-form">
                  <input
                    type="password"
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
                <button className="submit" type="submit">
                  REGISTER
                </button>
                {signUpError && <p className="text-red-600">{signUpError}</p>}
              </form>
                    <p className="text-center">Or Sing up with</p>
              <div className="text-center googelIcon">
                                   <Button className="googleSignUpButton" onClick={handleGoogleSignIn}><FcGoogle/></Button>
                                    
              </div>

              <div className="forget">
                                    <Link to='/login'>Have a account Login</Link>
                                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
