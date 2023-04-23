import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function UploadResult() {
  const [loaded, setLoaded] = useState(false);
  const [currentScore, setCurrentScore] = useState("");
  const [currentCourse, setCurrentCourse] = useState("");
  const [matric, setMatric] = useState("");
  const [studentCourses, setStudentCourses] = useState([]);
  const [focus, setfocus] = useState(false);

  const [studentResult, setStudentResult] = useState({
    courseScore: [],
    matric: "",
  });

  const navigate = useNavigate();

  const handleMatricChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setMatric(value);

    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `fulafia-result-backend-production.up.railway.app/api/v1/student/find/${value}`
        );
        if (response.status === 200) {
          setLoaded(true);

          //Set courses
          const courses = response.data.responseBody.student.courses.map(
            (course) => course.code
          );
          setStudentCourses(courses);

          setStudentResult({
            ...studentResult,
            [name]: response.data.responseBody.student.matric,
          });
        }
      } catch (error) {
        setLoaded(false);
        console.log(error);
      }
    };
    fetchCourses();
  };

  const handleCurrentCourseChange = (e) => {
    setCurrentCourse(e.target.value);
  };

  const handleCurrentScoreChange = (e) => {
    setCurrentScore(e.target.value);
  };

  const addCourseScore = (e) => {
    e.preventDefault();

    let contains = false;

    let newCourseScore = [...studentResult.courseScore];

    newCourseScore.forEach((score) => {
      if (score.course === currentCourse) {
        score.score = currentScore;
        contains = true;
      }
    });

    if (!contains) {
      setStudentResult({
        ...studentResult,
        courseScore: [
          ...studentResult.courseScore,
          { course: currentCourse, score: currentScore },
        ],
      });
    } else {
      setStudentResult({ ...studentResult, courseScore: newCourseScore });
    }
  };

  const focused =() => {
    setfocus(!focus);
  }

  const deleteAddedCourse = (e, courseCode) => {
    e.preventDefault();

    const newCourseScore = [...studentResult.courseScore].filter(
      (score) => score.course !== courseCode
    );
    setStudentResult({ ...studentResult, courseScore: newCourseScore });
  };

  const saveStudentResult = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "fulafia-result-backend-production.up.railway.app/api/v1/result/add",
        studentResult
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
          Upload Student Result
        </div>

        <div className="p-6 mt-6">
          <form action="#">
            <div className="flex flex-col mb-4">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  name="matric"
                  value={matric}
                  onFocus={focused}
                  onChange={(e) => handleMatricChange(e)}
                  placeholder="Enter matriculation number"
                />
                {loaded && studentCourses.length < 1 && (
                  <p className="text-red-600">
                    Result Already uploaded for this user
                  </p>
                )}
                {!loaded && matric.length > 0 && focus && (
                  <p className="text-red-600">
                    Invalid Matricultion Number
                  </p>
                )}
              </div>
            </div>
            {loaded && studentCourses.length > 0 && (
              <div className="shadow px-4 py-3">
                <p className="font-bold mb-3">Add Course and Grade</p>

                <div className="flex flex-col mb-4 ">
                  <div className=" relative ">
                    <select
                      id="courses"
                      name="course"
                      value={currentCourse}
                      onChange={(e) => handleCurrentCourseChange(e)}
                      className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    >
                      <option>Select Course</option>
                      {studentCourses.map((c, index) => (
                        <option key={index}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col mb-4 ">
                  <div className=" relative ">
                    <select
                      id="level"
                      name="currentScore"
                      onChange={(e) => handleCurrentScoreChange(e)}
                      value={currentScore}
                      className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    >
                      <option>Select Level</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-2/4 my-4">
                  <button
                    type="button"
                    onClick={(e) => addCourseScore(e)}
                    className="py-2 px-4  bg-slate-500 hover:bg-gray-800  text-white w-2/4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
            <div className="flex flex-col w-2/4 my-4">
              <button
                type="submit"
                onClick={(e) => saveStudentResult(e)}
                className="py-2 px-4  bg-yellow-700 hover:bg-white hover:text-yellow-700  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Upload Result
              </button>
            </div>
          </form>

          {loaded && studentCourses.length > 0  && (
            <div className="mt-12">
              <p className="font-bold">Added Courses</p>

              <table className="w-full leading-3">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      S/N
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Course
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Grade
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
                  {studentResult.courseScore.map((co, index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {++index}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {co.course}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {co.score}
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <button
                          onClick={(e, courseCode) =>
                            deleteAddedCourse(e, co.course)
                          }
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
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadResult;
