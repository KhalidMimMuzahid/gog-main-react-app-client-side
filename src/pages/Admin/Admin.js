import React from "react";
import "./Admin.css";
import { useState } from "react";
import Loading from "../../components/shared/Loading/Loading";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

import Coupon from "../../components/Coupon/Coupon";
import CouresPrice from "../../components/CouresPrice/CouresPrice";

const Admin = () => {
  // loading
  const [loading, setLoading] = useState(false);

  // Select Programme
  const programmes = [
    "Select Programme",
    "School Champs",
    "Coding Bees",
    "Engineering Nerds",
  ];

  // Select Course
  const courses = {
    "Select Programme": ["Select Course "],
    "School Champs": ["Select Course", "Basic Coding", "Advance Coding"],
    "Coding Bees": [
      "Select Course",
      "Full Stack Data Analytics",
      "Full Stack Web Development",
    ],
    "Engineering Nerds": [
      "Select Course",
      "Electrical Engineering",
      "Mechanical Engineering",
    ],
  };

  // Programme value
  const [selectprogramme, setSelectprogramme] = useState("Select Programme");

  // Course value
  const [selectCourse, setSelectCourse] = useState("");

  console.log(selectprogramme);
  console.log(selectCourse);

  // referee get
  // react query data fatch
  const url = `https://geeks-of-gurukul-server-side.vercel.app/referee`;
  const {
    data: referee = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["referee"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          // authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
      });
      const data = await res.json();
      return data;
    },
  });

  // delete referee
  const deleteProduct = (copuoninfo) => {
    fetch(`https://geeks-of-gurukul-server-side.vercel.app/referee/${copuoninfo._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);

        refetch();
      });
  };

  // Coupon Code post
  const copunHandaler = (e) => {
    e.preventDefault();
    setLoading(true);
    const coupon = e.target.coupon.value;
    const discount = e.target.discount.value;

    const copuninfo = {
      coupon,
      discount,
      selectprogramme,
      selectCourse,
    };
    // fetch user post
    fetch("https://geeks-of-gurukul-server-side.vercel.app/coupon", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(copuninfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully");
          refetch();
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  // refelhande post
  const refelhande = (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const code = e.target.code.value;

    const refereeinfo = {
      name,
      phone,
      email,
      code,
    };
    // fetch user post
    fetch("https://geeks-of-gurukul-server-side.vercel.app/referee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(refereeinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully");
          refetch();
          setLoading(false);
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
    <div>
      <div className="admin-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="admin-title">Welcome to Admin</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="coupon-area">
                <form onSubmit={copunHandaler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-coupon">
                        <p>Set coupon code</p>
                        <input
                          type="text"
                          name="coupon"
                          placeholder="set coupon code "
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-coupon">
                        <p>Discount</p>
                        <input
                          type="text"
                          name="discount"
                          placeholder="Set Discount "
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-coupon">
                        <p>Select Programme</p>
                        <select
                          onChange={(e) => {
                            setSelectprogramme(e.target.value);
                          }}
                        >
                          {programmes?.map((programme, i) => (
                            <option key={i} value={programme}>
                              {programme}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-coupon">
                        <p>Select Course</p>

                        <select
                          onChange={(e) => {
                            setSelectCourse(e.target.value);
                          }}
                        >
                          {courses[selectprogramme]?.map((course, i) => (
                            <option key={i} value={course}>
                              {course}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-coupon">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="coupon-user">
                <h2>Coupon list</h2>
                <Coupon></Coupon>
              </div>
            </div>
            <div className="col-md-6">
              <div className="coupon-area">
                <form onSubmit={refelhande}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-coupon">
                        <p>Referee Name</p>
                        <input
                          type="text"
                          name="name"
                          placeholder="Referee Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-coupon">
                        <p>Mobile</p>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="set phone "
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-coupon">
                        <p>Email</p>
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-coupon">
                        <p>Referee Code</p>

                        <input
                          type="text"
                          name="code"
                          placeholder="Referee code"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-coupon">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="coupon-user">
                <h2>Referee list</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Code</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referee?.data?.map((copuoninfo) => (
                      <tr key={copuoninfo._id}>
                        <td>{copuoninfo?.name}</td>
                        <td>{copuoninfo?.phone}</td>
                        <td>{copuoninfo?.email}</td>
                        <td>{copuoninfo?.code}</td>
                        <td>
                          <button
                            onClick={() => deleteProduct(copuoninfo)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <CouresPrice></CouresPrice>
      </div>
    </div>
  );
};

export default Admin;
