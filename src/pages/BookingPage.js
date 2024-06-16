import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import ConfirmedBooking from '../components/ConfirmedBooking';

const BookingPage = () => {
  return (
    <Routes>
      <Route path="/" element={<BookingForm />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};


export default BookingPage;