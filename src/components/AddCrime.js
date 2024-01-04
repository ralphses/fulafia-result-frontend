import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

// Initialize react-modal
Modal.setAppElement('#root'); // Replace '#root' with the ID of your root element

const AddCrime = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [lodgeName, setLodgeName] = useState('');
  const [area, setArea] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const openModal = (message) => {
    setModalIsOpen(true);
    setModalMessage(message);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalMessage('');
    // Clear all input fields
    setRoomNumber('');
    setLodgeName('');
    setArea('');
    setOtherDetails('');
    setErrors({});
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!roomNumber) {
      validationErrors.roomNumber = 'Please provide a room number.';
    }

    if (!lodgeName) {
      validationErrors.lodgeName = 'Please provide a lodge name.';
    }

    if (!area) {
      validationErrors.area = 'Please provide an area.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const data = {
        roomNumber,
        lodgeName,
        area,
        otherDetails,
      };

      const response = await axios.post('http://localhost:8080/api/v1/crime-scene/', data);

      if (response.status === 201) {
        setSuccess('Data submitted successfully');
        openModal('Data submitted successfully');
      } else {
        setErrors({ general: 'An error occurred while submitting the data.' });
      }
    } catch (error) {
      setErrors({ general: 'An error occurred while submitting the data.' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-cyan-700 to-blue-800">
      <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">New Crime Scene</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-700">
              Room Number
            </label>
            <input
              type="text"
              id="roomNumber"
              placeholder="Enter room number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
            />
            {errors.roomNumber && <p className="text-red-600">{errors.roomNumber}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="lodgeName" className="block text-sm font-medium text-gray-700">
              Lodge Name
            </label>
            <input
              type="text"
              id="lodgeName"
              placeholder="Enter lodge name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lodgeName}
              onChange={(e) => setLodgeName(e.target.value)}
            />
            {errors.lodgeName && <p className="text-red-600">{errors.lodgeName}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="area" className="block text-sm font-medium text-gray-700">
              Area
            </label>
            <input
              type="text"
              id="area"
              placeholder="Enter area"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            {errors.area && <p className="text-red-600">{errors.area}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="otherDetails" className="block text-sm font-medium text-gray-700">
              Other Details
            </label>
            <textarea
              id="otherDetails"
              placeholder="Enter other details (optional)"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={otherDetails}
              onChange={(e) => setOtherDetails(e.target.value)}
            />
            {errors.otherDetails && <p className="text-red-600">{errors.otherDetails}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover-bg-blue-700 focus-outline-none"
          >
            Submit
          </button>
          {errors.general && <p className="text-red-600 mt-4">{errors.general}</p>}
          {success && <p className="text-green-600 mt-4">{success}</p>}
        </form>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: 'none',
            borderRadius: '8px',
            maxWidth: '300px',
          },
        }}
      >
        <p className="text-blue-800 text-lg font-semibold mb-4">{modalMessage}</p>
        <button
          onClick={closeModal}
          className="bg-blue-600 text-white py-2 rounded-md hover-bg-blue-700 focus-outline-none"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AddCrime;
