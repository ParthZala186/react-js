import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as Yup from "yup";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { InputAdornment } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from 'axios'
import Button from '@mui/material/Button';
import Swal from "sweetalert2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export default function FanSignUp() {

  const [changable, setChangable] = useState(true);
  const [currentButtonClick, setCurrentButtonClick] = useState(true)
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("First Name is required"),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("Last Name is required"),
    userName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Username is required"),
    email: Yup.string().email('Email is invalid').required("Email is required"),
    password: Yup.string().matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ).required("Password Prerequisites is required")
  });

  const baseURL = "http://wren.in:3200/api/sign-up/fan"
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: ""
  };

  function createUser(fields, setSubmitting) {
    axios.post(baseURL,
      {
        Headers:{
          "access-control-allow-origin" : "*",
          "Content-type": "application/json; charset=UTF-8"
        },
        fields 
      },)
      .then((e) => {
        console.log("data saved == ", e)
        Swal.fire({
          title: "Data saved Successfully",
          confirmButtonText: "Okay",
        }).then((result) => {
          window.location.reload(false)
        });
      })
      .catch((error) => {
        Swal.fire("Oops...", "Something went wrong", "error").then((result) => {
          window.location.reload(false)
        });
      });
  }
  
  function onSubmit(fields, { setStatus, setSubmitting }) {   
    const data = { ...fields };
    createUser(data, setSubmitting);
  }
  return (
    <>
      <div className="container">
        <Formik          
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ errors, values, touched, isSubmitting, setFieldValue }) => {
            return (
              <Form>
                <>
                  <div className="row mt-5">
                    <div className="form-group col-md-12">
                      <p className="text-center"><b>Create Your Fan Account</b></p>
                      <label>First Name</label>
                      <br />
                      <Field
                        style={{ width: "100%", border: "none", backgroundColor: "#808080", borderRadius: "1rem", border: "3px solid green", }}
                        name="firstName"
                        placeHolder="First Name"
                        type="text"
                        className={
                          "form-control" +
                          (errors.firstName && touched.firstName
                            ? " is-invalid"
                            : "")
                        }
                      />                      
                      <ErrorMessage
                        name="firstName"
                        style={{ color: 'red' }}
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label>Last Name</label>
                      <br />                      
                      <Field
                        style={{ width: "100%", backgroundColor: "#808080", border: "none", border: "3px solid green", borderRadius: "1rem" }}
                        name="lastName"
                        placeHolder="Last Name"
                        type="text"
                        className={
                          "form-control" +
                          (errors.lastName && touched.lastName
                            ? " is-invalid"
                            : "")
                        }
                      />                      
                      <ErrorMessage
                        name="lastName"
                        style={{ color: 'red' }}
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label>Username</label>
                      <br />                      
                      <Field
                        style={{ width: "100%", backgroundColor: "#808080", border: "none", border: "3px solid green", borderRadius: "1rem" }}
                        name="userName"
                        placeHolder="UserName"
                        type="text"
                        className={
                          "form-control" +
                          (errors.userName && touched.userName
                            ? " is-invalid"
                            : "")
                        }
                      />                      
                      <ErrorMessage
                        name="userName"
                        style={{ color: 'red' }}
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group col-12">
                      <label>Email</label>
                      <br />                      
                      <Field
                        style={{ width: "100%", backgroundColor: "#808080", border: "none", border: "3px solid green", borderRadius: "1rem" }}
                        name="email"
                        placeHolder="Email"
                        type="text"
                        className={
                          "form-control" +
                          (errors.email && touched.email
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                      name="email"
                      style={{ color: 'red' }}
                      component="div"
                      className="invalid-feedback"
                    />   
                    </div>
                                     
                  </div>
                  <div className="row">
                    <div className="form-group col-12">
                      <label>Password</label>
                      <div className="d-flex">
                      <div className="col-md-10 p-0">
                        <Field
                          style={{ width: "100%", border: "none", backgroundColor: "#808080", borderRadius: "1rem", border: "3px solid green", }}
                          name="password"
                          placeHolder="Password"
                          type={changable ? 'password' : 'text'}
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                      </div>
                      <div className="col-md-2 align-self-center">
                        <label onClick={() => {
                          setChangable(!changable)
                        }}>
                          {changable ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </label>
                      </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="row">&nbsp;</div>
                  <div style={{ textAlign: "center" }}>
                    <FormControlLabel
                      control={<Checkbox name="checkedA" onClick={() => {
                        setCurrentButtonClick(!currentButtonClick)
                      }} />}
                      label="I accept the terms and conditions."
                    />
                  </div>
                  <div className="row">&nbsp;</div>
                      <div className="col-md-12 text-center">
                        <button disabled={currentButtonClick}
                          className="btn btn-success"
                          type="submit" variant="contained" color="success">Sign Up</button>
                    </div>
                  {/* <button
                          disabled={currentButtonClick}
                          className="btn btn-primary"
                          type="submit"
                        >
                          {isSubmitting && (
                            <span className="spinner-border spinner-border-sm "></span>
                          )}
                          Save
                        </button> */}
                  &nbsp; &nbsp; &nbsp;


                </>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  )
}
