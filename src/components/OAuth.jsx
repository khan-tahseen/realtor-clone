import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className="flex w-full items-center justify-center bg-red-600 text-white px-6 py-3 text-sm font-medium uppercase hover:bg-red-700 active:bg-red-800 shadow-md rounded-lg my-6 transition duration-200 ease-linear">
      {" "}
      <FcGoogle className="text-2xl bg-white rounded-full mr-4" />
      Continue With Google
    </button>
  );
}
