import { useState } from "react";
import axios from "axios";


const SignupForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fileflow-backend-production.up.railway.app/signup",
        formData
      );
      setMessage({
        type: "success",
        text: "Signup successful! Check your email.",
      });
      setFormData({ name: "", email: "" });
    } catch (error) {
      setMessage({
        type: "error",
        text: "Error signing up. Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-end  mx-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Join The File Flow Beta!
        </h2>
        {message && (
          <p
            className={`text-center p-2 mb-4 rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name-icon"
              className="block mb-2 mt-6  text-sm font-medium text-gray-900"
            >
              Name:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                id="name-icon"
                className="bg-gray-200 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email-address-icon"
              className="block mb-2 mt-6 text-sm font-medium text-gray-900"
            >
              Your Email:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                id="email-address-icon"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="name@flowbite.com"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-secondaryColor py-2 rounded-lg mt-12 btnHover"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
