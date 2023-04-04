import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../context/AuthProvider";
import "./SignUp.css";

import { AiOutlineEyeInvisible, AiOutlineEye, AiFillFacebook, AiFillGithub } from 'react-icons/ai';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // ract hook from
  const { createUser, updateUserProfile, googleSignIn, FaceboolSignin } =
    useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // for hide and show pass
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError("");

    // for the password cheack 
    if (data.password !== data.passwordConfirm) {
      return setSignUPError("Password did not matched!");
    }

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
          email: data.email,
          phone: data.phone,
        };
        updateUserProfile(userInfo)
          .then(() => {
            console.log("Save Use: ", userInfo);
            saveUser(data.name, data.email, data.phone);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  // google sign in handle
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        //console.log(user);
        saveUser(user.displayName, user.email);
        toast.success("Successfully logged in");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  // for facebook signin 
  const handleFaceboolSignin = () =>{
    FaceboolSignin()
    .then((result) => {
      const user = result.user;
      console.log("Facebook user: ", user);
      saveUser(user.displayName, user.email);
      toast.success("Successfully logged in");
      navigate(from, { replace: true });
    })
    .catch((error) => console.error(error));
  }

  const saveUser = (name, email, phone) => {
    const user = { name, email, phone };
    fetch("https://geeks-of-gurukul-server-side.vercel.app/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("save user", data);
        navigate("/");
      });
  };

  return (

    <div className='sing-up'>
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
                  <div className='button-google-custom'>
                    <button className="btn-customize btn btn-outline-dark" onClick={handleGoogleSignIn} style={{ width: "100%", borderRadius: "30px" }}>
                      <FcGoogle /> <span>Signin with Google</span>
                    </button>
                  </div>
                  <div className='button-google-custom'>
                    <button className="btn-customize btn-fabecbook btn btn-outline" onClick={handleFaceboolSignin} style={{ width: "100%", borderRadius: "30px" }}>
                      <AiFillFacebook /> <span>Signin with Facebook</span>
                    </button>
                  </div>
                  <div className='button-google-custom'>
                    <button className="btn-customize btn-github btn btn-outline" onClick={handleFaceboolSignin} style={{ width: "100%", borderRadius: "30px" }}>
                      <AiFillGithub /> <span>Signin with GitHub</span>
                    </button>
                  </div>
                </div>
                <p style={{ marginTop: "-20px", fontSize: "12px" }}>Or use your Email and Mobile Number for registration </p>
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

                    </div>
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                    <div className="from-box-input">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        {...register("email", {
                          required: "Email is Requried",
                        })}
                      />

                    </div>
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                    <div className="from-box-input">
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        name="phone"
                        {...register("phone", {
                          required: "Phone is Requried",
                          pattern: {
                            value: /^(0|91)?[6-9][0-9]{9}$/,
                            message: "Please provide valid phone number",
                          },
                        })}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500">{errors.phone.message}</p>
                    )}
                    <div className="from-box-input">
                      <div className="pass-fild">
                        <input
                          type={showPassword ? "text" : "password"}
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
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                      </div>


                    </div>
                    {errors.password && (
                      <p className="text-red-500">{errors.password.message}</p>
                    )}
                    <div className="from-box-input">
                      <div className="pass-fild">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="passwordConfirm"
                          placeholder="Confirm Password"
                          {...register("passwordConfirm", {
                            required: "Confirm Password is Requried",
                          })}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                      </div>

                    </div>
                    {errors.passwordConfirm && (
                      <p className="text-red-500">
                        {errors.passwordConfirm.message}
                      </p>
                    )}
                    <div className="sing-up-submit">
                      <button type="submit">SIGN UP</button>
                    </div>
                    {signUpError && <p className="text-red-500-pass">{signUpError}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* --------------------------end rgitration from---------------------  */}
        </div>
      </div>
    </div>

  );
};

export default SignUp;
