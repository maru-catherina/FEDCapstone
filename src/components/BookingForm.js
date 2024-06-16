import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData({ ...formData, date: selectedDate });
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  const isFormValid = () => {
    return formData.date && formData.time && formData.occasion;
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={formData.date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} required>
        {availableTimes && availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" min="1" max="10" value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={(e) => setFormData({ ...formData, occasion: e.target.value })} required>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" aria-label="Reserve Table Button" disabled={!isFormValid()}>Reserve a Table</button>
    </form>
  );
};

export default BookingForm;