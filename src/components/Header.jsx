import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {

    const location = useLocation();
    const navigate = useNavigate();

    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-10">
      <header className="flex justify-between items-center p-3 max-w-5xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className="flex space-x-6">
            <li
              className={`cursor-pointer font-semibold text-gray-500 ${
                pathMatchRoute("/") && "text-black border-b-2 border-b-red-500"
              }`}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer font-semibold text-gray-500 ${
                pathMatchRoute("/offers") && "text-black border-b-2 border-b-red-500"
              }`}
              onClick={() => navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer font-semibold text-gray-500 ${
                pathMatchRoute("/sign-in") && "text-black border-b-2 border-b-red-500"
              }`}
              onClick={() => navigate('/sign-in')}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
