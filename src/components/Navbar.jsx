import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/30 fixed w-full z-20 top-0 start-0 p-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://i.imgur.com/fzfxOQl.png"
            className="h-12"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            File Flow
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="btnHover bg-secondaryColor rounded-lg text-sm px-4 py-2 text-center"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
