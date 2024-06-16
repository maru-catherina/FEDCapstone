import { initializeTimes } from './reducer';

// Mock fetchAPI to return a non-empty array for testing
jest.mock('./api', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['10:00 AM', '12:00 PM', '2:00 PM'])) // Adjust return values as needed
}));

describe('initializeTimes function', () => {
  it('should fetch and initialize times correctly', async () => {
    const times = await initializeTimes();
    expect(times).toEqual(['10:00 AM', '12:00 PM', '2:00 PM']);
  });
});