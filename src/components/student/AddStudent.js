import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function AddStudent() {
  const [allCourses, setAllCourses] = useState([]);
  const [allDepartments, setAllDepartments] = useState([]);
  const [student, setStudent] = useState({
    name: "",
    matric: "",
    phone: "",
    email: "",
    department: "",
    level: "",
    courses: [],
  });

  const navigate = useNavigate();

  const studentDetailsChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `https://fulafia-result-backend-production.up.railway.app/api/v1/course/all/1?department=${student.department}`
        );
        const courses = response.data.responseBody.courses.map(
          (course) => course.code
        );
        setAllCourses(courses);
      } catch (error) {
        //console.log(error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "https://fulafia-result-backend-production.up.railway.app/api/v1/department/1"
        );
        setAllDepartments(response.data);
      } catch (error) {
        //console.log(error);
      }
    };

    fetchCourses();
    fetchDepartments();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fulafia-result-backend-production.up.railway.app/api/v1/student/add",
        student
      );
      if (response.status === 200) {
        const responseData = response.data.responseBody.student;

        const successUrl = `/student/add/success?name=${responseData.name}&matric=${responseData.matric}&resultCode=${responseData.resultCode}&passCode=${responseData.passCode}`;

        navigate(successUrl);
      }
    } catch (error) {
      //console.log(error);
    }
  };

  const handleCourseChange = (e) => {
    const checked = e.target.checked;

    if (checked) {
      let courses = student.courses;

      courses.push(e.target.value);
      setStudent({ ...student, courses: courses });

      //console.log(student.courses);
    } else {
      const value = e.target.value;

      let courses = student.courses.filter((course) => course !== value);
      setStudent({ ...student, courses: courses });
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex flex-col max-w-lg w-3/4 px-2 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
          Add New Student
        </div>

        <div className="p-6 mt-6">
          <form action="#">
            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="name"
                  value={student.name}
                  onChange={(e) => studentDetailsChange(e)}
                  placeholder="Student Name"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="matric"
                  value={student.matric}
                  onChange={studentDetailsChange}
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
                  name="phone"
                  value={student.phone}
                  onChange={studentDetailsChange}
                  placeholder="Phone Number (e.g +2347011111111)"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="email"
                  id="create-account-pseudo"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="email"
                  value={student.email}
                  onChange={studentDetailsChange}
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <label
                  for="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Department
                </label>
                <select
                  id="countries"
                  value={student.department}
                  name="department"
                  onChange={studentDetailsChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose department</option>
                  {allDepartments.map((department) => (
                    <option value={department.name} key={department.code}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <label
                  for="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Level
                </label>
                <select
                  id="countries"
                  value={student.level}
                  name="level"
                  onChange={studentDetailsChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue={""}>Select Level</option>
                  <option value="FRESHMAN">FRESHMAN</option>
                  <option value="DIRECT ENTRY">DIRECT ENTRY</option>
                </select>
              </div>
            </div>

            <div className="shadow px-4 py-3">
              <p className="font-bold mb-3">Select Courses </p>

              <div className="flex flex-wrap">
                {allCourses.map((course) => (
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
                Save Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
