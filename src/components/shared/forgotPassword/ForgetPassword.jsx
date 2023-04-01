import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const ForgetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(); // ract hook from
    const [signUpError, setSignUPError] = useState('')

    const {sendResetPassword } = useContext(AuthContext);
    
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');

        sendResetPassword(data.email)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Password reset email sent, Please check your inbox.')
            Navigate('./login');
          })
          .catch(error => {
            console.log(error)
            setSignUPError(error.message)
          });
    }
    return (
        <div className="mt-4 mb-5 ">
        <div className="form-class ">
          <div className="col-md-12">
            <div className="new-login-from">
            <p style={{marginBottom:"15px"}}>Enter your email address</p>
              <div className="google-sing-in">
                
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
                    
                    <div className="sing-up-submit">
                        <button style={{marginTop:"2px"}} type="submit">Submit</button>
                    </div>
                    {signUpError && <p className="text-red-500-pass">{signUpError}</p>}
  
                    <Link to='/login'><p className=' form-text'>Get Back to Login</p></Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default ForgetPassword;