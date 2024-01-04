import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

// Ensure React Modal is accessible to the app
Modal.setAppElement("#root");

const ReportCrime = () => {
  const [crimeType, setCrimeType] = useState("");
  const [crimeScene, setCrimeScene] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [lodgeName, setLodgeName] = useState("");
  const [area, setArea] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [reporter, setReporter] = useState("");
  const [isOthersSelected, setIsOthersSelected] = useState(false);
  const [crimeTypes, setCrimeTypes] = useState([]);
  const [crimeScenes, setCrimeScenes] = useState([]);
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [submissionResult, setSubmissionResult] = useState("");

  useEffect(() => {
    // Fetch crime types and scenes from an external service
    axios
      .get("http://localhost:8080/api/v1/crime/0")
      .then((response) => {
        const crimes = response.data.data.crimes;
        setCrimeTypes(crimes);
      })
      .catch((error) => {
        console.error("Error fetching crime types:", error);
      });

    axios
      .get("http://localhost:8080/api/v1/crime-scene/0")
      .then((response) => {
        const crimeScenes = response.data.data.scenes;
        setCrimeScenes(crimeScenes);
      })
      .catch((error) => {
        console.error("Error fetching crime scenes:", error);
      });
  }, []);

  const handleCrimeTypeChange = (e) => {
    const selectedType = e.target.value;
    setCrimeType(selectedType);
  };

  const handleCrimeSceneChange = (e) => {
    const selectedScene = e.target.value;
    setCrimeScene(selectedScene);
    if (selectedScene === "0") {
      setIsOthersSelected(true);
    } else {
      setIsOthersSelected(false);
    }
  };

  const handleReporterChange = (e) => {
    const reporterValue = e.target.value;
    setReporter(reporterValue);
  };

  const validateForm = () => {
    const errors = {};

    if (!crimeType) {
      errors.crimeType = "Crime type is required";
    }

    if (!crimeScene) {
      errors.crimeScene = "Crime scene is required";
    }

    if (isOthersSelected) {
      if (!roomNumber) {
        errors.roomNumber = "Room number is required for a new scene";
      }
      if (!lodgeName) {
        errors.lodgeName = "Lodge name is required for a new scene";
      }
      if (!area) {
        errors.area = "Area is required for a new scene";
      }
    }

    if (!reporter) {
      errors.reporter = "Reporter name is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const crimeData = {
        crimeType,
        crimeScene: isOthersSelected ? "0" : crimeScene,
        roomNumber: isOthersSelected ? roomNumber : "",
        lodgeName: isOthersSelected ? lodgeName : "",
        area: isOthersSelected ? area : "",
        otherDetails,
        reporter,
      };

      // Send a POST request to the external service with crimeData
      axios
        .post("http://localhost:8080/api/v1/report/report", crimeData)
        .then((response) => {
          setSubmissionResult("Crime report submitted successfully");
          setShowSuccessModal(true);
        })
        .catch((error) => {
          console.error("Error submitting crime report:", error);
          setSubmissionResult("Error submitting crime report");
          setShowFailureModal(true);
        });
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setShowFailureModal(false);
    setIsOthersSelected(false);

    // Reset all the form fields here
    setCrimeType("");
    setCrimeScene("");
    setRoomNumber("");
    setLodgeName("");
    setArea("");
    setOtherDetails("");
    setReporter("");
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
          Report a Crime
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="crimeType"
              className="block text-gray-700 font-bold mb-2"
            >
              Type of Crime
            </label>
            <select
              id="crimeType"
              name="crimeType"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.crimeType ? "border-red-500" : ""
              }`}
              value={crimeType}
              onChange={handleCrimeTypeChange}
            >
              <option value="">Select a crime type</option>
              {crimeTypes.map((type) => (
                <option key={type.code} value={type.code}>
                  {`${type.name} (${type.description})`}
                </option>
              ))}
            </select>
            {errors.crimeType && (
              <p className="text-red-500 text-sm">{errors.crimeType}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="crimeScene"
              className="block text-gray-700 font-bold mb-2"
            >
              Crime Scene
            </label>
            <select
              id="crimeScene"
              name="crimeScene"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.crimeScene ? "border-red-500" : ""
              }`}
              value={crimeScene}
              onChange={handleCrimeSceneChange}
            >
              <option value="">Select a crime scene</option>
              {crimeScenes.map((scene) => (
                <option key={scene.code} value={scene.code}>
                  {`(${scene.code}) ${scene.roomNo}, ${scene.lodgeName}, ${scene.area}`}
                </option>
              ))}
              <option value="0">New Scene</option>
            </select>
            {errors.crimeScene && (
              <p className="text-red-500 text-sm">{errors.crimeScene}</p>
            )}
          </div>
          {isOthersSelected && (
            <div className="mb-4">
              <label
                htmlFor="roomNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                Room Number
              </label>
              <input
                type="text"
                id="roomNumber"
                name="roomNumber"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.roomNumber ? "border-red-500" : ""
                }`}
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
              />
              {errors.roomNumber && (
                <p className="text-red-500 text-sm">{errors.roomNumber}</p>
              )}
            </div>
          )}
          {isOthersSelected && (
            <div className="mb-4">
              <label
                htmlFor="lodgeName"
                className="block text-gray-700 font-bold mb-2"
              >
                Lodge Name
              </label>
              <input
                type="text"
                id="lodgeName"
                name="lodgeName"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.lodgeName ? "border-red-500" : ""
                }`}
                value={lodgeName}
                onChange={(e) => setLodgeName(e.target.value)}
              />
              {errors.lodgeName && (
                <p className="text-red-500 text-sm">{errors.lodgeName}</p>
              )}
            </div>
          )}
          {isOthersSelected && (
            <div className="mb-4">
              <label
                htmlFor="area"
                className="block text-gray-700 font-bold mb-2"
              >
                Area
              </label>
              <input
                type="text"
                id="area"
                name="area"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.area ? "border-red-500" : ""
                }`}
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
              {errors.area && (
                <p className="text-red-500 text-sm">{errors.area}</p>
              )}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="otherDetails"
              className="block text-gray-700 font-bold mb-2"
            >
              Other Details (Optional)
            </label>
            <textarea
              id="otherDetails"
              name="otherDetails"
              className="w-full px-3 py-2 border rounded-md"
              value={otherDetails}
              onChange={(e) => setOtherDetails(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="reporter"
              className="block text-gray-700 font-bold mb-2"
            >
              Reporter Phone Number
            </label>
            <input
              type="text"
              id="reporter"
              name="reporter"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.reporter ? "border-red-500" : ""
              }`}
              value={reporter}
              onChange={handleReporterChange}
            />
            {errors.reporter && (
              <p className="text-red-500 text-sm">{errors.reporter}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none transition-transform duration-300 transform hover:scale-105"
          >
            Submit Report
          </button>
        </form>

        <Modal
          isOpen={showSuccessModal}
          onRequestClose={closeModal}
          contentLabel="Success Modal"
          overlayClassName="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75"
          className="relative bg-white w-full max-w-md p-6 mx-auto rounded shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Success</h2>
          <p>{submissionResult}</p>
          <button
            onClick={closeModal}
            className="mt-4 p-2 bg-blue-600 text-white rounded"
          >
            Close
          </button>
        </Modal>

        <Modal
          isOpen={showFailureModal}
          onRequestClose={closeModal}
          contentLabel="Failure Modal"
          overlayClassName="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75"
          className="relative bg-white w-full max-w-md p-6 mx-auto rounded shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Failure</h2>
          <p>{submissionResult}</p>
          <button
            onClick={closeModal}
            className="mt-4 p-2 bg-red-600 text-white rounded"
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default ReportCrime;
