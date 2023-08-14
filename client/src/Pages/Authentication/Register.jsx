import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import Logo from "../../Assets/register/Logo.png";
import { Link } from "react-router-dom";

function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  return (
    <div id="register">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4 d-flex justify-content-center my-5">
            <img src={Logo} alt="" className="logo" />
            <div class="card" style={{ width: "40rem" }}>
              <div class="card-body">
                <div className="row">
                  <div class="col input-group d-flex justify-content-end">
                    <button
                      class="btn dropdown-toggle uk"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English(UK)
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h1 className="createAccount mb-4">Create Account</h1>
                    <div style={{ textAlign: "center" }} className="my-4">
                      <button className="btn btn-lg btn-outline-dark gfButton px-4">
                        <FcGoogle className="mb-1" /> Sign up with Google
                      </button>
                    </div>
                    <div style={{ textAlign: "center" }} className="my-4">
                      <button className="btn btn-lg btn-outline-dark gfButton">
                        <BsFacebook className="mb-1" /> Sign up with Facebook
                      </button>
                    </div>
                    <div style={{ textAlign: "center" }} className=" or">
                      <p>-OR-</p>
                    </div>
                    <div className="row">
                      <div className="col-1"></div>
                      <div className="col-10">
                        <div class="input-group flex-nowrap border border-0 ">
                          <input
                            type="text"
                            class="form-control border border-top-0 border-start-0 border-end-0 rounded-0"
                            placeholder="Fullname"
                            aria-label="Fullname"
                            aria-describedby="addon-wrapping"
                          />
                        </div>
                        <div class="input-group flex-nowrap border border-0 mt-4">
                          <input
                            type="email"
                            class="form-control border border-top-0 border-start-0 border-end-0 rounded-0"
                            placeholder="Email Address"
                            aria-label="Email Address"
                            aria-describedby="addon-wrapping"
                          />
                        </div>
                        <div class="input-group flex-nowrap border border-0 mt-4">
                          <input
                            type={passwordVisible ? "text" : "password"}
                            class="form-control border border-top-0 border-start-0 border-end-0 rounded-0"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="addon-wrapping"
                          />
                          <span
                            class="input-group-text border border-top-0 border-start-0 border-end-0 rounded-0"
                            id="addon-wrapping"
                            style={{
                              cursor: "pointer",
                              backgroundColor: "white",
                            }}
                            onClick={() =>
                              setPasswordVisible(passwordVisible ? false : true)
                            }
                          >
                            {passwordVisible ? (
                              <HiMiniEye />
                            ) : (
                              <HiMiniEyeSlash />
                            )}
                          </span>
                        </div>
                        <div class="input-group flex-nowrap border border-0 mt-4">
                          <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            class="form-control border border-top-0 border-start-0 border-end-0 rounded-0"
                            placeholder="Confirm Password"
                            aria-label="Confirm Password"
                            aria-describedby="addon-wrapping"
                          />
                          <span
                            class="input-group-text border border-top-0 border-start-0 border-end-0 rounded-0"
                            id="addon-wrapping"
                            style={{
                              cursor: "pointer",
                              backgroundColor: "white",
                            }}
                            onClick={() =>
                              setConfirmPasswordVisible(
                                confirmPasswordVisible ? false : true
                              )
                            }
                          >
                            {confirmPasswordVisible ? (
                              <HiMiniEye />
                            ) : (
                              <HiMiniEyeSlash />
                            )}
                          </span>
                        </div>
                        <div class="mt-4">
                          <button
                            className="btn btn-primary w-100"
                            style={{ background: "#4D45F3" }}
                          >
                            {" "}
                            Create Account
                          </button>
                        </div>
                        <div class="mt-4 text-center alreadyAccount">
                          <span>
                            Already have an account?{" "}
                            <Link
                              to={"/login"}
                              style={{ textDecoration: "none" }}
                            >
                              Log in
                            </Link>
                          </span>
                        </div>
                      </div>
                      <div className="col-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
}
export default Register;
