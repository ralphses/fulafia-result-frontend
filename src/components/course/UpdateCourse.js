import React from "react";

function UpdateCourse() {
  return (
    <div className="container font-bold px-4 mx-auto sm:px-8 min-h-screen flex flex-col">
      <div className="py-10 px-2 flex-grow">
        <div className="self-center text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Update Course
        </div>

        <div className="p-6 mt-6">
          <form action="#">
            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="title"
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="code"
                  placeholder="Matricultion number"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="number"
                  id="create-account-pseudo"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="unit"
                  placeholder="Credit unit"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <select
                  id="level"
                  name="level"
                  className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                >
                  <option>Select Level</option>
                  <option>100 Level</option>
                  <option>200 Level</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col w-2/4 my-4">
              <button
                type="submit"
                className="py-2 px-4  bg-gray-500 hover:bg-gray-800  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Update Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCourse;
