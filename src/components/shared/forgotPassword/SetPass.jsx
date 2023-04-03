import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const SetPass = () => {
    const {confirmPassword } = useContext(AuthContext);
    const location = useLocation();  

    //console.log("location::::::", location);
    const { register, handleSubmit, formState: { errors } } = useForm(); // ract hook from
    const [signUpError, setSignUPError] = useState('');

    
    
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');

        const queryParams = new URLSearchParams(location.search)

        const oobCode = queryParams.get("oobCode");
        // console.log("oob code : ", oobCode , "\npasswod: ",data.password )
        confirmPassword(oobCode , data.password)
        .then(result => {
            // const user = result.user;
            // console.log(user);
            toast.success('Password reset completed.');
            Navigate('./login');
          })
          .catch(error => {
            console.log(error)
            setSignUPError(error.message)
          });
    }
    return (
      <div className='sing-up'>
                <div className="mt-4 mb-5 ">
        <div className="form-class ">
          <div className="col-md-12">
            <div className="new-login-from">
            <p style={{marginBottom:"15px"}}>Enter your new password</p>
              <div className="google-sing-in">
                
                <form onSubmit={handleSubmit(handleSignUp)}>
                  <div className="from-box-sing">
                   
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
      </div>

    );
};

export default SetPass;