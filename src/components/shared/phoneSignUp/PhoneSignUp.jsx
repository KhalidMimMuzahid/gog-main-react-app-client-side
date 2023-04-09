import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import "./PhoneSignUp.css"
import { toast } from "react-hot-toast";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha, setLoading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [numberUser, setNumberUser] = useState("");

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setNumberUser(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      
      saveUser(user.displayName, user.email, numberUser)
      console.log("SaveUSER::::::", saveUser);
      console.log("USRData.......", user);
      //navigate("/");
    } catch (err) {
      setError(err.message);
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
        toast.success("Verification successful.")
        setLoading(false);
        navigate(from, { replace: true });
      });
  };

    return (
        <>
      <div className="col-md-12  mb-5 custom-mergin">
      <div className="box  new-login-from-phone">
        
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
        <h2 className="mb-3">Enter your phone number</h2>
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
            <Link to="/signup">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
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
