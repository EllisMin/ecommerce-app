import { UserActionTypes } from "./user.types";

// Initial state of reducer just like this.state in constructor
const INITIAL_STATE = {
  currentUser: null
};

// state is a current state and returns a new state
// If state is undefined, set it to INITIAL_STATE (ES6 feature)
const userReducer = (state = INITIAL_STATE, action) => {
  //   switch (action.type) {
  //     case "SET_CURRENT_USER":
  //       return {
  //         ...state,
  //         currentUser: action.payload
  //       };
  // default:
  //   return state;
  //   }
  if (action.type === UserActionTypes.SET_CURRENT_USER) {
    return {
      ...state, // Everything else about state
      currentUser: action.payload
    };
  } else {
    return state;
  }
};

export default userReducer;
