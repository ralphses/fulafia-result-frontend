import React, { useState } from "react";
import CourseService from "../../services/CourseService";
import { useNavigate } from "react-router";

function AddCourse() {
  const navigate = useNavigate();

  const [course, setcourse] = useState({
    title: "",
    code: "",
    unit: "",
    level: "",
    semester: "",
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    setcourse({ ...course, [e.target.name]: value });
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();

    //console.log(course);

    CourseService.add(course)
      .then((response) => {
        //console.log(response.status);

        if (response.status === 200) {
          navigate("/course");
        }
      })
      .catch((error) => {
        //console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex flex-col max-w-lg w-3/4 px-2 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Add New Course
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
                  value={course.title}
                  onChange={(e) => handleOnChange(e)}
                  placeholder="Course Title"
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
                  value={course.code}
                  onChange={(e) => handleOnChange(e)}
                  placeholder="Course Code"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <select
                  id="unit"
                  name="unit"
                  value={course.unit}
                  onChange={(e) => handleOnChange(e)}
                  className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                >
                  <option>Credit Unit</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>3</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <select
                  id="level"
                  name="level"
                  value={course.level}
                  onChange={(e) => handleOnChange(e)}
                  className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                >
                  <option>Select Level</option>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option>400</option>
                  <option>500</option>
                  <option>600</option>
                  <option>700</option>
                  <option>800</option>
                  <option>900</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <select
                  id="semester"
                  name="semester"
                  value={course.semester}
                  onChange={(e) => handleOnChange(e)}
                  className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                >
                  <option>Select Semester</option>
                  <option>FIRST</option>
                  <option>SECOND</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col w-2/4 my-4">
              <button
                type="submit"
                onClick={handleCourseSubmit}
                className="py-2 px-4  bg-gray-500 hover:bg-gray-800  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
