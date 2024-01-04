// CrimeTable.js
import React from "react";
import axios from "axios";

const CrimeTable = ({ crimes, onCrimeDelete, onCrimeResolve }) => {
  if (crimes.length === 0) {
    return (
      <p className="text-blue-800 font-semibold text-center mt-4">
        No crimes to display.
      </p>
    );
  }

  // Function to handle delete action
  const handleDelete = async (crimeId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/report/${crimeId}`);
      onCrimeDelete(crimeId); // Update the UI after successful delete
    } catch (error) {
      console.error("Error deleting crime:", error);
    }
  };

  // Function to handle resolve action
  const handleResolve = async (crimeId) => {
    try {
      await axios.put(`http://localhost:8080/api/v1/report/${crimeId}`);
      onCrimeResolve(crimeId, "Resolved"); // Update the UI after successful resolve
    } catch (error) {
      console.error("Error resolving crime:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="p-4 font-semibold">S/N</th>
            <th className="p-4 font-semibold">Crime Name</th>
            <th className="p-4 font-semibold">Crime Scene</th>
            <th className="p-4 font-semibold">Reporter</th>
            <th className="p-4 font-semibold">Date Reported</th>
            <th className="p-4 font-semibold">Status</th>
            <th className="p-4 font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
          {crimes.map((crime, index) => (
            <tr
              key={crime.id}
              className={`text-blue-800 ${
                index % 2 === 0 ? "bg-gray-100" : ""
              } hover:bg-gray-200 transition duration-200`}
            >
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{crime.name}</td>
              <td className="p-4">{crime.scene}</td>
              <td className="p-4">{crime.reporter}</td>
              <td className="p-4">{crime.dateReported}</td>
              <td
                className={`p-4 ${
                  crime.status === "Resolved"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {crime.status}
              </td>
              <td className="p-4 space-x-2">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200 transform hover:scale-105"
                  onClick={() => handleDelete(crime.id)}
                >
                  Delete
                </button>
                {crime.status !== "Resolved" && (
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 transform hover:scale-105"
                    onClick={() => handleResolve(crime.id)}
                  >
                    Resolve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrimeTable;
