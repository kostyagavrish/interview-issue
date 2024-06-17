export const setInvestmentData = (
  state: any,
): { type: string; payload: any } => {
  return {
    type: "INVESTMENT_DATA_SET",
    payload: state,
  };
};
