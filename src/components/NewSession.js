import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function NewSession() {
  const [newSession, setNewSession] = useState({ semester: "", session: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewSession({ ...newSession, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(newSession);
      const response = await axios.post(
        "https://fulafia-result-backend-production.up.railway.app/api/v1/initialize/",
        newSession
      );
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex flex-col max-w-lg w-3/4 px-2 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
          Add New Session
        </div>

        <div className="p-6 mt-6">
          <form action="#">
            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="session"
                  value={newSession.session}
                  onChange={(e) => handleChange(e)}
                  placeholder="Session e.g 2021/2022"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <label
                  for="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Semester
                </label>
                <select
                  id="semester"
                  value={newSession.semester}
                  name="semester"
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>select one</option>
                  <option value="FIRST">FIRST</option>
                  <option value="SECOND">SECOND</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col w-2/4 my-4">
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="py-2 px-4  bg-gray-500 hover:bg-gray-800  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewSession;
