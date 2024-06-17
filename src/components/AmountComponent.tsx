import { Formik } from "formik";

type Props = {
  formValues: any;
  updateInvestmentData: (values: any) => void;
};
const AmountComponent = ({ formValues, updateInvestmentData }: Props) => {
  const { isRecurring } = formValues;
  const inputName = isRecurring ? "recurringAmount" : "oneTimeAmount";
  const submitForm = (values: any) => {
    console.log("Submitted values: ", values);
  };

  const handleButtonSetValue = (value: number) => () => {
    updateInvestmentData({
      oneTimeAmount: isRecurring ? 0 : value,
      recurringAmount: isRecurring ? value : 0,
    });
  };

  const toggleRecurring = () => {
    const value = isRecurring
      ? formValues["recurringAmount"]
      : formValues["oneTimeAmount"];
    const newRecurring = !isRecurring;
    updateInvestmentData({
      oneTimeAmount: newRecurring ? 0 : value,
      recurringAmount: newRecurring ? value : 0,
      isRecurring: newRecurring,
    });
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={{
          ...formValues,
        }}
        onSubmit={submitForm}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize
      >
        {({ values, handleSubmit, setFieldValue }) => {
          const onChangeInput = (e: any) => {
            setFieldValue(inputName, +e.target.value);
          };
          return (
            <form
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
              }}
              onSubmit={function submitAmountForm(e) {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <button type={"button"} onClick={handleButtonSetValue(500)}>
                  Set 500$
                </button>
                <button type={"button"} onClick={handleButtonSetValue(25000)}>
                  Set 25000$
                </button>
                <button type={"button"} onClick={handleButtonSetValue(10000)}>
                  Set 10000$
                </button>
              </div>
              <input
                value={values[inputName]}
                onChange={onChangeInput}
                name={inputName}
              />
              <div>
                <button type={"button"} onClick={toggleRecurring}>
                  Toggle Recurring
                </button>
                <span> Is Recurring: {isRecurring.toString()}</span>
              </div>
              <button type={"submit"}>Submit form</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AmountComponent;
