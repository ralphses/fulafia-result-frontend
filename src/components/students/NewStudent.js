
function NewStudent() {

  return (
    <div className="flex items-center justify-center mt-20">
      <div class="flex flex-col max-w-lg w-3/4 px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div class="self-center text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new student record
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
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div class="flex flex-col mb-4">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="matric"
                  placeholder="Matricultion number"
                />
              </div>
            </div>

            <div class="flex flex-col mb-4">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="phone"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div class="flex flex-col mb-4">
              <div class=" relative ">
                <select
                  id="department"
                  name="department"
                  className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                >
                  <option>Select Department</option>
                  <option>Computer Science</option>
                  <option>Mathemtics</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col mb-4">
              <div class=" relative ">
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

            <div class="flex flex-col mb-4">
              <div class=" relative ">
                <input
                  type="email"
                  id="create-account-pseudo"
                  class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="email"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div class="flex flex-col mb-4 ">
              <div class=" relative ">
                <select multiple
                  id="courses"
                  name="courses"
                  className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                >
                  <option>Select Courses</option>
                  <option>CSC111</option>
                  <option>MTH111</option>
                </select>
              </div>
            </div>


            <div class="flex flex-col w-2/4 my-4">
              <button
                type="submit"
                class="py-2 px-4  bg-gray-500 hover:bg-gray-800  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Save Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewStudent;
