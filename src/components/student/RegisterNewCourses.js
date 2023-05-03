import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function RegisterNewCourses() {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const handleCourseChange = (e) => {
    const checked = e.target.checked;

    if (checked) {
      let courses = selectedCourses;

      courses.push(e.target.value);
      setSelectedCourses(courses);
    } else {
      const value = e.target.value;

      let courses = selectedCourses.filter((course) => course !== value);
      setSelectedCourses(courses);
    }
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://fulafia-result-backend-production.up.railway.app/api/v1/student/register/course/${params.get(
          "matric"
        )}`,
        { courses: selectedCourses }
      );

      if(response.status === 200) {
        navigate('/student');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `https://fulafia-result-backend-production.up.railway.app/api/v1/course/all/1?department=${params.get(
            "department"
          )}&matric=${params.get("matric")}`
        );

        if (response.status === 200) {
          const courses = response.data.responseBody.courses.map(
            (course) => course.code
          );

          if(courses.length < 1) {
            navigate('/student');
          }
          setAvailableCourses(courses);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourses();
  });

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex flex-col max-w-lg w-3/4 px-2 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
          Register New Courses
        </div>

        <div className="p-6 mt-6">
          <form action="#">
            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="matric"
                  readOnly
                  value={params.get("matric")}
                  placeholder="Student Matric"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="department"
                  readOnly
                  value={params.get("department")}
                  placeholder="Student Department"
                />
              </div>
            </div>

            <div className="shadow px-4 py-3">
              <p className="font-bold mb-3">Select Courses </p>

              <div className="flex flex-wrap">
                {availableCourses.map((course) => (
                  <div className="flex items-center mb-4 mr-3" key={course}>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value={course}
                      onChange={(e) => handleCourseChange(e)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <label
                      for="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {course}
                    </label>
                  </div>
                ))}
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

export default RegisterNewCourses;
