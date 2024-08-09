import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shareyourrecipes = () => {
  const [inputValue, setInputValue] = useState("");
  const notify = () =>
    toast("Successfully submitted , THANKYOU For your contribution");

  const inputBlank = () => toast("Please , fill Out the full form  ");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="bg-[#f2f2f2] text-black">
      <h1 className="font-semibold  mt-4 mb-5 bg-green-500 text-center h-12 flex justify-center items-center text-[#f2f2f2] rounded-lg">
        Share your recipe here{" "}
      </h1>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tribhuvan"
              onChange={handleInputChange}
              value={inputValue}
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nath"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Your company name
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Recetti"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="9122334455"
              pattern="^[6-9]\d{9}$"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="someone@gmail.com "
            required
          />
        </div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Write your recipe
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your recipe here..."
        ></textarea>
        <div className="flex items-start mb-6 mt-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-white dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>

          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            I agree with the{" "}
            <a className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions
            </a>
            .
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700   dark:text-white dark:focus:ring-blue-800 mb-6"
            onClick={inputValue.length >= 4 ? notify : inputBlank}
          >
            Share your recipe
            <ToastContainer
              position="top-right"
              autoClose={5000}
              transition:Bounce
              theme="light"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shareyourrecipes;
