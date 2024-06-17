import { createStore } from "redux";

const initialState = {
  investmentData: {
    oneTimeAmount: 0,
    recurringAmount: 0,
    isRecurring: false,
  },
};
const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "INVESTMENT_DATA_SET":
      return {
        ...state,
        investmentData: { ...state.investmentData, ...action.payload },
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;
