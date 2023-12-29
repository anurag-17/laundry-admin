import React from "react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  // const dispatch = useDispatch();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState("");

  const handleLogin = () => {
    const options = {
      method: "POST",
      url: "http://localhost:4000/api/auth/adminLogin",
      data: {
        email: email,
        password: password,
      },
    };
    axios(options)
      .then((response) => {
        console.log("Login API response:", response);
        // Handle the successful login response here, e.g., store user token in state or localStorage
      })
      .catch((error) => {
        console.error("Error making POST request to Login API:", error);
        // Handle errors here, e.g., display an error message to the user
      });
  };

  return (
    <>
      <section className="h-screen bg-[#FCEBF2] flex items-center ">
        <div className="bg-white mx-auto flex w-1/2 rounded-lg ">
          <div className="w-1/2 login-bg"></div>
          <div className="w-1/2">
            <form className=" border p-5 mx-auto ">
              <div className="text-center text-[30px]">
                <h1>Welcome</h1>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-600"
                >
                  Username :
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  name="email"
                  className="mt-1 p-1 w-full border rounded-md focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password :
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  className="mt-1 p-1 w-full border rounded-md focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 text-[14px]"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
