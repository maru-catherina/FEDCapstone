import { initializeTimes, updateTimes } from './path-to-reducer-file';

// Test initializeTimes function
test('initializeTimes returns correct initial times', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});

// Test updateTimes function
test('updateTimes returns same times regardless of date', () => {
    const state = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const action = { type: 'UPDATE_TIMES', date: '2023-06-15' };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
});