import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function Student() {
  const navigate = useNavigate();
  const location = useLocation();

  const [student, setStudent] = useState({
    department: "",
    matric: "",
    passCode: "",
    name: "",
    phone: "",
    resultCode: "",
    courses: [],
    checked: "",
  });

  const[courses, setCourses] = useState([]);

  const params = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const matric = params.get("matric");

        const studentResponse = await axios.get(
          `https://fulafia-result-backend-production.up.railway.app/api/v1/student/find/${matric}`
        );

        if (studentResponse.status === 200) {
          let studentData = studentResponse.data.responseBody.student;
          let studentCourses = studentData.courses.map((course) => course.code);

          setStudent(studentData);
          setCourses(studentCourses);

        //   setStudent({ ...student, courses: studentCourses });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudent();
  });

  return (
    <div className="container font-bold px-4 mx-auto sm:px-8 min-h-screen flex flex-col">
      <div className="py-10 px-1 flex-grow">
        <div className="block rounded-lg mb-5 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <h5 className="mb-2 text-xl font-extrabold leading-tight text-neutral-800 dark:text-neutral-50">
            STUDENT INFORMATION
          </h5>
          <h3 className="font-bold text-black">
            {" "}
            Student Name: {student.name}
          </h3>
          <h3 className="font-bold text-black">
            {" "}
            Student Matric: {student.matric}
          </h3>
          <h3 className="font-bold text-black">
            {" "}
            Student Certificate Verification Number: {student.passCode}
          </h3>
          <h3 className="font-bold text-black">
            {" "}
            Student Result Passcode: {student.resultCode}
          </h3>
          <h3 className="font-bold text-black mb-4">
            {" "}
            Courses: {courses.map((course) => `${course},`)}
          </h3>
          <button
            type="button"
            onClick={() => navigate("/student")}
            className="inline-block rounded bg-yellow-700 text-white bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            View All Students
          </button>
        </div>
      </div>
    </div>
  );
}

export default Student;
