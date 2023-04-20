import React from "react";

function Department() {
  return (
    <div className="container font-bold px-4 mx-auto sm:px-8 min-h-screen flex flex-col">
      <div className="py-10 px-20 flex-grow">
        <div class="self-center text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
          View Department
        </div>

        <div class="p-6 mt-6">
          <form action="#">
            <div class="flex flex-col mb-4">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="name"
                  placeholder="Department Name"
                />
              </div>
            </div>

            <div class="flex flex-col mb-4">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="code"
                  placeholder="Department Code"
                />
              </div>
            </div>

            <div class="flex w-3/4">
              <button className="bg-slate-600 w-3/4 px-2 py-2 mr-7 rounded-lg text-white">
                Update Details
              </button>
              <button className="bg-slate-600 w-3/4 px-2 py-2 rounded-lg text-white">
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Department;
