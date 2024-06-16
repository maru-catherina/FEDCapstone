
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';
import { initializeTimes, updateTimes } from '../reducer';

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const submitForm = (formData) => {
    const submitForm = (formData) => {
      const success = window.submitAPI(formData); // Assuming submitAPI is globally available
      if (success) {
        navigate('/confirmed');
      } else {
        alert('Reservation failed. Please try again.');
      }
    };
  };

  return (
    <Routes>
      <Route path="/booking" element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};

export default Main;
