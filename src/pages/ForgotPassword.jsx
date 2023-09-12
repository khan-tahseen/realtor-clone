import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success(`Email sent successfully`);
    } catch (error) {
      toast.error('Could not send password reset email', error)
    }
  }

  function onChange(event) {
    setEmail(event.target.value)
  }

  return (
    <section>
      <h1 className="text-3xl text-center my-6 font-bold">Forgot Password</h1>

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
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />

            <div className="flex justify-between text-sm sm:text-lg whitespace-nowrap">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-red-400 hover:text-red-600 transition duration-200 ease-linear"
                >
                  Register
                </Link>{" "}
              </p>
              <Link
                to="/sign-in"
                className="text-blue-500 hover:text-blue-700 transition duration-200 ease-linear"
              >
                Sign In Instead
              </Link>
            </div>

            <button
              type="submit"
              className="w-full my-6 bg-blue-600 text-white px-6 py-3 text-sm font-medium uppercase rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-linear active:bg-blue-800"
            >
              Send Reset Password
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
