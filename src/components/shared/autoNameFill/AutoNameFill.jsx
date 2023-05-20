import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import Loading from "../Loading/Loading";

const AutoNameFill = () => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // loading
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // ract hook from
  const [signUpError, setSignUPError] = useState("");

  const handleSignUp = (data) => {
    //console.log(data);
    setSignUPError("");

    const name = data.name;
    const email = user?.email;

    console.log("name: ", name);

    const usersInfo = {
      name,
      email,
    };

    // fetch user post
    fetch("https://geeks-of-gurukul-server-side.vercel.app/usersname", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(usersInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully ");
          setLoading(false);
          console.log("Data ------");
          navigate("/signup/phone-sign-up");
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="sing-up">
      <div className="mt-4 mb-5 ">
        <div className="form-class ">
          <div className="col-md-12">
            <div className="new-login-from">
              <p style={{ marginBottom: "15px" }}>Your Name</p>
              <div className="google-sing-in">
                <form onSubmit={handleSubmit(handleSignUp)}>
                  <div className="from-box-sing">
                    <div className="from-box-input">
                      <input
                        type="text"
                        name="name"
                        defaultValue={user?.name}
                        {...register("name", {})}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}

                    <div className="sing-up-submit">
                      <button style={{ marginTop: "2px" }} type="submit">
                        Submit
                      </button>
                    </div>
                    {signUpError && (
                      <p className="text-red-500-pass">{signUpError}</p>
                    )}

                    <Link to="/login">
                      <p className=" form-text">Get Back to Login</p>
                    </Link>
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

export default AutoNameFill;
