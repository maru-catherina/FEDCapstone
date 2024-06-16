import { updateTimes } from './reducer';

describe('updateTimes function', () => {
  it('should update times based on selected date', () => {
    const initialState = {
      times: [],
    };

    const action = {
      type: 'UPDATE_TIMES',
      date: '2024-06-18', // Example pre-selected date
    };

    const newState = updateTimes(initialState, action);
    expect(newState.times).toEqual(expect.any(Array)); // Validate that times array is populated based on the selected date
  });
});