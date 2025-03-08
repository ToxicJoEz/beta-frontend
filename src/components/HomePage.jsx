import React from "react";
import SignupForm from "./SignupForm";
import bgImage from "../assets/background1.png";
import Loader from "./Loader";
import Featured from "./Featured";

export default function HomePage() {
  return (
    <div>
      <div
        className="container2"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="left mt-12 lg:mt-2">
          <div className="text-white  px-4 lg:px-12 mt-12 lg:mt-2">
            <p className="text-lg mb-4 mt-12 lg:mt-2">
              We make file unlocking easier than ever!
            </p>
            <h1 className="text-4xl font-bold mb-4">
              FILE FLOW - FOR ALL YOUR FILE NEEDS
            </h1>
            <h2 className="text-2xl font-semibold mb-2">
              Unlock, Edit & Transform Files with Ease
            </h2>
            <p className="text-lg mb-4">
              File Flow is designed to simplify the way you handle documents.
              Whether it's unlocking PDFs, extracting text, or searching files
              efficiently, we've got you covered.
            </p>
            <span className="block text-xl font-medium">
              🚀 Stay tuned for our official launch & join the{" "}
              <strong>closed beta</strong> today!
            </span>
          </div>
        </div>

        <div className="right mt-12 lg:mt-2">
          <SignupForm />
        </div>
      </div>
      <Featured></Featured>
    </div>
  );
}
