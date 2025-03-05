import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/background1.png";
import Loader from "./Loader";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-2">
        The page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-secondaryColor rounded-lg hover:bg-opacity-80 btnHover"
      >
        Go Home
      </Link>
    </div>
  );
}
