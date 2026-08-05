import { Formik, Field, Form, ErrorMessage } from 'formik';
import ValidationSchema from './validationSchema';
import { getVinData } from './getData';

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
        <Form>
          <Field id="vinCode" name="vinCode" placeholder="Enter VIN code" />
          <ErrorMessage name="vinCode" />
          <button type="submit">Check VIN</button>
        </Form>
      </Formik>
    </>
  );
};
