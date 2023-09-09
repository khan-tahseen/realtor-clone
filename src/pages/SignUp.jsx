import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";

export default function SignUn() {
  const navigate =  useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredentials.user;

      // make a copy of formData and delete password
      const formDataCopy = {...formData};
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      // save in firestore db
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      navigate('/')
      toast.success('Sign Up was successfull :)')
    } catch (error) {
      toast.error('Something went wrong with registration')
      console.log("error while getAuth", error);
    }
  }

  function onChange(event) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  }

  return (
    <section>
      <h1 className="text-3xl text-center my-6 font-bold">Sign Up</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-6 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt="key"
            className="w-full rounded-2xl mb-8"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="w-full py-4 px-2 text-xl rounded-lg transition ease-linear mb-6"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
            />
            <input
              className="w-full py-4 px-2 text-xl rounded-lg transition ease-linear"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <div className="relative my-6">
              <input
                className="w-full py-4 px-2 text-xl rounded-lg transition ease-linear"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-5 top-5 text-2xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-5 top-5 text-2xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            <div className="flex justify-between text-sm sm:text-lg whitespace-nowrap">
              <p>
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  className="text-red-400 hover:text-red-600 transition duration-200 ease-linear"
                >
                  Sign In
                </Link>{" "}
              </p>
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:text-blue-700 transition duration-200 ease-linear"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full my-6 bg-blue-600 text-white px-6 py-3 text-sm font-medium uppercase rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-linear active:bg-blue-800"
            >
              Sign Up
            </button>

            <div className="flex items-center before:border-t before:flex-1 before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
