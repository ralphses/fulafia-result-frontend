import React from "react";

function AddCourse() {
  return (
    <div className="container font-bold px-4 mx-auto sm:px-8 min-h-screen flex flex-col">
      <div className="py-10 px-2 flex-grow">
        <div className="self-center text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
          Select Courses
        </div>

        <div className="p-6 mt-6">
          <form action="#">
            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="code"
                  readOnly
                  placeholder="Department Code"
                />
              </div>
            </div>

            <div className="shadow px-4 py-3">
              <p className="font-bold mb-3">Add Courses for new Department</p>

              <div className="flex flex-col mb-4 ">
                <div className=" relative ">
                  <select
                    id="courses"
                    name="courses"
                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  >
                    <option>Select Course</option>
                    <option>CSC111</option>
                    <option>MTH111</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col mb-4 ">
                <div className=" relative ">
                  <select
                    id="level"
                    name="level"
                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  >
                    <option>Select Level</option>
                    <option>100</option>
                    <option>200</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col mb-4 ">
                <div className=" relative ">
                  <select
                    id="type"
                    name="type"
                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  >
                    <option>Select Course Type</option>
                    <option>CORE</option>
                    <option>ELECTIVE</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col w-2/4 my-4">
                <button
                  type="button"
                  className="py-2 px-4  bg-slate-500 hover:bg-gray-800  text-white w-2/4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Add
                </button>
              </div>
            </div>

            <div className="flex flex-col w-2/4 my-4">
              <button
                type="submit"
                className="py-2 px-4  bg-gray-700 hover:bg-gray-800  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save Department
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
