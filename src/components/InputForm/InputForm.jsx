import { Formik } from 'formik';
import ValidationSchema from './validationSchema';
import { getVinData } from './getData';
import {
  StyledField,
  StyledForm,
  StyledErrMsg,
  StyledButton,
} from './InputForm.styled';

export const InputForm = ({ setMessage, addVinCode, setResult }) => {
  return (
    <>
      <Formik
        initialValues={{ vinCode: '' }}
        validationSchema={ValidationSchema}
        onSubmit={async ({ vinCode }, actions) => {
          addVinCode(vinCode);
          const data = await getVinData(vinCode);
          console.log(data);
          setMessage(data.Message);
          setResult(data.Results);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledField
            id="vinCode"
            name="vinCode"
            placeholder="Enter VIN code"
          />
          <StyledErrMsg name="vinCode" />
          <StyledButton type="submit">Check VIN</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
