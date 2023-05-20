import React, { useContext, useEffect, useRef, useState } from "react";
import "./AdmissionForm.css";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Loading from "../../components/shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import banner from "../../assets/images/bannre/0jpg 1 (1).svg";
import { useForm } from "react-hook-form";
import moment from "moment";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  // context
  const { user } = useContext(AuthContext);

  // Example: "+12133734253".
  const [value, setValue] = useState();

  // loading
  const [loading, setLoading] = useState(false);

  // navigate
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [courses, setCourses] = useState([]);
  const [program, setProgram] = useState({});
  const [course, setCourse] = useState({});
  const [batchName, setBatchName] = useState("");
  const [selectedCoursesDetails, setSelectedCoursesDetails] = useState({});
  useEffect(() => {
    fetch("https://geeks-of-gurukul-server-side.vercel.app/all-program")
      .then((response) => response.json())
      .then((data) => {
        // console.log("data", data?.data);
        setData(data?.data);
      });
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "programName") {
        setBatchName("");
        setSelectedCoursesDetails({});
        data?.forEach((each) => {
          if (each?._id === value?.programName) {
            setProgram({
              program_id: each?._id,
              programName: each?.programName,
            });
            return;
          }
        });
      }
      if (name === "courseName") {
        setBatchName("");
        setSelectedCoursesDetails({});
        courses?.forEach((each) => {
          if (each?._id === value?.courseName) {
            //console.log("coursexxxxxxxxxxxx: ", each)
            setBatchName(each?.currentBatch);
            setCourse({
              course_id: each?._id,
              courseName: each?.courseName,
            });
            setSelectedCoursesDetails(each);
            return;
          }
        });
      }
    });
    return () => subscription.unsubscribe();
  });
  useEffect(() => {
    if (program?.program_id) {
      setCourses([]);
      fetch(
        `https://geeks-of-gurukul-server-side.vercel.app/all-courses-by-program?_id=${program?.program_id}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log("data", data?.data);
          setCourses(data?.data);
        });
    }
  }, [program?.program_id]);

  const purchaseCourse = async (data) => {
    if (!batchName) {
      toast.error("This course is not ready for sale");
      return;
    }
    const justNow = moment().format();
    // fetch(`http://localhost:5000/batch?batchName=${batchName}`)
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log("batchhhhhhhhhhhhhhhh",data);
    // })
    const res = await fetch(
      `http://localhost:5000/batch?batchName=${batchName}`
    );
    const batchDetails = await res.json();
    const coursePurchaseDetails = {
      program,
      course,
      batch: {
        batch_id: batchDetails?._id,
        batchName,
      },
      isPaid: false,
      regularPrice: selectedCoursesDetails?.regularPrice,
      discount: 0,
      couponCode: "",
      appliedPrice: Math.floor(selectedCoursesDetails?.regularPrice - 0 * 100),
      purchaseInfo: {
        purchaseByEmail: user.email,
        purchaseByName: user.name,
        enrolledAt: justNow,
        paidAt: "",
      },
    };
    // console.log(coursePurchaseDetails);
    fetch("http://localhost:5000/enroll-course",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coursePurchaseDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("enrolledInfo: ",data);
      });
  };

  // check Coupon and set data
  let totalCopulall = 0;
  let totalcopons = 0;
  let totalDiscount = 0;

  // set loading

  // if (loading) {
  //     return <Loading></Loading>
  // }

  return (
    <div>
      <div className="admission-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="admission-from">
                <img src={banner} alt="" />

                <h4>Admission Form</h4>
                <form onSubmit={handleSubmit(purchaseCourse)}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="single-from-admission">
                        <p>Select Programme</p>
                        <select
                          name="programName"
                          {...register("programName", {
                            required: "Program Name is required",
                          })}
                        >
                          <option disabled selected value="">
                            Choose a Program
                          </option>
                          {data?.length > 0 &&
                            data?.map((each) => (
                              <option key={each?._id} value={each?._id}>
                                {each?.programName}
                              </option>
                            ))}
                        </select>
                        {errors.programName && (
                          <p
                            className="text-red-500 font-poppins font-medium"
                            role="alert"
                          >
                            {errors.programName?.message}
                          </p>
                        )}
                        <p> Select Course</p>
                        <select
                          name="courseName"
                          {...register("courseName", {
                            required: "Course Name is required",
                          })}
                        >
                          <option disabled selected value="">
                            Choose a Course
                          </option>
                          {courses?.length > 0 &&
                            courses?.map((each) => (
                              <option key={each?._id} value={each?._id}>
                                {each?.courseName}
                              </option>
                            ))}
                        </select>
                        {errors.courseName && (
                          <p
                            className="text-red-500 font-poppins font-medium"
                            role="alert"
                          >
                            {errors.courseName?.message}
                          </p>
                        )}
                      </div>
                      <div className="check-box-btu">
                        <input type="checkbox" checked />
                        <span>
                          I accept all{" "}
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/conditon"
                          >
                            Terms & Conditions
                          </Link>{" "}
                        </span>
                      </div>
                      <div className="submit-btu">
                        <button type="submit">
                          <span>Pay</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="admission-right">
                <div className="discount-area">
                  <h2>Apply Discount</h2>
                  <p>₹169 instant discounted</p>
                </div>
                <div className="discount-area">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Apply Referal Code</Accordion.Header>
                      <Accordion.Body>
                        <form>
                          <div className="code">
                            <input
                              type="text"
                              placeholder="Referal Code"
                              name="referal"
                            />
                            <button>Submit</button>
                          </div>
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="pricing">
                  <h2>Pricing Details</h2>
                  <div className="pricing-area">
                    <div className="pricing-details">
                      <p>Total</p>
                      <p>
                        {" "}
                        <strong>
                          {/* ₹{mainCourse[0]?.price ? mainCourse[0]?.price : 0} */}
                        </strong>{" "}
                      </p>
                    </div>
                    <div className="pricing-details">
                      <p>Discount</p>
                      <p> -₹150 </p>
                    </div>
                    <div className="pricing-details">
                      <p className="red">Total</p>
                      <p>
                        {" "}
                        {/* <strong>₹{discount ? discount : 0}</strong>{" "} */}
                      </p>
                    </div>
                    <div className="pricing-details">
                      <p className="green">Referal Applied</p>
                      <p>
                        {" "}
                        <strong>₹0</strong>{" "}
                      </p>
                    </div>
                    <div className="pricing-details">
                      <p className="green">Coupon Applied</p>
                      <p>
                        {" "}
                        <strong>₹{totalDiscount}</strong>{" "}
                      </p>
                    </div>
                    <div className="pricing-details">
                      <p>To Pay</p>
                      <p>
                        {" "}
                        <strong>₹{totalcopons ? totalcopons : 0}</strong>{" "}
                      </p>
                    </div>
                    <div className="pricing-details green">
                      <p>Total Discount</p>
                      <p>
                        {" "}
                        <strong>₹{totalCopulall}</strong>{" "}
                      </p>
                    </div>

                    <div className="pay">{/* <button>Pay</button> */}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
