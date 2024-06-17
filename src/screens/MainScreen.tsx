import React from "react";
import { connect } from "react-redux";
import AmountComponent from "../components/AmountComponent";
import { setInvestmentData } from "../Store/actions";

// @ts-ignore
const MainScreen = ({ investmentData, setInvestmentData }) => {
  const updateInvestmentData = (values: any) => {
    setInvestmentData(values);
  };

  return (
    <AmountComponent
      formValues={investmentData}
      updateInvestmentData={updateInvestmentData}
    />
  );
};

const mapStateToProps = (state: any) => ({
  investmentData: state.investmentData,
});

const mapDispatchToProps = (dispatch: any) => ({
  setInvestmentData: (state: any) => dispatch(setInvestmentData(state)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
