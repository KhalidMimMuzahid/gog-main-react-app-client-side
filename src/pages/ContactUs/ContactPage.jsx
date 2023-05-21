import React from "react";
import { BsEnvelope, BsCheckCircleFill } from "react-icons/bs";
import "./contactUs.css";
import { contactData } from "./contactData";
import { useForm } from "react-hook-form";

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ marginTop: "70px", background: "#EDFBE9" }} className="pb-5">
      <div className="pt-5">
        <div className="d-flex align-items-center top-section mx-auto">
          <BsEnvelope size={20} />
          <p className="ms-3 mb-0 fs-5">Contact Us</p>
        </div>
      </div>
      <div className="row contact-row mx-auto mt-5 mb-5 align-items-center">
        <div className="col-md-12 col-lg-6">
          <h1 className="fw-bold mb-5">Get in touch with us</h1>
          <div>
            {contactData.map((data, index) => (
              <div className="d-flex align-items-center mb-4" key={index}>
                <BsCheckCircleFill color="#11A344" size={20} className="me-3" />
                <p className="mb-0 text-wrap" style={{ width: "100%" }}>
                  {data}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-5 rounded-4 border border-2 border-dark"
          >
            <div className="d-flex flex-column mb-3">
              <label>
                Full Name<span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Type here"
                className="p-2 rounded-2 border border-2 border-gray"
                {...register("name", {
                  required: "Your name is required",
                })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-danger fs-medium mb-0" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="d-flex flex-column mb-3">
              <label>
                Email ID<span className="text-danger"> *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Type here"
                className="p-2 rounded-2 border border-2 border-gray"
                {...register("email", {
                  required: "Email is required",
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-danger fs-medium mb-0" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="d-flex flex-column mb-3">
              <label>
                Address<span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Type here"
                className="p-2 rounded-2 border border-2 border-gray"
                {...register("address", {
                  required: "Address is required",
                })}
                aria-invalid={errors.address ? "true" : "false"}
              />
              {errors.address && (
                <p className="text-danger fs-medium mb-0" role="alert">
                  {errors.address?.message}
                </p>
              )}
            </div>
            <div className="d-flex flex-column mb-3">
              <label>
                Phone number<span className="text-danger"> *</span>
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="Type here"
                className="p-2 rounded-2 border border-2 border-gray"
                {...register("tel", {
                  required: "Phone number is required",
                })}
                aria-invalid={errors.tel ? "true" : "false"}
              />
              {errors.tel && (
                <p className="text-danger fs-medium mb-0" role="alert">
                  {errors.tel?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="p-2 rounded-3 submit-btn mt-2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
