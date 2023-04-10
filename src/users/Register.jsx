import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const SERVER = import.meta.env.VITE_BACKEND_SERVER || "http://localhost:5000";

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`${SERVER}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          mobile: mobile,
        }),
      });
    } catch (error) {}
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form onSubmit={handleSubmit}>
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="outline-yellow-100 block border border-grey-light w-full p-3 rounded mb-4"
              name="firstname"
              placeholder="First Name"
              max={25}
              min={2}
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              className="outline-yellow-100 block border border-grey-light w-full p-3 rounded mb-4"
              name="lastname"
              placeholder="Last Name"
              max={25}
              min={2}
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="text"
              className="outline-yellow-100 block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="number"
              className="outline-yellow-100 block border border-grey-light w-full p-3 rounded mb-4"
              name="mobileNumber"
              placeholder="Mobile Number"
              // max={15}
              // min={7}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <input
              type="password"
              className="outline-yellow-100 block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              max={6}
              min={25}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-yellow-300 text-center py-3 rounded text-gray-600 hover:bg-yellow-500 focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </form>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="/users/login"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Register;
