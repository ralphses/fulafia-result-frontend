import React from "react";
import { useNavigate, useLocation } from "react-router";

function AddStudentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  return (
    <div className="container text-center font-bold px-4 mx-auto sm:px-8 min-h-screen flex flex-col">
      <div className="py-10 px-1 flex-grow">
        <div class="block rounded-lg mb-5 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Student Registration success
          </h5>
          <h3 className="font-bold text-black">
            {" "}
            Student Name: {params.get("name")}
          </h3>
          <h3 className="font-bold text-black">
            {" "}
            Student Matric: {params.get("matric")}
          </h3>
          <h3 className="font-bold text-black">
            {" "}
            Student Certificate Verification Number: {params.get("resultCode")}
          </h3>
          <h3 className="font-bold text-black">
            {" "}
            Student Result Passcode: {params.get("passCode")}
          </h3>
          <button
            type="button"
            onClick={() => navigate("/student")}
            class="inline-block rounded bg-yellow-700 text-white bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
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

export default AddStudentSuccess;
