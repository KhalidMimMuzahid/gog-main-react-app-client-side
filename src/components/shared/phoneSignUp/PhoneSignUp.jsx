import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import "./PhoneSignUp.css";
import { toast } from "react-hot-toast";
import Loading from "../Loading/Loading";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha, setLoading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // receving the desiger location
  const pathName= location?.pathname
    //console.log("location: ", location)
  const search =  location?.search
    //console.log("search: ", search);
  
  // set the destination into from 
  const from = search?.slice(12) || "/";

  //console.log("Frommmmmmmmmmmmmmmm", from);

  const [numberUser, setNumberUser] = useState("");
  // loading
  const [loadingState, setLoadingState] = useState(false)

  const getOtp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    //console.log(number, name);
    setNumberUser(number);
    setError("");

    // those for the user namae update 
    const email = user?.email;
    const usersInfo = {
      name, email
    }
    // fetch user for the upade his name
    fetch('https://geeks-of-gurukul-server-side.vercel.app/usersname', {
      method: 'PUT',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify(usersInfo)
      })
      .then(res => res.json())
      .then(data => {
          if (data.success) {
              //toast.success('Successfully ')
              setLoadingState(false)
              //console.log("Data ------", )
              //navigate("/signup/phone-sign-up");
          }
      })
      .catch(error => {
          toast.error(error.message)
          setLoadingState(false)
      })

      if(loadingState) {
        return <Loading></Loading>
      }


   
    
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");

// ------------------------check the phone number in database or not--------------------
    fetch("https://geeks-of-gurukul-server-side.vercel.app/checkuserindatabase", {
      headers: {
        "content-type": "application/json",
        number: JSON.stringify(number),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ",data)
        if (data?.user?.phone) {
          //console.log("Phone number: ", data.phone);
         toast.success("Verified.");
         navigate(from, { replace: true });
        } else {
          console.log("else optn opt")
          const getCapta = async () => {
            try {
              
              const response = await setUpRecaptha(number);
              setResult(response);
              setFlag(true);
              //console.log("This is the second of opt");
            } catch (err) {
              setError("Please, input a valid phone number");
            }
          };
          getCapta();
        }
      });
// ------------------ End of this ---------------------------//
 
    // try {
    //   const response = await setUpRecaptha(number);
    //   setResult(response);
    //   setFlag(true);
    // } catch (err) {
    //   setError(err.message);
    // }

  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);

      saveUser(user.displayName, user.email, numberUser);
      //console.log("SaveUSER::::::", saveUser);
      //console.log("USRData.......", user);
      //navigate("/");
      navigate(from, { replace: true });
    } catch (err) {
      setError("Plase, give correct OTP");
    }
  };

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
        toast.success("Phone verification successful.");
        setLoading(false);
        //navigate(from, { replace: true });
      });
  };

  return (
    <>
      <div className="col-md-12  mb-5 custom-mergin">
        <div className="box  new-login-from-phone">
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
            <div className="single-from-admissionPhone ma-btt">
                <h5 className="mb-3">Full Name</h5>
                <input type="text" required name="name" defaultValue={user?.displayName} />
            </div>
            <h5 className="mb-3">Phone number</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <PhoneInput
                defaultCountry="IN"
                value={number}
                onChange={setNumber}
                placeholder="Enter Phone Number"
              />
              <div id="recaptcha-container"></div>
            </Form.Group>
            <div className="button-right">
              {/* <Link to="/signup">
                <Button variant="secondary">Cancel</Button>
              </Link> */}
              &nbsp;
              <Button type="submit" variant="primary">
              Continue
              </Button>
            </div>
          </Form>

          <Form
            onSubmit={verifyOtp}
            style={{ display: flag ? "block" : "none" }}
          >
            <h2 className="mb-3">Enter your OTP</h2>
            <Form.Group className="mb-3" controlId="formBasicOtp">
              <Form.Control
                type="otp"
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <div className="button-right">
              <Link to="/">
                <Button variant="secondary">Cancel</Button>
              </Link>
              &nbsp;
              <Button type="submit" variant="primary">
                Verify
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default PhoneSignUp;
