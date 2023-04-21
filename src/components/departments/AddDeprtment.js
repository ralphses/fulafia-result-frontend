import React, { useEffect, useState } from "react";
import DepartmentService from "../../services/DepartmentService";
import CourseService from "../../services/CourseService";
import { useNavigate } from "react-router";

function AddDeprtment() {
  const [allCourses, setAllCourses] = useState([]);
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    course: "",
    type: "",
    level: "",
  });

  const [department, setDepartment] = useState({
    name: "",
    code: "",
    courses: [],
  });

  useEffect(() => {
    CourseService.all(1)
      .then((response) => {
        setAllCourses(
          response.data.responseBody.courses.map((course) => course.code)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const deleteAddedCourse = (e, courseCode) => {
    e.preventDefault();
    let courses = [...department.courses];
    courses = courses.filter((course) => course.course !== courseCode);

    setDepartment({ ...department, courses: courses });
  };

  const handleCourseDetailChnge = (e) => {
    const value = e.target.value;
    setCourse({ ...course, [e.target.name]: value });
  };

  const addCurrentCourse = () => {
    if (course.course.length >= 3 && course.type.length >= 4) {
      setDepartment({
        ...department,
        courses: [...department.courses, course],
      });
      setCourse({ level: "", type: "", course: "" });
    }
  };

  const departmentDetailsChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (department.courses.length > 0) {
      DepartmentService.add(department)
        .then((response) => {
          navigate("/departments");
          console.log(response.status);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex flex-col max-w-lg w-3/4 px-2 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
          Add New Department
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
                  value={department.name}
                  onChange={departmentDetailsChange}
                  placeholder="Department Name"
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
                  value={department.code}
                  onChange={departmentDetailsChange}
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
                    name="course"
                    value={course.course}
                    onChange={handleCourseDetailChnge}
                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  >
                    <option>Select Course</option>
                    {allCourses.map((c, index) => (
                      <option key={index}>{c}</option>
                    ))}
                    ;
                  </select>
                </div>
              </div>

              <div className="flex flex-col mb-4 ">
                <div className=" relative ">
                  <select
                    id="level"
                    name="level"
                    onChange={handleCourseDetailChnge}
                    value={course.level}
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

              <div className="flex flex-col mb-4 ">
                <div className=" relative ">
                  <select
                    id="type"
                    name="type"
                    onChange={handleCourseDetailChnge}
                    value={course.type}
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
                  onClick={addCurrentCourse}
                  className="py-2 px-4  bg-slate-500 hover:bg-gray-800  text-white w-2/4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Add
                </button>
              </div>
            </div>

            <div className="flex flex-col w-2/4 my-4">
              <button
                type="submit"
                onClick={handleSubmit}
                // {...department.courses.length < 1 ? "disabled" : "" }
                className="py-2 px-4  bg-gray-500 hover:bg-gray-800  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save Department
              </button>
            </div>
          </form>
          <div className="mt-12">
            <p className="font-bold">Addedd Courses</p>

            <table className="w-full leading-3">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Level
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {department.courses.map((co, index) => (
                  <tr key={index}>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {co.course}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {co.level}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {co.type}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <button
                        onClick={(e) => deleteAddedCourse(e, co.course)}
                        className="text-white bg-red-800 px-2 rounded whitespace-no-wrap"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDeprtment;
