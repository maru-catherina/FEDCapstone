import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm component', () => {
  it('should render with HTML5 validation attributes', () => {
    const { getByLabelText } = render(<BookingForm />);

    const dateInput = getByLabelText('Choose date');
    const timeSelect = getByLabelText('Choose time');
    const guestsInput = getByLabelText('Number of guests');
    const occasionSelect = getByLabelText('Occasion');

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();

    expect(timeSelect).toHaveAttribute('required');
    expect(timeSelect).toHaveAttribute('aria-required', 'true');

    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();

    expect(occasionSelect).toHaveAttribute('required');
    expect(occasionSelect).toHaveAttribute('aria-required', 'true');
  });
})
describe('Form submission', () => {
    it('should disable submit button when form is invalid', () => {
      const { getByText, getByLabelText } = render(<BookingForm />);
  
      const submitButton = getByText('Reserve a Table');
      expect(submitButton).toBeDisabled();
  
      fireEvent.change(getByLabelText('Choose date'), { target: { value: '2024-06-20' } });
      fireEvent.change(getByLabelText('Choose time'), { target: { value: '12:00 PM' } });
      fireEvent.change(getByLabelText('Number of guests'), { target: { value: '2' } });
      fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Birthday' } });
  
      expect(submitButton).not.toBeDisabled();
    });
  
    it('should prevent form submission if required fields are missing', () => {
      const { getByText } = render(<BookingForm />);
      const submitButton = getByText('Reserve a Table');
  
      fireEvent.click(submitButton);
  
      // You can check for error messages or prevent submission in other ways based on your validation logic
      // For HTML5 validation, browser will prevent form submission if required fields are missing
      // Add assertions based on your specific validation logic
    });
});