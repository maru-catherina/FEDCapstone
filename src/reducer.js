export const initializeTimes = () => {
    // Initial state setup
    return []; // or your initial state structure
  };
  
  export const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // Logic to update state based on action.payload
        return { ...state, times: action.payload }; // Example update, adjust as per your state structure
      default:
        return state;
    }
  };