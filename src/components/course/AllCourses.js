import React, { useEffect, useState } from "react";
import CourseService from "../../services/CourseService";
import { useNavigate } from "react-router";

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await CourseService.all(1);
        setCourses(response.data.responseBody.courses);
      } catch (error) {
        //console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container font-bold px-4 mx-auto sm:px-8 min-h-screen flex flex-col">
      <div className="py-10 px-2 flex-grow">
        <div className="self-center text-center text-xl font-bold text-gray-800 sm:text-2xl dark:text-white">
          All Courses
        </div>
        <div className="h-12">
          <button
            className="rounded bg-blue-800 text-white py-2 px-2"
            onClick={() => navigate("/course/add")}
          >
            Add Course
          </button>
        </div>
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead className="bg-blue-800">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm text-white font-bold text-left  uppercase  border-b border-gray-200"
                  >
                    S/N
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-white uppercase border-b border-gray-200"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-white uppercase border-b border-gray-200"
                  >
                    Course Code
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 text-sm text-left text-white font-bold uppercase border-b border-gray-200"
                  >
                    Credit unit
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-white uppercase border-b border-gray-200"
                  >
                    Semester
                  </th>
                </tr>
              </thead>
              {!loading && (
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={course.code}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {++index}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {course.title}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {course.code}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {course.unit}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {course.semester}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
